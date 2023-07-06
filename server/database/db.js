import mongoose from "mongoose";


const Connection = async() => {
    const URL = < URI > ;

    // mongodb://prateek:prateek@ac-zkdwrfm-shard-00-00.gyotwft.mongodb.net:27017,ac-zkdwrfm-shard-00-01.gyotwft.mongodb.net:27017,ac-zkdwrfm-shard-00-02.gyotwft.mongodb.net:27017/?ssl=true&replicaSet=atlas-9itawf-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected SuccessFully");
    } catch (error) {
        console.log("there is error while connecting database", error);
    }
}

export default Connection;