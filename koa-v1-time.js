/**
 * Created by kaola on 2017/3/2.
 */

'use strict';

function time(options) {
    return function*(next) {
        console.time(this.req.url);
        this.res.once('finish', function () {
            console.timeEnd(this.req.url);
        }.bind(this));
        yield next;
    }
}

module.exports.time = time;