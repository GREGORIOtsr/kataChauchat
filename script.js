function chauchat(cargar) {
    let cargador = ['pium!'];
    for (n = 0; n <= cargar; n++) {
        cargador.push('pium')
    }
    for (i = 1; i <= cargador.length; i++) {
        let pillada = parseInt(Math.random()*2);
        if (pillada < 2 && i % 4 === 0) {
            cargador.splice(i, 0, " ");
            console.log(cargador[i]);
        } else if (pillada < 2) {
            console.log(cargador[i]);
        } else {
            return "Illo, me he quedao pillá!";
        }
    }
}
