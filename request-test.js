function Testrequest() {
    var request = require('request');
    var options = {
        url: 'https://api.github.com/users/kks',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'
        },
        rejectUnauthorized: false
    };
    request(options, function (error, response, body) {
        console.log(!null);
        console.log(!undefined);
        console.log(response);
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            //console.log(info);
            if (info != "undefined") {
                console.log("created_at:" + info.created_at);
                console.log("updated_at:" + info.updated_at);
            }
        }
        if (!error && response.statusCode == 404) {
            console.log('404');
        }
    });
    // function callback(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         var info = JSON.parse(body);
    //         //console.log(info);
    //         if (info != "undefined") {
    //             console.log("created_at:" + info.created_at);
    //             console.log("updated_at:" + info.updated_at);
    //         }
    //     }
    //     if (!error && response.statusCode == 404) {
    //         console.log('404');
    //     }
    // }
    //request(options, callback);
}
