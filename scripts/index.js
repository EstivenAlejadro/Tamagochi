let cont = 100;
let contador = 0;
let leve = 0;
let life = document.getElementById('life');

let id = setInterval(function () {
    life.innerHTML = 'Life: '+ cont + '%';
    level.innerHTML = 'Level: '+ leve;
    cont--;

    if(cont < 80){
        document.getElementById('pet').src = "./assets/picachu_hambre.gif";
        statu.innerHTML = 'Mood:hungry';
    }
    if(cont < 50){
        document.getElementById('pet').src = "./assets/picachu_cansado.webp";
        statu.innerHTML = 'Mood:tired';
    }
    if (cont < 0) {
        document.getElementById('pet').src = "./assets/picachu_muerto.webp";
        statu.innerHTML = 'Mood:dead';
        clearInterval(id);
        leve = 0;
    }

    if (contador >= 4) {
        contador = 0;
        leve += 1;
    }
    if(leve === 5){
        document.getElementById('pet').src = "./assets/dark_picachu.gif";
    }
}, 200);




function play(){
    cont = 100;
    document.getElementById('pet').src = "./assets/pica_dancing.gif";
    statu.innerHTML = 'Mood:dancing';
    if (cont >= 100) {
        cont = 100;
    }
    contador++;
    document.getElementById('life').innerHTML = 'Life: ' + cont + '%';
}

function sleep(){
    cont = 100;
    document.getElementById('pet').src = "./assets/pokemon_durmiendo.gif";
    statu.innerHTML = 'Mood:sleepy';
    if (cont >= 100) {
        cont = 100;
    }
    contador++;
    document.getElementById('life').innerHTML = 'Life: ' + cont + '%';
}

function eat(){
    cont = 100;
    document.getElementById('pet').src = "./assets/pica_comiendo.gif";
    statu.innerHTML = 'Mood:eating';
    if (cont >= 100) {
        cont = 100;
    }
    contador++;
    document.getElementById('life').innerHTML = 'Life: ' + cont + '%';
}


