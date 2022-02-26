const cT = document.querySelector(".texte")
let allText0 = "wake up to reality nothing ever goes as planned in this accursed world", allText2 = "the longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility", allText3 = "listen, every where you look in this world, wherever there is a light, there will always be a shadows to be found as well", allText4 = "those who break the rules and laws are regarded as scum, but those who abandon even one of their friends are worse than scum";
let tab = [allText0, allText2, allText3, allText4]
let compt = 0, stat = true, compt2 = 0, mistakes = 0, timeCount = 0;
let allText = "";
start();

function start() {
    allText = tab[Math.round(Math.random() * 3)]
    cT.innerHTML = " ";
    compt = 0; stat = true; compt2 = 0; mistakes = 0; timeCount = 0;
    setInterval(() => {
        if (compt2 < allText.length)
            timeCount++;
    }, 1000);
    if (stat) {
        for (a of allText) {
            cT.innerHTML += `<span class="sp${compt}">${a}</span>`;
            if (a == " ")
                document.querySelector(`.sp${compt}`).style.margin = "2px";
            compt++;
        }
        window.addEventListener("keydown", (event) => {
            if (compt2 == 0)
                timeCount = 0;
            let patt = /[a-z, ]/g;
            if (event.key == "Backspace") {
                if (compt2 == 0)
                    compt2 = 0;
                else {
                    compt2--;
                    document.querySelector(`.sp${compt2}`).style.color = "white";
                }
            }
            else if (event.key.length == 1 && patt.test(event.key)) {
                if (event.key == allText[compt2]) {
                    document.querySelector(`.sp${compt2}`).style.color = "greenyellow";
                    compt2++;
                } else {
                    document.querySelector(`.sp${compt2}`).style.color = "red";
                    compt2++;
                    mistakes++;
                }
            }
            let numberOfWord = allText.split(" ").length;
            if (compt2 == allText.length) {
                stat = false;
                allText = tab[Math.round(Math.random() * 3)]
                cT.innerHTML = `<p>╬ Mistakes : ${mistakes} ╬</p><p>╬ Time : ${timeCount} ╬</p><p>╬ Words : ${numberOfWord} ╬</p><p>╬ ${Math.round(numberOfWord * 60 / timeCount)}WPM ╬</p><input type="button" onclick="restart()" value="╬New Game╬">`;
                numberOfWord = 0;
            }
        })
    }
}


function restart() {
    cT.innerHTML = " ";
    compt = 0; stat = true; compt2 = 0; mistakes = 0; timeCount = 0;
    for (a of allText) {
        cT.innerHTML += `<span class="sp${compt}">${a}</span>`;
        if (a == " ")
            document.querySelector(`.sp${compt}`).style.margin = "2px";
        compt++;
    }
}

function id(x) {
    return document.querySelector(x);
}