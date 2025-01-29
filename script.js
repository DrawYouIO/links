const date = new Date();
const months = ["01" , "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

document.getElementById("today").innerHTML = "• " + day + "/" + months[month] + "/" + year;

console.log("a")