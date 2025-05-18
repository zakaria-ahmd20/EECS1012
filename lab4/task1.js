
function myFunction()
{
random_number = Math.random();
if (random_number > 0.5) {
  console.log('number is greater than 0.5')
  document.getElementById("mydata").innerHTML = "yes";
 
}
else {
  console.log('number is less than 0.5')
  document.getElementById("mydata").innerHTML = "no";
}
}
