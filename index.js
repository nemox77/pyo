// Node module: express-example-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

var express = require('express');
var fs = require('fs');
var count = 0;

module.exports = function() {
    var app = express();

    app.get('/', function(req, res) {
        fs.readFile('/data/counter.txt', 'utf8', function(err, data) {
            if (err) throw err;
            console.log(data);
            res.json({
                counter: data
            });
        });


    });

    app.post('/', function(req, res) {
        count++;
        console.log(count)
        fs.writeFile('/data/counter.txt', count.toString(), function(err) {
          res.json({
              result: 'your request saved'
          });
            if (err) return console.log(err);
        });
    });

    return app;
};
