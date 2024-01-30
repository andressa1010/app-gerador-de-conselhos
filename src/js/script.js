const adviceUpdateButton = document.getElementById("bola");
const adviceNumber = document.getElementById("advice");
const adviceDescription = document.getElementById("texto");


async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();

    adviceNumber.innerHTML = `ADVICE # "${adviceContent.slip.id}"`;
    adviceDescription.innerHTML = `"${adviceContent.slip.advice}"`;
}


