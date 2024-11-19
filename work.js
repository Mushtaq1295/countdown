const endDate = "1 December 2024 09:00 AM"
document.getElementById("end-date").innerText = endDate 
const inputs = document.querySelectorAll("input");


function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000; //milli seconds to seconds
    if(diff < 0) return;
    inputs[0].value = Math.floor(diff/3600/24);  //for days
    inputs[1].value = Math.floor(diff/3600%24);  // for hours
    inputs[2].value = Math.floor(diff/60%60);   // for minutes
    inputs[3].value = Math.floor(diff%60)       // for seconds
}

clock()  //initial call


setInterval(() => {
    clock()
}, 1000);