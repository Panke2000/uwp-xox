let trenutniPotez = document.getElementById('potez').innerHTML;
let generalniPotez = document.getElementById('potez').innerHTML;
let pobeda = false;
let XPoeni = document.getElementById('x-poeni');
let OPoeni = document.getElementById('o-poeni');
let tabelaIgracX = document.getElementById('tabela-igrac-x');
let tabelaIgracO = document.getElementById('tabela-igrac-o');

var xoxNodes = document.querySelectorAll('.xox-celija');

document.addEventListener('click', (event) => {
    let clickedTarget = event.target.innerHTML;
    
    switch(clickedTarget) {

        case '1':

            console.log('1');
            if(pobeda) break;
            if(trenutniPotez === 'X'){
                xoxNodes[0].innerHTML = 'X';

                if(xoxNodes[1].innerHTML === 'X' && xoxNodes[2]. innerHTML === 'X'){
                    obojiPolja(0, 1, 2, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[3].innerHTML === 'X' && xoxNodes[6]. innerHTML === 'X'){
                    obojiPolja(0, 3, 6, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[4].innerHTML === 'X' && xoxNodes[8]. innerHTML === 'X'){
                    obojiPolja(0, 4, 8, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }

                sledeciPotez(trenutniPotez);

            }else {
                xoxNodes[0].innerHTML = 'O';

                if(xoxNodes[1].innerHTML === 'O' && xoxNodes[2]. innerHTML === 'O'){
                    obojiPolja(0, 1, 2, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[3].innerHTML === 'O' && xoxNodes[6]. innerHTML === 'O'){
                    obojiPolja(0, 3, 6, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[4].innerHTML === 'O' && xoxNodes[8]. innerHTML === 'O'){
                    obojiPolja(0, 4, 8, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }

                sledeciPotez(trenutniPotez);
            }
            break;

        case '2':

            console.log('2');
            if(pobeda) break;
            if(trenutniPotez === 'X'){
                xoxNodes[1].innerHTML = 'X';

                if(xoxNodes[0].innerHTML === 'X' && xoxNodes[2]. innerHTML === 'X'){
                    obojiPolja(0, 1, 2, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[4].innerHTML === 'X' && xoxNodes[7]. innerHTML === 'X'){
                    obojiPolja(1, 4, 7, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }

                sledeciPotez(trenutniPotez);

            }else {
                xoxNodes[1].innerHTML = 'O';

                if(xoxNodes[0].innerHTML === 'O' && xoxNodes[2]. innerHTML === 'O'){
                    obojiPolja(0, 1, 2, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[4].innerHTML === 'O' && xoxNodes[7]. innerHTML === 'O'){
                    obojiPolja(1, 4, 7, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }

                sledeciPotez(trenutniPotez);
            }
            break;

        case '3':

        console.log('3');
            if(pobeda) break;
            if(trenutniPotez === 'X'){
                xoxNodes[2].innerHTML = 'X';

                if(xoxNodes[0].innerHTML === 'X' && xoxNodes[1]. innerHTML === 'X'){
                    obojiPolja(0, 1, 2, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[4].innerHTML === 'X' && xoxNodes[6]. innerHTML === 'X'){
                    obojiPolja(2, 4, 6, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[5].innerHTML === 'X' && xoxNodes[8]. innerHTML === 'X'){
                    obojiPolja(2, 5, 8, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }

                sledeciPotez(trenutniPotez);

            }else {
                xoxNodes[2].innerHTML = 'O';

                if(xoxNodes[0].innerHTML === 'O' && xoxNodes[1]. innerHTML === 'O'){
                    obojiPolja(0, 1, 2, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[4].innerHTML === 'O' && xoxNodes[6]. innerHTML === 'O'){
                    obojiPolja(2, 4, 6, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[5].innerHTML === 'O' && xoxNodes[8]. innerHTML === 'O'){
                    obojiPolja(2, 5, 8, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }

                sledeciPotez(trenutniPotez);
            }
            break;

        case '4':
            
            console.log('4');
            if(pobeda) break;
            if(trenutniPotez === 'X'){
                xoxNodes[3].innerHTML = 'X';

                if(xoxNodes[0].innerHTML === 'X' && xoxNodes[6]. innerHTML === 'X'){
                    obojiPolja(0, 3, 6, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[4].innerHTML === 'X' && xoxNodes[5]. innerHTML === 'X'){
                    obojiPolja(3, 4, 5, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }

                sledeciPotez(trenutniPotez);

            }else {
                xoxNodes[3].innerHTML = 'O';

                if(xoxNodes[0].innerHTML === 'O' && xoxNodes[6]. innerHTML === 'O'){
                    obojiPolja(0, 3, 6, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[4].innerHTML === 'O' && xoxNodes[5]. innerHTML === 'O'){
                    obojiPolja(3, 4, 5, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }

                sledeciPotez(trenutniPotez);
            }
            break;

        case '5':

            console.log('5');
            if(pobeda) break;
            if(trenutniPotez === 'X'){
                xoxNodes[4].innerHTML = 'X';

                if(xoxNodes[1].innerHTML === 'X' && xoxNodes[7]. innerHTML === 'X'){
                    obojiPolja(1, 4, 7, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[3].innerHTML === 'X' && xoxNodes[5]. innerHTML === 'X'){
                    obojiPolja(3, 4, 5, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }

                sledeciPotez(trenutniPotez);

            }else {
                xoxNodes[4].innerHTML = 'O';

                if(xoxNodes[1].innerHTML === 'O' && xoxNodes[7]. innerHTML === 'O'){
                    obojiPolja(1, 4, 7, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[3].innerHTML === 'O' && xoxNodes[5]. innerHTML === 'O'){
                    obojiPolja(3, 4, 5, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }

                sledeciPotez(trenutniPotez);
            }
            break;

        case '6':

            console.log('6');
            if(pobeda) break;
            if(trenutniPotez === 'X'){
                xoxNodes[5].innerHTML = 'X';

                if(xoxNodes[2].innerHTML === 'X' && xoxNodes[8]. innerHTML === 'X'){
                    obojiPolja(2, 5, 8, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[3].innerHTML === 'X' && xoxNodes[4]. innerHTML === 'X'){
                    obojiPolja(3, 4, 5, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }

                sledeciPotez(trenutniPotez);

            }else {
                xoxNodes[5].innerHTML = 'O';

                if(xoxNodes[2].innerHTML === 'O' && xoxNodes[8]. innerHTML === 'O'){
                    obojiPolja(2, 5, 8, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[3].innerHTML === 'O' && xoxNodes[4]. innerHTML === 'O'){
                    obojiPolja(3, 4, 5, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }

                sledeciPotez(trenutniPotez);
            }
            break;

        case '7':

            console.log('7');
            if(pobeda) break;
            if(trenutniPotez === 'X'){
                xoxNodes[6].innerHTML = 'X';

                if(xoxNodes[0].innerHTML === 'X' && xoxNodes[3]. innerHTML === 'X'){
                    obojiPolja(0, 3, 6, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[4].innerHTML === 'X' && xoxNodes[2]. innerHTML === 'X'){
                    obojiPolja(2, 4, 6, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[7].innerHTML === 'X' && xoxNodes[8]. innerHTML === 'X'){
                    obojiPolja(6, 7, 8, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }

                sledeciPotez(trenutniPotez);

            }else {
                xoxNodes[6].innerHTML = 'O';

                if(xoxNodes[0].innerHTML === 'O' && xoxNodes[3]. innerHTML === 'O'){
                    obojiPolja(0, 3, 6, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[4].innerHTML === 'O' && xoxNodes[2]. innerHTML === 'O'){
                    obojiPolja(2, 4, 6, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[7].innerHTML === 'O' && xoxNodes[8]. innerHTML === 'O'){
                    obojiPolja(6, 7, 8, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }

                sledeciPotez(trenutniPotez);
            }
            break;

        case '8':

            console.log('8');
            if(pobeda) break;
            if(trenutniPotez === 'X'){
                xoxNodes[7].innerHTML = 'X';

                if(xoxNodes[1].innerHTML === 'X' && xoxNodes[4]. innerHTML === 'X'){
                    obojiPolja(1, 4, 7, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[6].innerHTML === 'X' && xoxNodes[8]. innerHTML === 'X'){
                    obojiPolja(6, 7, 8, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }

                sledeciPotez(trenutniPotez);

            }else {
                xoxNodes[7].innerHTML = 'O';

                if(xoxNodes[1].innerHTML === 'O' && xoxNodes[4]. innerHTML === 'O'){
                    obojiPolja(1, 4, 7, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[6].innerHTML === 'O' && xoxNodes[8]. innerHTML === 'O'){
                    obojiPolja(6, 7, 8, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }

                sledeciPotez(trenutniPotez);
            }
            break;

        case '9':

            console.log('9');
            if(pobeda) break;
            if(trenutniPotez === 'X'){
                xoxNodes[8].innerHTML = 'X';

                if(xoxNodes[0].innerHTML === 'X' && xoxNodes[4]. innerHTML === 'X'){
                    obojiPolja(0, 4, 8, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[2].innerHTML === 'X' && xoxNodes[5]. innerHTML === 'X'){
                    obojiPolja(2, 5, 8, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }else if(xoxNodes[6].innerHTML === 'X' && xoxNodes[7]. innerHTML === 'X'){
                    obojiPolja(6, 7, 8, 'X');
                    pobeda = true;
                    XPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac X');
                }

                sledeciPotez(trenutniPotez);

            }else {
                xoxNodes[8].innerHTML = 'O';

                if(xoxNodes[0].innerHTML === 'O' && xoxNodes[4]. innerHTML === 'O'){
                    obojiPolja(0, 4, 8, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[2].innerHTML === 'O' && xoxNodes[5]. innerHTML === 'O'){
                    obojiPolja(2, 5, 8, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }else if(xoxNodes[6].innerHTML === 'O' && xoxNodes[7]. innerHTML === 'O'){
                    obojiPolja(6, 7, 8, 'O');
                    pobeda = true;
                    OPoeni.innerHTML++;
                    otkrijRezultat();
                    alert('Pobedio je igrac O');
                }

                sledeciPotez(trenutniPotez);
            }
            break;

            case 'Resetuj igru':

                console.log('dugme za reset');

                if(generalniPotez === 'X') {
                    generalniPotez = 'O';
                    trenutniPotez = 'O';
                }else {
                    generalniPotez = 'X';
                    trenutniPotez = 'X';
                }

                pobeda = false;
                for(let i = 0; i < xoxNodes.length; ++i){
                    xoxNodes[i].innerHTML = i + 1;
                    xoxNodes[i].style.color = 'black';
                }

                tabelaIgracX.style.backgroundColor = 'white';
                tabelaIgracX.style.color = 'black';
                tabelaIgracO.style.backgroundColor = 'white';
                tabelaIgracO.style.color = 'black';

                break;
    }
});

function obojiPolja(x, y ,z, igrac) {
    xoxNodes[x].style.color = 'orangered';
    xoxNodes[y].style.color = 'orangered';
    xoxNodes[z].style.color = 'orangered';
    if(igrac === 'X'){
        tabelaIgracX.style.backgroundColor = 'orangered';
        tabelaIgracX.style.color = 'white';
    }else {
        tabelaIgracO.style.backgroundColor = 'orangered';
        tabelaIgracO.style.color = 'white';
    }
}

function sledeciPotez(potez){
    potez === 'X' ? trenutniPotez = 'O' : trenutniPotez = 'X';
    let potezSpan = document.getElementById('potez');
    potezSpan.innerHTML = trenutniPotez;
}

function otkrijRezultat() {
    let skriveniRezultat = document.getElementById('rezultat-red');
    skriveniRezultat.classList.remove('sakrij-rezultat');
}