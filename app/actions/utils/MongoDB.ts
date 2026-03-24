import { MongoClient, ServerApiVersion } from "mongodb";
import { FormSubmissionData, INewsletterData } from "./types";

const uri = process.env.MONGODB_URI;

type CollectionMapping = {
  "form-submissions": FormSubmissionData;
  "constant-contact-newsletters": INewsletterData;
};

async function MongoDB<T extends keyof CollectionMapping>(
  data: CollectionMapping[T],
  collection: T
) {
  if (!uri) throw new Error(`No MongoDB URI setup for this project, aborting.`);

  const mongoClient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await mongoClient.connect();
    const database = mongoClient.db("oakwood-legal-group");
    const dbCollection = database.collection(collection);

    const result = await dbCollection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    console.log(`MongoDB Result for ${collection}:`, result);
    return result;
  } finally {
    await mongoClient.close();
  }
}

export default MongoDB;
