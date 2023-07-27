//your JS code here. If required.
function displayChange() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const h1 = document.getElementById("heightAndWidth");
    h1.innerText = `Width: ${width} and Height: ${height}`;
}

displayChange();

window.addEventListener("resize", displayChange);

