import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.models.js';
import { loginSchema, registerSchema } from '../validation/schemas.js';

const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '24h' });

export const registerController = async (req, res) => {
  try {
    const validateData = registerSchema.parse(req.body);

    let existingUser = await User.findOne({
      email: validateData.email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    // hashing pass
    const hashedPass = await bcrypt.hash(validateData.password, 10);

    //create new user
    const user = new User({
      name: validateData.name.trim(),
      email: validateData.email.toLowerCase().trim(),
      password: hashedPass,
    });
    await user.save();

    // sign and return jwt
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.issues) {
      return res.status(400).json({ errors: error.issues });
    }
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

export const loginController = async (req, res) => {
  try {
    const validateData = loginSchema.parse(req.body);

    const user = await User.findOne({
      email: validateData.email.toLowerCase(),
    });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, msg: 'Invalid credentials' });
    }

    // compare pass
    const isMatch = await bcrypt.compare(validateData.password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, msg: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.issues) {
      return res.status(400).json({ errors: error.issues });
    }
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

export const getMeController = async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error in getMeController:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error during token check',
    });
  }
};

export const updateProfileController = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error in updateProfile controller:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const deleteAccountController = async (req, res) => {
  try {
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    await User.findByIdAndDelete(req.user);

    res.status(200).json({
      success: true,
      message: 'Account deleted successfully',
    });
  } catch (error) {
    console.error('Error in deleteAccount controller:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
