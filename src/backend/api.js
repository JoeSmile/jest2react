const http = require('http');

export default function request(url) {
    return new Promise((resolve, reject) => {
        resolve('real test')
    })
}