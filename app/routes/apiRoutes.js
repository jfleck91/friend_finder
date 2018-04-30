// LOAD DATA
var freindsData = require("../data/friends");

// ROUTING
module.exports = function(app) {
 
// API GET Requests
app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

// API POST Requests
app.post("/api/friends", function(req, res)

//if else goes here