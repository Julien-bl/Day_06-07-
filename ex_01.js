function reduceOpacity () {
    const element = document.getElementById("square");
    element.style.opacity = "0.5";
}

function resetOpacity () {
    const element = document.getElementById("square");
    element.style.opacity = "1";
}

const element = document.getElementById("square");
element.addEventListener("mouseover", reduceOpacity ())
element.addEventListener("mouseout", resetOpacity ())
