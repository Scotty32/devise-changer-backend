import mongoose from "mongoose";
import updateDataJob from "../jobs/APIJobs";

export default async function AppService() {
    mongoose.connect('mongodb+srv://scotdev:Narutokun2021@cluster0.djltuwm.mongodb.net/?retryWrites=true&w=majority')
    .then((res) => {
        updateDataJob();
    })
    .catch((err) => {
        throw new Error(`la base de donnee est indisponible ${err.message}`)
    });
}