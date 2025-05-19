function myFunction()
{
random_number_1 = Math.floor(Math.random() * 6);
random_number_2 = Math.floor(Math.random() * 6);
document.getElementById("mydata").innerHTML =  `Dice rolls are:  ${random_number_1} and ${random_number_2}.`;
if (random_number_1 == random_number_2) {
    alert("doubles");


 
}

}
