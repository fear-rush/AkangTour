import dbConnect from '../../utils/db';
import User from '../../models/User';
import { data } from '../../utils/data';

const handler = async (req, res) => {
  await dbConnect();
  await User.deleteMany();
  await User.insertMany(data.users);
  res.send({message: 'data seeded successfully'})
};

export default handler;
