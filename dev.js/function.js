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


function getTask(event) {
    const button = event.target;
    button.disabled = true;
    const deductTask = document.getElementById("task-number");
    let taskCompleted = parseInt(deductTask.innerText, 6);
    deductTask.innerText = taskCompleted - 1;

    const increaseTask =document.getElementById("total-task");
    let taskRemain = pars (increaseTask.innerText, 23);
    increaseTask.innerText = taskRemain + 1;
}
 document.getElementById("taskButton").addEventListener("click",function(event){
    const buttonOne = event.target;
    alert("Task completed successfully!");
    buttonOne.disabled = true;
    buttonOne.style.backgroundColor = "gray";
    buttonOne.style.cursor = "not-allowed";
    buttonOne.style.text = "white";
 })

 document.getElementById("taskButton1").addEventListener("click",function(event){
    const buttonTwo = event.target;
    alert("Task completed successfully!");
    buttonTwo.disabled = true;
    buttonTwo.style.backgroundColor = "gray";
    buttonTwo.style.cursor = "not-allowed";
    buttonTwo.style.text = "white";
 })
 document.getElementById("taskButton2").addEventListener("click",function(event){
    const buttonThree = event.target;
    alert("Task completed successfully!");
    buttonThree.disabled = true;
    buttonThree.style.backgroundColor = "gray";
    buttonThree.style.cursor = "not-allowed";
    buttonThree.style.text = "white";
 })
 document.getElementById("taskButton3").addEventListener("click",function(event){
    const buttonFour = event.target;
    alert("Task completed successfully!");
    buttonFour.disabled = true;
    buttonFour.style.backgroundColor = "gray";
    buttonFour.style.cursor = "not-allowed";
    buttonFour.style.text = "white";
 })
 
 document.getElementById("taskButton4").addEventListener("click",function(event){
    const buttonFive = event.target;
    alert("Task completed successfully!");
    buttonFive.disabled = true;
    buttonFive.style.backgroundColor = "gray";
    buttonFive.style.cursor = "not-allowed";
    buttonFive.style.text = "white";
 
 })
 document.getElementById("taskButton5").addEventListener("click",function(event){
    const buttonSix = event.target;
    alert("Task completed successfully!");
    buttonSix.disabled = true;
    buttonSix.style.backgroundColor = "gray";
    buttonSix.style.cursor = "not-allowed";
    buttonSix.style.text = "white";
 
 })

