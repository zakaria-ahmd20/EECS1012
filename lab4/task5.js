function myFunction()
{
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const curentday = new Date().getDate();
const currentYear =  new Date().getFullYear();
const currentmonth =  new Date().getMonth();

console.log(currentYear)
console.log(curentday)
console.log(months[currentmonth])

document.getElementById("mydata").innerHTML =  `date is:  ${curentday} (${months[currentmonth]}) ${currentYear}.`;

	




 
}

 
