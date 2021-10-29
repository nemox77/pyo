// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: express-example-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var express = require('express');
var count = 0;

module.exports = function() {
  var app = express();
  
  app.get('/', function(req, res) { 
    res.json({result:'your request nuber is logged and count is:' + count});
  });

  app.post('/', function(req, res) {
	 count++;
    res.json({counter:count});
  });

  return app;
};
