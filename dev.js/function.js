function dateAndTime () {
    const dateInput= document.getElementById("currentDate");
    const time = new Date ()
    const input ={ weekdays: "long", year: "numeric", month: "long", day:"numeric"};
    dateInput.innerText = `${time.toLocaleDateString("input")}`; 

    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    const thisDay = new Date().getDay();
    document.getElementById("currentWeek").innerText = dayName[thisDay];
}
window.onload = dateAndTime;




document.getElementById("image-color").addEventListener("click", function(){
    document.getElementById("body").style.backgroundColor = getColor();
});
function getColor() {
    const hexColor = "0123456789ABCDEF";
    let color = "#";
    for ( let i=0; i<6; i++){
        color += hexColor[Math.floor(Math.random() * 16)];

    }
    return color;
}



