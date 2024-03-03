// window.addEventListener("keydown",(e)=>{
//     document.getElementById("result").innerHTML=`the key pressed is <span> ${e.key} </span><span>Key Code :${e.keyCode}</span>`;
// });
// Function to play a sound
function playSound() {
    const audio = new Audio('music.wav');
    audio.play();
}


function updateResultAndHistory(key, keyCode) {
    const resultElement = document.getElementById("result");
    
    
    resultElement.innerHTML = `the key pressed is <span>${key}</span><span>Key Code: ${keyCode}</span>`;
    const keyHistoryElement = document.createElement("div");
    keyHistoryElement.textContent = `Key: ${key}, Key Code: ${keyCode}`;
    document.getElementById("keyHistoryContainer").appendChild(keyHistoryElement);
}

window.addEventListener("keydown", (e) => {
    playSound();
    const key = e.key;
    const keyCode = e.keyCode;
    updateResultAndHistory(key, keyCode);
});
