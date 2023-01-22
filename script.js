index = 0;
function next() {
    if (words == undefined) return;

    document.getElementById("word").innerHTML = words[index++];

    if (index >= words.length) {
        alert("1周しました。");
        index = 0;
    }
}

document.getElementById("file").addEventListener("change", (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0]);
    fileReader.onload = () => {
        words = fileReader.result.split("\n");
        words = shuffle(words);
    }
})

const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}