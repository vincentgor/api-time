/**
 * Created by kaola on 2017/3/2.
 */

'use strict';

function time(options) {
    return function (ctx, next) {
        console.time(this.req.url);
        ctx.res.once('finish', function () {
            console.timeEnd(this.req.url);
        }.bind(this));
        await next();
    }
}

module.exports.time = time;