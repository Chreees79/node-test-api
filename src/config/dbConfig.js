  import mongoose from "mongoose";

export const setupDb = async (host) => {
    try {
        await mongoose.connect(host);
        console.log("Database successfully connected");
    } catch (e) {
        console.log("Cannot provide the mongo database");
        throw e;
    }
};
