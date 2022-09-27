import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env .local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
};

export default dbConnect

// const connection = {};

// const connect = async () => {
//   if (connection.isConnected) {
//     console.log('already connected');
//     return;
//   }
//   if (mongoose.connections.length > 0) {
//     connection.isConnected = mongoose.connections[0].readyState;
//     if (connection.isConencted === 1) {
//       console.log('use previous connection');
//       return;
//     }
//     await mongoose.disconnect();
//   }
//   const db = await mongoose.connect(process.env.MONGODB_URI);
//   console.log('new connection');
//   connection.isConnected = db.connections[0].readyState;
// };

// const disconnect = async () => {
//   if (connection.isConnected) {
//     if (process.env.NODE_ENV === 'production') {
//       await mongoose.disconnect();
//       connection.isConnected = false;
//     }
//   }
// };

// const db = { connect, disconnect };

// export default db;
