export default function request() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('real test')
        }, 200)
    })
}