var prompt = require('prompt');
var inputs = [];

function getInput() {
  prompt.get('input', function(err, res) {
    if (err) {
      done();
    } else {
      inputs.push(res);
      getInput();
    }
  })
}

function done() {
  console.log(inputs);
}

prompt.start();
getInput();