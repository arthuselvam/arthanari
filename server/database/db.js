import mongoose from 'mongoose';


const Connection = () => {
    const DB_URI= `mongodb+srv://arthanari:<arthanari2>@ac-rhbo4av-shard-00-00.bm2x2fx.mongodb.net:27017,ac-rhbo4av-shard-00-01.bm2x2fx.mongodb.net:27017,ac-rhbo4av-shard-00-02.bm2x2fx.mongodb.net:27017/?ssl=true&replicaSet=atlas-rtx8wi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmail`;
    try{
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        console.log('Database connected successgully');
    } catch (error) {
        console.log('Error while connecting with the database' , error.message);
    }
}

export default Connection;


