import express from 'express';
import {
  loginController,
  registerController,
  getMeController,
  deleteAccountController,
  updateProfileController,
} from '../controllers/user.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.route('/register').post(registerController);
router.route('/login').post(loginController);

router.route('/auth/me').get(auth, getMeController);
router.route('/profile').patch(auth, updateProfileController);
router.route('/delete').delete(auth, deleteAccountController);

export default router;
