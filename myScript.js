var turn = 1;

function cellClick(e) {
    let celula = document.getElementById(e);
    if (turn == 1) {
        document.getElementById("playerturn").innerHTML = "O's Turn"
    } else {
        document.getElementById("playerturn").innerHTML = "X's Turn"
    }
    if (celula.innerHTML == "" && blocat == 0) {
        if (turn == 1) {
            celula.innerHTML = "X"
            turn = 0;
            isTheGameFinished();
            getWinner();
        } else {
            celula.innerHTML = "O"
            turn = 1;
            isTheGameFinished();
            getWinner();
        }
    }


}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
        blocat = 0;
        document.getElementById("winner").innerHTML = "-";
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
let end;
function isTheGameFinished() {
    for (let i = 0; i < 9; i++) {
        if (document.getElementById(i).innerHTML == "") {
            end = false;
            return end;
        }

    }
    end = true;
    return end;
}
let blocat = 0;
let player1 = 0;
let player2 = 0;
let verificare = 0;
function getWinner() {
    for (let j = 0; j < winCondition.length; j++) {
        let conditie = winCondition[j];
        //Se extrag din conditie combinatiile de pozitii
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
            //return v1;
            document.getElementById("winner").innerHTML = "The winner is..." + v1;
            verificare = 1;
            blocat = 1;
            if (v1 == "X") {
                player1 = player1 + 1;
                document.getElementById("s1").innerHTML = player1;
            } else if (v1 == "O") {
                player2 = player2 + 1;
                document.getElementById("s2").innerHTML = player2;
            }

        }

    }
    if (end == false) {
        verificare = 0;
        return "";
    } else if (verificare == 0) {
        //return "Tie";
        document.getElementById("winner").innerHTML = "There is no winner....Tie";
        blocat = 1;
    }

}
let culoareCurenta = 0;
function schimbaCuloare() {
    let listaElemente1 = document.getElementsByClassName('glow');
    for (let t = 0; t < listaElemente1.length; t++) {
        let elem = listaElemente1[t];
        elem.style = "box-shadow: inset 0 0 0.5rem 0.3rem hsl(" + culoareCurenta + ", 88%, 44%);"
    }

    if (culoareCurenta >= 360) {
        culoareCurenta = 0;
    } else {
        culoareCurenta = culoareCurenta + 10;
    }
}
setInterval(schimbaCuloare, 100);
