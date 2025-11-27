import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect(
      process.env.MONGOURI
    );
    console.log('Database Connected Successfully');
  } catch (error) {
    console.error('Error while connecting database');
  }
}

export default connectDB;
