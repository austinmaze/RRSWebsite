validate() {

}
score() {
	var ele = document.getElementsByName('q1');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("result").innerHTML
                        = "Gender: "+ele[i].value;
            }

}