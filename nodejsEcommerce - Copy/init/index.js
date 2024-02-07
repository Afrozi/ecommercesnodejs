const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../src/model/listing");
require("../src/db/connect");

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log('data was insert');
};

initDB();



// let samplelist = new Listing(
//     {
//         title: "Cozy Beachfront Cottage",
//         description:
//           "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//         price: 1500,
//         location: "Malibu",
//         country: "United States",
//  });
//  await samplelist.save();