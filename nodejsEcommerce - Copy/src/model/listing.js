const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:String,
    image:{
        type: String,
        default: "https://envato-shoebox-0.imgix.net/5a19/7524-e33d-49f7-91c8-bfc811c1d1d4/senior-agro-608.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=ee83a72111145ebe4b0facc091c6c036",
        set: (v) => v === "" ? "https://envato-shoebox-0.imgix.net/5a19/7524-e33d-49f7-91c8-bfc811c1d1d4/senior-agro-608.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=ee83a72111145ebe4b0facc091c6c036" : v,
    },
    price:Number,
    location:String,
    country:String,
});
const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;