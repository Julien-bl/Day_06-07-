document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('circle');
    const button90 = document.getElementById('rotate-add-90');
    const button45 = document.getElementById('rotate-add-45');
    const buttonreset = document.getElementById('rotate-reset');
    const buttonsub45 = document.getElementById('rotate-sub-45');
    const buttonsub90 = document.getElementById('rotate-sub-90');
    let rotationAngle = 0;

    button90.addEventListener('click', function() {
        rotationAngle += 90; 
        image.style.transform = `rotate(${rotationAngle}deg)`;})
        
    button45.addEventListener('click', function() {
        rotationAngle += 45; 
        image.style.transform = `rotate(${rotationAngle}deg)`;})

    buttonreset.addEventListener('click', function() {
        rotationAngle === 0; 
        image.style.transform = `rotate(${0}deg)`;})

    buttonsub45.addEventListener('click', function() {
        rotationAngle -= 45; 
        image.style.transform = `rotate(${rotationAngle}deg)`;})

    buttonsub90.addEventListener('click', function() {
        rotationAngle -= 90; 
        image.style.transform = `rotate(${rotationAngle}deg)`;})

});
