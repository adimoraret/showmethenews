'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hi there!');
};

exports.event = (event, callback) => {
  callback();
};
