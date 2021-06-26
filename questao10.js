function lampadas() {
    var onOff = "Ligado";
    setInterval(function() {
        onOff === "Ligado" ? onOff = "Desligado" : onOff = "Ligado"
        console.log(onOff);
    }, getRandomArbitrary(2000, 4000));
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

lampadas()