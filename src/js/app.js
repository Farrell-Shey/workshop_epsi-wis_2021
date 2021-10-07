import axios from "axios";

require('bootstrap');

require('./mapbox');

//require('./test');

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = 'http://secret-lake-22228.herokuapp.com';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios({
    method: 'get',
    url: '/api/datas',
    responseType: 'application/json'
})
    .then(function (response) {
        console.log(response)
    });

axios({
    method: 'get',
    url: '/api/datas/read/1',
    responseType: 'application/json'
})
    .then(function (response) {
        console.log(response)
    });
