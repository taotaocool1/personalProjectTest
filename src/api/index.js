let Mock = require('mockjs');
Mock.mock('/data',{
    'list|8': [{
        'name': 'city',
        'number|1-100': 100
    }]
});