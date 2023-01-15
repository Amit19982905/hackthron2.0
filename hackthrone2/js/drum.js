
let btn = document.querySelectorAll(".drum");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let val = this.innerHTML;
        btnAudio(val)
        btnClick(val);
    });
}

document.addEventListener("keypress", function (e) {
    btnAudio(e.key)
    btnClick(e.key)
});

function btnClick(val) {
    let btnPress = document.getElementById(val);
    // console.log(btnPress);
    btnPress.classList.add("pressed");
    setTimeout(function () {
        btnPress.classList.remove("pressed");
    }, 100)

}

function btnAudio(val) {
    // console.log(val);
    if (val == "W" || val == "w") {
        let sound = new Audio("/audio/tom-1.mp3");
        sound.play();
    }
    else if (val == "A" || val == "a") {
        let sound = new Audio("/audio/tom-2.mp3");
        sound.play();
    }
    else if (val == "K" || val == "k") {
        let sound = new Audio("/audio/crash.mp3");
        sound.play();
    }
    else if (val == "S" || val == "s") {
        let sound = new Audio("/audio/tom-3.mp3");
        sound.play();
    }
    else if (val == "D" || val == "d") {
        let sound = new Audio("/audio/tom-4.mp3");
        sound.play();
    }
    else if (val == "J" || val == "j") {
        let sound = new Audio("/audio/snare.mp3");
        sound.play();
    }
    else if (val == "L" || val == "l") {
        let sound = new Audio("/audio/kick-bass.mp3");
        sound.play();
    }

}
