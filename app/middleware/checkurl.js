'use strict';

const assert = require('assert');

// 检查应用是否正常启动
module.exports = options => {
    return function* checkMiddleware(next) {
        const { request } = this,
            url = request.url,
            { route, reponse } = options;

        assert(route, 'should pass options.route');

        if (url === route) {
            this.body = reponse;
            return;
        }
        yield next;
    };
};
