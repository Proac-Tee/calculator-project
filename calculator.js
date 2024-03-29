

const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response) {
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);

  var result = num1 + num2;

  response.send("The result of the calculation is: " + result);
});

app.get("/bmicalculator", function(request, response) {
  response.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(request, response) {
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);

  var bmiResult = weight / (height * height);

  response.send("Your BMI is: " + bmiResult);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
