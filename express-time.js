/**
 * Created by kaola on 2017/3/2.
 */

'use strict';

function time(options) {
    return function (req, res, next) {
        console.time(req.url);
        res.once('finish', function () {
            console.timeEnd(req.url);
        });
        next();
    }
}

module.exports.time = time;