

        function setUpEvents() {
            var slider = document.getElementById('slider');
        var active = document.getElementById('active');
        var line1 = document.getElementById('line1');
        var line2 = document.getElementById('line2');
        var line3 = document.getElementById('line3');
        var line4 = document.getElementById('line4');

        line1.onclick = function() {
            slider.style.transform = 'translateX(0)';
            active.style.top = '0';
        }

        line2.onclick = function() {
            slider.style.transform = 'translateX(-25%)';
            active.style.top = '25%';
        }

        line3.onclick = function() {
            slider.style.transform = 'translateX(-50%)';
            active.style.top = '50%';
        }

        line4.onclick = function() {
            slider.style.transform = 'translateX(-75%)';
            active.style.top = '75%';
        }

        }
        window.onload = function() {
            
            console.log("from onload")
        }

        $( document ).ready(function() {
            console.log( "ready!" );
            setUpEvents();
           /* setInterval(function() {
                setUpEvents()
                console.log( "setupfired" );
        }, 200000);*/
            
        });


        
