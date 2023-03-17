import { connect } from '@/config/db';
import { authModel } from '@/models/auth.model';
async function getData(req, res) {
  await connect();
  const getALl = await authModel.find();
  return res.status(200).send(getALl);
}
export default getData;
