const express = require("express");
const path = require("path");
const routes = require("./routes/routes.js");
const methodOverride = require("method-override");


const app = express();
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, './views')));
app.use(express.urlencoded ({extended: true}));
app.set('views', './views');
app.use('/', routes);


const port = 4000;
app.listen(port, ()=>{
    console.log(`Server started`);
})