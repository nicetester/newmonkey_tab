/**
 * Created by kangtian on 16/9/12.
 */

function resp_json(res, d) {
    res.contentType('json');
    res.send(JSON.stringify(d));
    res.end();
}

var http_util = {
    'resp_json': resp_json
};

module.exports = http_util;