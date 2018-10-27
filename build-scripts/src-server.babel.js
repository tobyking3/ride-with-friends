"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _open = _interopRequireDefault(require("open"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = 8080;
app.get('/', function (req, res) {
  return res.sendFile(_path.default.join(__dirname, '../src/index.html'));
}); // Start Express server

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server running on port ${port}');
    (0, _open.default)('http://localhost:' + port);
  }
});
