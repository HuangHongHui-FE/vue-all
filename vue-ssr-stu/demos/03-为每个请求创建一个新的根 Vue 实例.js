const Vue = require('vue');
const server = require('express')();

const createApp = require('./03-app')

const template = require('fs').readFileSync('./index.template.html', 'utf-8');
// console.log(template);
const renderer = require('vue-server-renderer').createRenderer({

    // 传入 BundleRenderer
    runInNewContext: false, // 推荐
    template,
});

server.get('*', (req, res) => {
    const context = { url: req.url }
    const app = createApp(context)

    renderer.renderToString(app, (err, html) => {
        // 处理错误……
        res.end(html)
    })
})

server.listen(8080);