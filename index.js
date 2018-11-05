var http = require('http')

var server = http.createServer(function(req, res){
    res.writeHead(200, {'COntent-Type': 'text/plain; charset=utf-8'})

    var fs = require('fs')
    
    switch(req.url){
        case 'index':
            res.end("INDEX") 
        break;
        case '/index':
            res.end("/INDEX") 
        break;

        default: 
            res.end("Дефолтная страница") 
        break;
    }
})

server.listen(5000, '127.0.0.1')

