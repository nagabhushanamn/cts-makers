

module.exports = function (err, req, resp, next) {
    resp.send(err.message);
}