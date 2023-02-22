import { connect, model, models, Schema } from "mongoose"
const connectionString = 'mongodb+srv://user1:V4DpK8vNGiyrKBd4@cluster0.xzkm7.mongodb.net/blogs'

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)
    console.log("req.query.id", req.query.id)

    const id = req.query.id
    if (req.method === 'GET') {
        // Get only one document
        const doc = await Article.findOne({ _id: id })
        res.status(200).json(doc)
    }
}



const articleSchema = new Schema({
    title: String,
    content: String,
});

console.log("Mongoose Models", models)
const Article = models?.article || model('article', articleSchema);