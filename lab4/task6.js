function myFunction() {
            let i = 20;

            function countdown() {
                if (i > 0) {
                    document.getElementById("mydata").innerHTML = `date is: ${i}`;
                    console.log(i);
                    i--;
                    setTimeout(countdown, 1000); // wait 1 second and call function again while i is decreased
                } else {
                    document.getElementById("mydata").innerHTML = 'boom';
                    console.log('boom');
                }
            }

            countdown(); // start the countdown
        }
