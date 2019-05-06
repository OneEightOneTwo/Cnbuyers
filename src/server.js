const express = require('express');
const app = express();
const routers = require('./api/routers');

// 跨域
let allowOrigin = [
    'http://localhost:8000'
];

app.use((req, res, next)=>{
    let origin = req.get('Origin');
    let index = allowOrigin.indexOf(origin);
	// console.log(index)
    if(index > -1) {
        res.setHeader('Access-Control-Allow-Origin', allowOrigin[index]);
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    }
	// console.log(req.method)
    // 跨域请求CORS中的预请求
    if(req.method == "OPTIONS"){
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});

app.use(express.static('./'));
app.use('/', routers);

app.listen(8080, () => {
    console.log('this server is running on port 8080')
})