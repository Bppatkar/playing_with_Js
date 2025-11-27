import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect(
      'mongodb+srv://bhanupratappatkar777:mernPracticeInterview@cluster0.22hxd2o.mongodb.net'
    );
    console.log('Database Connected Successfully');
  } catch (error) {
    console.error('Error while connecting database');
  }
}

export default connectDB;
