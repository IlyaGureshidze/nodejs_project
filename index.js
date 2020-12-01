const http = require('http');
const fs = require('fs');

function getPage(url, res) {
    fs.readFile(url, function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}
http.createServer(function(req, res) {
    let url = req.url;
    switch(url) {
        case '/':
            return getPage('index.html', res);
            break;
        case '/about':
            return getPage('about.html', res);
            break;
        case '/contact-me':
            return getPage('contact-me.html', res);
            break;
        default:
            return getPage('404.html', res);
            break;
    }
}).listen(8080, function() {
    console.log('server started at 8080');
});