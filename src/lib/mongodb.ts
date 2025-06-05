import { MongoClient, Db, MongoClientOptions, ServerApiVersion } from 'mongodb';

// Check that the MongoDB URI environment variable is set
if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;

// Add connection options to match the official MongoDB Atlas pattern
const options: MongoClientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
};

// Database name - make sure to use the correct name
const dbName = process.env.MONGODB_DB_NAME || 'chartr-demo';

// Create MongoDB client with global caching for development
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// In development mode, use a global variable to preserve connection across hot reloads
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect()
      .then(async (client) => {
        try {
          // Send a ping to confirm a successful connection
          await client.db("admin").command({ ping: 1 });
          console.log("MongoDB connection successful - pinged deployment");
        } catch (error) {
          console.error("MongoDB ping failed:", error);
          throw error;
        }
        return client;
      })
      .catch(err => {
        console.error('MongoDB connection error:', err);
        throw err;
      });
  }

  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .then(async (client) => {
      try {
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("MongoDB connection successful - pinged deployment");
      } catch (error) {
        console.error("MongoDB ping failed:", error);
        throw error;
      }
      return client;
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
      throw err;
    });
}

// Helper function to get MongoDB database instance
export async function getDatabase(): Promise<Db> {
  try {
    const client = await clientPromise;
    return client.db(dbName);
  } catch (error) {
    console.error('Error getting database instance:', error);
    throw error;
  }
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise; 