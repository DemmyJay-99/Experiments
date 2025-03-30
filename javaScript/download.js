
     var progress_bar = document.getElementById('progress_bar');
     var change = document.querySelector(".change");
     var incrementInterval;
     var countdown = document.querySelector(".countdown");
     var count = 5;
     var slide_monitor = 1;
     const btnClick= document.querySelector(".btnClick");

        function startIncrement() {
            progress_bar.value = 0;
            incrementInterval = setInterval(incrementProgress,100);
        }

    function incrementProgress() {
        if (progress_bar.value < progress_bar.max) {
            progress_bar.value +=10;
        }
        else{
            clearInterval(incrementInterval);
        }
    }
      
       function updateCountdown() {countdown.innerHTML = count;
        if (count > 0) {
            count--;
         }
         else{
            clearInterval(countdownInterval);
            change.innerHTML = '<h2>Download Link Verification Complete<h2><br>Please click the button below to continue';
                btnClick.style.display='block';
                progress_bar.style.display="block";
           }
        }
        
        var countdownInterval = setInterval(updateCountdown, 1000);