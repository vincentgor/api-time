/**
 * Created by kaola on 2017/3/2.
 */

'use strict';

function time(options) {
    return async function (ctx, next) {
        console.time(ctx.req.url);
        ctx.res.once('finish', function () {
            console.timeEnd(ctx.req.url);
        });
        await next();
    }
}

module.exports.time = time;