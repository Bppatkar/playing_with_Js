import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.models.js';
import { loginSchema, registerSchema } from '../validation/schemas,js';

export const registerController = async (req, res) => {
  try {
    const validateData = registerSchema.parse(req.body);
    let user = await User.findOne({ email: validateData.email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    // hashing pass
    const hashedPass = await bcrypt.hash(validateData.password, 10);

    //create new user
    user = new User({
      name: validateData.name,
      email: validateData.email,
      password: hashedPass,
    });
    await user.save();

    // sign and return jwt
    jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Token generation failed');
        }
        res.status(201).json({
          token,
          user: { id: user._id, name: user.name, email: user.email },
        });
      }
    );
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

    const user = await User.findOne({ email: validateData.email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // compare pass
    const isMatch = await bcrypt.compare(validateData.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Token generation failed');
        }
        res.json({ token });
      }
    );
  } catch (error) {
    if (error.issues) {
      return res.status(400).json({ errors: error.issues });
    }
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
