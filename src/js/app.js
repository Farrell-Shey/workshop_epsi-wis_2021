import axios from "axios";

require('bootstrap');

//require('./test');



axios({
    method: 'get',
    url: 'https://secret-lake-22228.herokuapp.com/api/datas',
    responseType: 'stream'
})
    .then(function (response) {
        console.log(response)
    });

