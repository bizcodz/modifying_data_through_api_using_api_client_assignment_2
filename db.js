const mongoose = require('mongoose')
    mongoose.connect("mongodb+srv://keerthan1675:kvk1675B@cluster4.uko8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4")
    .then(()=>{
        console.log("Connected to DataBase")
    })
    .catch((err)=>{console.log(`Error:${err}`)})