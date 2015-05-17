var express = require('express'),
  restful = require('node-restful'),
  mongoose = restful.mongoose;

var bodyParser = require('body-parser');

var app = express();

// app.configure(function(){
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose.connect('mongodb://localhost/restful');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var productSchema = new Schema({
    id: ObjectId,
    name: String,
    sku: String,
    price: Number
});

var products = restful.model('products', productSchema);

products.methods(['get', 'put', 'post', 'delete']);

products.register(app, '/api/products');

app.listen(3000);

console.log('Updated Server is running at port 3000');
