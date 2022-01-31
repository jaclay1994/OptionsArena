const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
// async function main() {
    
//     const uri = "mongodb+srv://optionsarena:1234@oadb.1n8kj.mongodb.net/OADB?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }


// main().catch(console.error);

// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();
    
//     console.log("Databases");
//     databasesList.databases.forEach(db => {
//         console.log(`${db.name}`);
//     })
// };

const uri = "mongodb+srv://optionsarena:1234@oadb.1n8kj.mongodb.net/OADB?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology:  true
};

mongoose.connect(uri, options).then(() => {
    console.log("Database successfully connected!");
},
err => {
    console.log(`Error: ${err}`);
});