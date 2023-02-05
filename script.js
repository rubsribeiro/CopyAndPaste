function copy() {
    const textCopy = document.getElementById("type");
    textCopy.select();
    document.execCommand("copy");
    alert("Copied!");
}

const btnPaste = document.querySelector(".btnPaste");
const area = document.querySelector(".paste");

btnPaste.addEventListener("click", async (e) => {
    const answer = await navigator.clipboard.readText();
    area.value = answer;
});





