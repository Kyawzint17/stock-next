import {connect,createConnection, model, models, Schema} from "mongoose"
const connectionString = 'mongodb+srv://user1:faznU3XiaeefyRev@cluster0.u4d9uuj.mongodb.net/stock'

export default async function handler(req, res) {
  await connect(connectionString);
  console.log("req.method: ", req.method)
  if (req.method === 'GET') {
      const docs = await Product.find()
      res.status(200).json(docs)
  } else if (req.method === 'POST') {
      console.log(req.body)      
      res.status(200).json(req.body)
      const doc = await Product.create(req.body)
      res.status(201).json(doc)
  } else {
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
const productSchema = new Schema({
  title: String,
  content: String,
});
console.log("Mongoose Models", models)
const Product = models?.product || model('product', productSchema);