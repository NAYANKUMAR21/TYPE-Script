// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect } from '@/config/db';
import { authModel } from '@/models/auth.model';
import { client } from '@/REdis';
import jwt from 'jsonwebtoken';
export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    await client.connect();
    let x = await client.get(email);
    await client.disconnect();
    if (x) {
      return res.status(200).send({ token: x, message: 'from here' });
    }
    await connect();
    if (req.method === 'POST') {
      const creds = await authModel.findOne({ email });
      console.log('req');
      if (creds) {
        return res.status(404).send('Account already created');
      }
      await client.connect();
      const createAcount = await authModel.create({ email, password });

      let token = jwt.sign({ id: email, roll: createAcount._id }, 'ABC');
      await client.set(email, token);
      await client.disconnect();
      return res.status(200).send({
        message: 'Successfully Account created ',
        email,
        token,
      });
    }
  } catch (er) {
    return res.status(404).send({ message: 'Something went wrong Signup' });
  }
}
