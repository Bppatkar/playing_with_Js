var foo = 10;
function bar() {
  console.log(foo); // undefined
  var foo = 26;
}

bar();


//! promise
// const data = { name: 'bhanu', age: 25, admin: false };
// const fetchData = () => {
//   let success = true;

//   return new Promise((resolve, reject) => {
//     if (success) {
//       setTimeout(() => {
//         console.log('Resolving with data:', data);
//         resolve(data);
//       }, 2000);
//     } else {
//       reject('data not found');
//     }
//   });
// };

// fetchData()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

//! async await
// const data = { name: 'bhanu', age: 25, admin: false };

// const fetchData = (api) => {
//   let success = true;

//   return new Promise((resolve, reject) => {
//     if (success) {
//       resolve(
//         fetch(api)
//           .then((response) => {
//             return response;
//           })
//           .catch((err) => console.error(err))
//       );
//     } else reject('data not found');
//   });
// };

// (async () => {
//   try {
//     let data = await fetchData('https://fakestoreapi.com/products');
//     let resdata = await data.json();
//     console.log('final result:', resdata);
//   } catch (error) {
//     console.error(error);
//   }
// })();

//! call {
// function cook(ind1, ind2) {
//   let name = 'aman';
//   console.log(`${this.name} is having dinner with ${ind1} and ${ind2}`);
// }

// const user = { name: 'bhanu' };

// cook('roti', 'sabzi')
// cook.call(user, 'palak', 'roti');

//! apply

// function cook(ind1, ind2) {
//   console.log(`${this.name} is having dinner with ${ind1} and ${ind2}`);
// }

// const user = { name: 'bhanu' };

// cook.apply(user, ['palak', 'roti']);

//! bind
// function cook(ind1, ind2) {
//   console.log(`${this.name} is having dinner with ${ind1} and ${ind2}`);
// }

// const user = { name: 'bhanu' };

// let result = cook.bind(user, 'palak', 'roti');

// console.log(result());

// document
//   .getElementById('newBtn')
//   .addEventListener('click', () => console.log('button is called'), true);

//!  promise vs async await

// fetchData()
//   .then((result1) => fetchData1(result1))
//   .then((result2) => console.log(result2));

// async function fetchData() {
//   try {
//     const result1 = await fetchData1(result);
//     const result2 = await fetchData2(result1);
//     console.log(result2);
//   } catch (error) {
//     console.error(error);
//   }
// }

//! reduce
// let arr = [55, 34, 78, 12, 90];

// let ans = arr.reduce((acc, curVal) => acc + curVal, 0);
// console.log(ans);
// console.log(arr)

//! currying

// function add(a) {
//   return function second(b) {
//     return a + b;
//   };
// }

// let ans = add(5)
// let data= ans(6)
// console.log(data)

//! shallow and deep copy

// const original = {
//   name: 'John',
//   age: 25,
//   address: {
//     city: 'New York',
//     country: 'USA',
//   },
//   hobbies: ['reading', 'gaming'],
// };

// const shallow1 = { ...original };

// const shallow2 = Object.assign({}, original);

// let arr = [1, 2, 3, [4, 5]];
// const shallow3 = arr.slice();

//! express js server

// import express from 'express';
// const app = express();

// const PORT = 4000;

// app.use((req, res, next) => {
//   next();
// });

// app.use((err, req, res, next) => {
//   res.json({ messsage: 'false', status: 500 });
// });

// app.get('user', (req, res)=>{
//   res.json()
// })

// app.get('/healthCheck', (req, res) => res.send('data recieved'));
// app.listen(PORT, () => console.log('server is running'));

//! functional component

// function greeting() {
//   return <h1>data</h1>;
// }

// const greeting1 = () => {
//   return <h1>data</h1>;
// };

//! creating index in mongodb

// db.myCOllection.createIndex({ email: 1 });

//! define schema
// const userSchema = new mongoose.Schema(
//   { name: { type: string, required: true } },
//   { timeStamp: true }
// );

// const User = mongoose.model("User", userSchema)

//! .env
// import dotenv from 'dotenv';
// dotenv.conifg();

//! sesion managment

// const sesion = require('express- sesion');
// app.use(
//   sesion({
//     secret: 'secret-key',
//     reSave: false,
//   })
// );

//! JOI validation
// const Joi = require('joi');

// // Define schema
// const userSchema = Joi.object({
//   name: Joi.string().min(3).max(30).required(),
//   email: Joi.string().email().required(),
//   age: Joi.number().integer().min(18).max(120),
// });

// // Validate data
// const result = userSchema.validate({
//   name: 'John Doe',
//   email: 'john@example.com',
//   age: 25,
// });

// if (result.error) {
//   console.log(result.error.details);
// } else {
//   console.log('Validation passed!');
// }

//! use Reducer syntax
// function reducer(state, aciton) {
//   switch (aciton.type) {
//     case 'increment':
//   }
// }
// const [state, dispatch] = useReducer(reducer,initialState);

//! multer file upload
// import multer from 'multer';

// const upload = multer({ dest: 'uploads/' });

// app.post('upload', upload.single('file'), (req, res) => {
//   res.send('file uploaded');
// });

//! DOcker file for backend

// FROM node:18
// WORKDIR /app
// COPY package*.json./
// RUN npm install
// COPY...
// RUN npm run build
// EXPOSE 3000
// CMD ['npx', 'serve', 'build']

//! DOCKERFILE for forntend
// FROM node:18
// WORKDIR /app
// COPY package*.json./
// RUN npm install
// COPY...
// RUN npm run build
// EXPOSE 3000
// CMD ['node' 'server.js']

//! password encryption
//bcrypt, argon, passport
// bcrypt.hash('password', salt);

//! useEffect

// const ExampleComponent = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>{' '}
//     </div>
//   );
// };

//! adding function in prototype

// Array.prototype.customMap = function (cb) {
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i], i, this));
//   }
//   return result;
// };

// //? example
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.customMap((e) => e * 2);
// console.log(doubled);

// const square = numbers.customMap((num, index) => {
//   return `Index ${index}: ${num * num}`;
// });
// console.log(square);

//! HOC [higher order components in react]

// const HOC = (WrappedCOmponent) => {
//   return (props) => {
//     return <WrappedCOmponent {...props} />;
//   };
// };

// const MyComponent = ({ msg }) => {
//   return (
//     <div>
//       <h1>message: {msg}</h1>
//     </div>
//   );
// };

// const EnhancedComponent = HOC(MyComponent);

// const App = () => {
//   return (
//     <div>
//       <EnhancedComponent msg="hello from app" />
//     </div>
//   );
// };

//! streams in node js
// const fs = require('fs');
// const { Transform, Duplex } = require('stream');

// const readableStream = fs.createReadStream('example.txt', 'utf-8');
// const transformStream = new Transform();

// transformStream._transform = function (chunk, encoding, cb) {
//   const upperCase = chunk.toString().toUpperCase();
//   cb(null, upperCase);
// };

// const writableStream = fs.createWriteStream('result.txt');

// const duplexStream = new Duplex({
//   read(size) {},

//   write(chunk, encoding, cb) {
//     console.log('Processing that data', chunk.toString());
//     this.push(chunk);
//     cb();
//   },
// });

// readableStream
//   .pipe(duplexStream)
//   .pipe(transformStream)
//   .pipe(writableStream)
//   .on('finish', () => {
//     console.log('All process is complete');
//   });

//! callback hell and pyramid of doom

// const heading1 = document.getElementById('heading1');
// const heading2 = document.getElementById('heading2');
// const heading3 = document.getElementById('heading3');
// const heading4 = document.getElementById('heading4');
// const heading5 = document.getElementById('heading5');
// const heading6 = document.getElementById('heading6');
// const heading7 = document.getElementById('heading7');
// const heading8 = document.getElementById('heading8');
// const heading9 = document.getElementById('heading9');
// const heading10 = document.getElementById('heading10');

// setTimeout(() => {
//   heading1.textContent = 'text1';
//   heading1.color = 'red';
//   setTimeout(() => {
//     heading1.textContent = 'text1';
//     heading1.color = 'red';
//     setTimeout(() => {
//       heading1.textContent = 'text1';
//       heading1.color = 'red';
//       setTimeout(() => {
//         heading1.textContent = 'text1';
//         heading1.color = 'red';
//         setTimeout(() => {
//           heading1.textContent = 'text1';
//           heading1.color = 'red';
//           setTimeout(() => {
//             heading1.textContent = 'text1';
//             heading1.color = 'red';
//           }, 6000);
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// const delay = (ms) => new Promise((resolve) => setTimeout((resolve, ms)));

// //? example 2
// doSomething((result1) => {
//   doSomethingElse((result2) => {
//     doAnotherThing((result3) => {
//       doFinalThing((result4) => {
//         console.log('all things done', result4);
//       });
//       console.log('all things done', result3);
//     });
//     console.log('all things done', result2);
//   });
//   console.log('all things done', result1);
// });

// //* solution of example 2 promise
// doSomething()
//   .then((result1) => doSomethingElse(result1))
//   .then((result2) => doAnotherThing(result2))
//   .then((result3) => doAnotherThing(result3))
//   .then((result4) => doFinalThing(result4))
//   .catch((err) => console.error(err));

// //* solution of example 2 usnig async await
// async function processTask() {
//   try {
//     const result1 = await doSomething();
//     const result2 = await doSomethingElse();
//     const result3 = await doAnotherThing();
//     const result4 = await doFinalThing();
//     console.log('All done');
//   } catch (error) {
//     console.error(error);
//   }
// }
// processTask();

//! diff btw process.nextTick() and setImmediate()?
// setImmediate(() => console.log('I run immediately'));
// process.nextTick(() => console.log('But I run before that'));

// let count = 0;
// const cb = () => {
//   console.log(`Processing nextTick cb ${++count}`);
//   process.nextTick(cb);
// };
// setImmediate(() => console.log('setImmediate is called'));
// setTimeout(() => console.log('setTimeout executed'), 100);
// process.nextTick(cb);
// console.log('Start');

//! server using express
// import { express } from 'express';
// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.json({ message: 'job done', status: 200 });
// });

// app.listen(PORT, () => {
//   console.log('Our server is running....');
// });

//! custome error in express js

// class NotFoundError extends Error {
//   constructor(message) {
//     super(message);
//     this.status = 404;
//     this.name = 'Not Found Eror';
//   }
// }

// app.get('non_existingPage', (req, res, next) => {
//   next(new NotFoundError('Page not found...'));
// });

//! authenticaiton and authrization using express js
// import { express } from 'express';
// import jwt from 'jsonwebtoken';
// const app = express();
// const PORT = 3000;

// app.use(express.json());
// const SECRET_KEY = 'secret_key';

// const user = {
//   id: Math.random() + 1 * 10,
//   userName: 'username',
//   userPass: 'pass234',
// };
// app.post('/login', (req, res) => {
//   try {
//     const { userName, userPass } = req.body;
//     if (!userName && !userPass) {
//       return req.json({ message: 'all fields are required', status: 404 });
//     }
//     const user = await User.find(u=> u.userName === userName && u.userPass === userPass);
//     if(!user){  return req.json({ message: 'user Not found', status: 404 });}

//     const token = jwt.sign({userData: user.id},SECRET_KEY,{expiresIn: '1h'})
//      res.json({
//         message: 'Login successful',
//         status: 200,
//         token,
//         user: { id: user.id, userName: user.userName }
//       });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({
//       message: 'Internal server error',
//       status: 500
//     });
//   }
// });

// const authentiateTokem = (req,res, next)=>{
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]
//   if(!token){
//       return res.status(401).json({
//       message: 'Access token required',
//       status: 401
//     });
//   }

//   jwt.verify(token, SECRET_KEY, (err, user)=>{
//     if(err){
//        return res.status(403).json({
//         message: 'Invalid or expired token',
//         status: 403
//       });
//     }
//     req.user = user
//     next()
//   })
// }

// app.listen(PORT, () => {
//   console.log('Our server is running....');
// });

//! mongodb database connection in node and express

// const connectDb = async () => {
//   try {
//     await mongoose.connect(URL);
//     console.log('database connected');
//   } catch (error) {
//     console.error(error);
//   }
// };

//! performing CRUD in moongoose ODM for User modal

// const newUser = new User({ userName: 'bhanu', email: 'bhanu@gmail.com' });
// newUser.save();
// // or
// const newUser1 = new User.create({
//   userName: 'bhanu',
//   email: 'bhanu@gmail.com',
// });

//? Read
// User.find({ age: { $gt: 21 } })
//   .then((user) => console.log(user))
// .catch((err) => console.error(err));

//? update
// User.updateOne({ userName: 'bhanu' }, { $set: { age: 20 } })
//   .then((user) => console.log(user))
//   .catch((err) => console.error(err));

// User.findByIdAndUpdate(
//   'bibgf23r',
//   { email: 'newEmail@gmail.com' },
//   { new: true }
// )
//   .then((user) => console.log(user))
//   .catch((err) => console.error(err));

//? delete
// User.deleteOne({ username: 'john_doe' })
//   .then((result) => console.log('Delete result:', result))
//   .catch((err) => console.error(err));

//! mongodb index

// const userSchema = new mongoose.Schema(
//   {
//     email: {
//       type: string,
//       required: true,
//     },
//     userName: {
//       type: string,
//     },
//   },
//   { timeStamp: true }
// );

// export const User = mongoose.model('User', UserSchema);
// userSchema.index({ email: 1 });
//

//! population in mongodb
// const postSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//   },
//   { timeStamp: true }
// );
// const Post = moongoose.model('Post', postSchema);

// Post.findById('anyPostId')
//   .populate('author', 'username email') // populate author field , select only 'username' and 'email
//   .exec((err, post) => {
//     if (err) console.error(err);
//     else console.log(post);
//     console.log(post.author.username); // Access user data directly
//     console.log(post.author.email);
//   });

//! transactions in mongodb

// const session = await mongoose.startSession();
// session.startTransaction();

// try {
//   await Account.updateOne(
//     { _id: 'AccountA' },
//     { $inc: { balance: -100 } },
//     { session }
//   );
//   await Account.updateOne(
//     { _id: 'AccountB' },
//     { $inc: { balance: 100 } },
//     { session }
//   );

//   await session.commitTransactions();
//   console.log('successfully transfered');
// } catch (error) {
//   await session.abortTransaction();
//   console.error(error);
// } finally {
//   session.endSesssion();
// }

//! refrencing in mongodb
// id:{
//   type:mongoose.Schema.types.ObjectId;
//   ref:
// }

//! serving static file in express
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));

//! express router
// import express from 'express';
// const router = express.Router();
// router.get('/about', aboutController);

//! testing
// describe('GET /api/item', () => {
//   it('should return a list of items', async () => {
//     const res = await requestAnimationFrame(app).get('api/items');
//     expect(res.statusCode).toEqual(200);
//     exprect(res.body).toBeInstanceOf(Array);
//   });
// });

//! debouncing
// const input = document.getElementById('inputData');

// const debounce = (func, delay) => {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// };

// const myFunc = function (e) {
//   const query = e.target.value;
//   console.log(query);

//   // fetch(`http://api.example.com/search?query=${query}`)
//   //   .then((res) => res.json())
//   //   .then((result) => console.log(result));
// };

// input.addEventListener('input', debounce(myFunc, 500));

//! throttling

// const throttle = (func, delay) => {
//   let shouldCall = true;
//   return function (...args) {
//     if (!shouldCall) return;
//     shouldCall = false;
//     setTimeout(() => {
//       func(...args);
//       shouldCall = true;
//     }, delay);
//   };
// };

