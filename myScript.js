var turn = 1;

function cellClick(e) {
    let celula = document.getElementById(e);
    if (celula.innerHTML == "") {
        if (turn == 1) {
            celula.innerHTML = "X"
            turn = 0;
        } else {
            celula.innerHTML = "O"
            turn = 1;
        }
    }
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
    }
}

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function isTheGameFinished() {
    for (let i = 0; i < 9; i++) {
        if (document.getElementById(i).innerHTML == "") {
            return false;
        }

    }
    return true;
}
function getWinner() {
    for (let j = 0; j < winCondition.length; j++) {
        let conditie = winCondition[j];
        //Se extrag din "conditie" combinatiile de pozitii
        let poz1 = conditie[0];
        let poz2 = conditie[1];
        let poz3 = conditie[2];
        //Se extrag elementele(tag html) din DOM de la poz1,2,3 
        let c1 = document.getElementById(poz1);
        let c2 = document.getElementById(poz2);
        let c3 = document.getElementById(poz3);

        let v1 = c1.innerHTML;
        let v2 = c2.innerHTML;
        let v3 = c3.innerHTML;
        if (v1 == v2 && v2 == v3 && v3 != "") {
            return v1;
        }
    }
    return ""
}
//tema: I modificat functia getWinner() astfel incat daca nu este un castigator
//1) sa returneze string gol daca nu s-a terminat jocul 
//2) sa returneze tie daca s-a terminat jocul
// II la fiecare click, daca s-a pus un X sau un 0,
//1) verificati daca exista castigator
//2) afisati un mesaj corespunzator
//III adaugati comentarii relevante in cod ;-;