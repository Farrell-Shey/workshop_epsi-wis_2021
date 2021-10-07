import axios from "axios";

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
/*
let test = document.getElementById('test');

test.addEventListener('click', function (e) {
    console.log('try')
    axios({
        method: 'post',
        url: '/api/datas/add',
        data: {
            note: 20,
            datas: {1: '0', 2: '45'}
        }
    })
        .then(function (response) {
            console.log('send')
        });
})

 */