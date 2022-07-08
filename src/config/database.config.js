const mongoose = require("mongoose");

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connection Established");
});

mongoose.connection.on("reconnected", () => {
    console.log("MongoDB Connection Reestablished");
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Connection Disconnected");
});

mongoose.connection.on("close", () => {
    console.log("MongoDB Connection Closed");
});

mongoose.connection.on("error", (error) => {
    console.log(`MongoDB ERROR: ${error}`);

    process.exit(1);
});

const databaseConfig = {
    MongoDB: () => {
        console.log("process.env.MONGO_URI");
        console.log(
            "mongodb://root:password@database:27017/db?authSource=admin"
        );
        try {
            mongoose.connect(
                "mongodb://root:password@localhost:27017/db?authSource=admin"
            );
            return mongoose;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

module.exports = databaseConfig;
