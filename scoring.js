score()
    var ele = document.getElementsByName('q1');
    var score = 0;  
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked) {
                    if(ele[i].value == "correct") {
                        score++;
                    }
                }
            }
            alert("Hello! I am an alert box!!");
