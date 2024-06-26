const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// require('dotenv').config()
const port = process.env.PORT || 5000;
///middleware
app.use(cors());
app.use(express.json());

// userPass

// sharmin2nahar22
// lCbk3h2j3p900bFH

const uri =
  "mongodb+srv://sharmin2nahar22:lCbk3h2j3p900bFH@cluster0.8tcglkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //     await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //     await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("YumNest Server Side");
});

app.listen(port, () => {
  console.log(`YumNest Server Is On ${port}`);
});
