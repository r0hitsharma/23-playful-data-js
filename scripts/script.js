let burnSound = new Audio('/assets/sound/lighting-a-fire.mp3');
let safeSound = new Audio('/assets/sound/twinkle.mp3');
let bgBurn = new Audio('/assets/sound/burningAmbience.mp3');
let bgForest = new Audio('/assets/sound/forestAmbience.mp3');

// start playing sounds, on loop
bgForest.play()
bgForest.loop = true
bgForest.volume = 0
bgBurn.play()
bgBurn.loop = true
bgBurn.volume = 0

// vairables for counting number of trees 
function countTotalTrees() {
    return /* a number */ document.getElementsByTagName("button").length;
}
function percentageOfTrees(c) {
    return parseFloat((document.getElementsByClassName(c).length) / countTotalTrees())
}

function stateChanger(b) {

    // toggle classes when a tree is affected
    console.log("toggling 'normal' class.")
    b.classList.toggle("normal");
    console.log("toggling 'burning' class.")
    b.classList.toggle("burning")  
    console.log(b.className)

    // depending on the class in a button, its innerHTML changes
    switch(b.className)
    {
        case "normal":
            b.innerText = "normal tree"
            break;
        case "burning":
            b.innerText = "burning tree"
            break;
    }

    setVolumes()

}

/* set the columes of the audio */
function setVolume() { 
    bgBurn.volume = percentageOfTrees("burning")
    bgForest.volume = percentageOfTrees("normal")
}