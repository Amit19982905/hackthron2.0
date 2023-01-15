let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msec = document.getElementById("msec");
let timer;
let mavl;
let savl;
let msavl;
function reset() {
    min.innerHTML = "00";
    sec.innerHTML = "00";
    msec.innerHTML = "00";
    mavl = 0;
    savl = 0;
    msavl = 0;
}


function startwatch() {
    document.getElementById("btnstart").classList.add("dead");
    mavl = min.outerText;
    savl = sec.outerText;
    msavl = msec.outerText;


    timer = setInterval(() => {
        // for milisecond
        msavl++;
        if (msavl < 10) {
            msec.innerHTML = "0" + msavl;
        }
        else if (msavl > 99) {
            msavl = 0;
            msec.innerHTML = "0" + msavl;
            //  for seconds
            savl++;
            if (savl < 10) {
                sec.innerHTML = "0" + savl;
            }
            else if (savl > 59) {
                savl = 0;
                sec.innerHTML = "0" + savl;
                //  for min
                mavl++;
                if (mavl < 10) {
                    min.innerHTML = "0" + mavl;
                }
                else if (mavl > 59) {
                    mavl = 0;
                    min.innerHTML = "0" + mavl;

                }
                else {
                    min.innerHTML = mavl;
                }
            }
            else {
                sec.innerHTML = savl;
            }
        }
        else {
            msec.innerHTML = msavl;
        }



    }, 10);

}

function stopwatch() {
    clearInterval(timer);
    document.getElementById("btnstart").classList.remove("dead");

}
