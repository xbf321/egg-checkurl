# egg-checkurl

在项目发布成功后，发布系统请求特定的 URL ，来检测应用是否启动成功。

## Install

```bash
$ npm i egg-checkurl --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.checkurl = {
  enable: true,
  package: 'egg-checkurl',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.checkurl = {
    // 路由匹配，默认 '/check_url'
    route: '/check_url',
    // 响应内容，默认响应 ok
    reponse: 'ok',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

请求 「/check_url」，输出 -> ok。

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
