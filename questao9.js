function promiseTest(request) {

    return new Promise((resolve, reject) => {
        var demora = getRandomArbitrary(500, 2000);
        if (typeof request == "string") setTimeout(function() { resolve(request.toUpperCase()) }, demora)
        else setTimeout(function() { reject("the request value is not supported.") }, demora)
    })

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

promiseTest("aasdasda asdasd asd asd asda").then(e => {
    console.log(e)
}).catch(e => {
    console.error(e);
})

promiseTest(2).then(e => {
    console.log(e)
}).catch(e => {
    console.error(e);
})