//0
function Testhttp() {
    const https = require('https');
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';
        // A chunk of data has been recieved. 
        resp.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result. 
        resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
//1 self signed certificate in certificate chain
function Test12306() {
    var https = require('https');
    var options = {
        hostname: 'kyfw.12306.cn',
        path: '/otn/leftTicket/init',
        rejectUnauthorized: false  // ignore security alert
    };

    var req = https.get(options, function (res) {
        res.pipe(process.stdout);
    });

    req.on('error', function (err) {
        console.error('error:' + err.code);
    });
}
