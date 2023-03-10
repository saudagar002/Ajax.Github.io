function load_file(){

            var server = new XMLHttpRequest();
            server.onreadystatechange = function() {
                if(
                    this.readyState == 4  &&  this.status == 200){

                        document.getElementById("result").innerHTML=this.responseText;
                        
                    }
                    
                };
                server.open("Get", "ajax.txt", true);
                server.send();
            }
