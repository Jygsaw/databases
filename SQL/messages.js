var utils = require('./server-utils');
var db = require('./db');

var idCounter = 1;

exports.getMessages = getMessages = function(req, res){
  console.log("===== retrieving messages =====");
  db.selectAllMsgs(function(data){
    utils.sendResponse(res, {results: data});
  });
};

exports.postMessage = postMessage = function(req, res){

  utils.collectData(req, function(err, data){
    var message = data;

    message.objectId = idCounter;
    idCounter += 1;
    messages.unshift(message);
    utils.sendResponse(res, {message : message}, 201);
  });
};

// if we were dealing with more than one data type (users, rooms, etc.),
// the code below might live in 'server-responses.js' or some more generic module

exports.send404 = send404 = function(req, res){
  utils.sendResponse(res, 'Not Found', 404);
};

var sendOptionsResponse = function(req, res){
  utils.sendResponse(res, null);
};

exports.sendOptionsResponse = sendOptionsResponse;
