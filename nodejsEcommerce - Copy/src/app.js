const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8000;
const Listing = require("./model/listing");
const path = require("path");
const ejsmate = require("ejs-mate");
require("./db/connect");
const methodoverride = require("method-override");
app.set("views",path.join(__dirname,"../views/listings"));
app.set("view engine","ejs");
app.engine('ejs', ejsmate);
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"../public")));

app.get("/",(req,res)=>{
    res.send("hello world");
})

// index router
app.get("/testlisting", async (req,res)=>{
 const alllisting = await Listing.find({});
    res.render("index",{alllisting});
  })
  // new router
app.get("/testlisting/new",(req,res)=>{
    res.render("new");
})
// create router
app.post("/testlisting",async(req,res)=>{
    const newlisting = new Listing (req.body.listing);
        await newlisting.save(); 
     res.redirect(`/testlisting`);
})
// show router
app.get("/testlisting/:id",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("show",{listing});
})
//edit router
app.get("/testlisting/:id/edit", async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
     res.render("edit",{listing});
})
// update router
app.put("/testlisting/:id", async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing}); 
     res.redirect(`/testlisting/${id}`);
})
// delete router
app.delete("/testlisting/:id", async(req,res)=>{
    let {id} = req.params;
 const deleteListing = await Listing.findByIdAndDelete(id);
      console.log(deleteListing);
      res.redirect(`/testlisting`);
})
app.listen(port,(err)=>{
    console.log("connected");
});