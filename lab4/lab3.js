   function storeValue(value) {
    let grabbed_value = value;
    let counter = 0
    let sum = 0
    while (counter <= grabbed_value ) {
    sum = sum + counter
    counter++
     
    
}
 document.getElementById("mydata").innerHTML =  `Result is:  ${sum} .`;
  }
 
