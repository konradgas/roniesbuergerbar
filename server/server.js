const express = require("express");
const Order = require("./models/Order");
const cors = require("cors");
const bodyParser = require("body-parser");
var fs = require('fs');

const app = express();
const port = 3001;

let allowedOrigins = "http://localhost:3000";

app.use(cors({ origin: allowedOrigins }));
app.use(bodyParser.json());
app.use(express.static('../public'));

// check if order.json file exists if not create one
fs.readFile('../public/order.json', 'utf8', (err) => {
  if (err && err.errno === -4058) {
      console.log('File order.json not found creating...');
      fs.writeFile('../public/order.json', "[]", 'utf8', () => {console.log('initial order json file created')})
    }
});

fs.readFile('../public/users.json', 'utf8', (err) => {
  if (err && err.errno === -4058) {
    console.log('File users.json not found creating...');
    fs.writeFile('../public/users.json', "[]", 'utf8', () => {console.log('initial users json file created')})
  }
});

app.get("/api/menu", (req, res, next) => {
  fs.readFile('../public/menu.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post("/api/order/send", (req, res) => {
  const { body } = req;
  // Read nad update json file with new order
  fs.readFile('../public/order.json', 'utf8', (err, data) =>{
    if (err){
      console.log(err);
    } else {
      const order = JSON.parse(data);
      order.push(body);
      const json = JSON.stringify(order);
      fs.writeFile('../public/order.json', json, 'utf8', () => {
        console.log("file updated succesfully")
      });
    }});
  // TO DO fix and connect to mongoDB
  // if (!username) {
  //   res.end({
  //     success: false,
  //     message: "username is incorrect",
  //   });
  // }
  //
  // if (!email) {
  //   res.end({
  //     success: false,
  //     message: "email cannot be empty",
  //   });
  // }
  //
  // if (!items) {
  //   res.end({
  //     success: false,
  //     message: "Order item data is incorrect.",
  //   });
  // }
  //
  // const newOrder = new Order();
  //
  // newOrder.username = username;
  // newOrder.email = email.toLowerCase();
  // newOrder.items = items;
  //
  // newOrder.save((err, newOrder) => {
  //   if (err) {
  //     res.end({
  //       success: false,
  //       message: "Error: server failed to save new document",
  //     });
  //     res.end({ success: true, message: "Order had been successful" });
  //   }
  // });
});

app.post("/api/login/singin", (req, res) => {
  const {body} = req;
  // Read nad update json file with new order
  fs.readFile('../public/users.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const order = JSON.parse(data);
      order.push(body);
      const json = JSON.stringify(order);
      fs.writeFile('../public/users.json', json, 'utf8', () => {
        console.log("file updated succesfully")
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server connected successfully at http://localhost:${port}`);
});
