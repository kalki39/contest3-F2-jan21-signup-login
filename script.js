let name = document.getElementById("name");
        let email = document.getElementById("email");
        let pass = document.getElementById("pass");
        let cpass = document.getElementById("cpass");
        let passcheck = document.getElementsByClassName("check");
        let Err=document.getElementById('error');
        let logredir=document.getElementById("logredir")
        let form1=document.getElementById("form1")

        let p0 = 0;
        let p1 = 0;
        let p2 = 0;
        let p3 = 0;
        let p4 = 0;

        let arr = [];
        let id = 1;
        // passcheck[1].style.color="yellow";


        function validate() {

            if (name.value.length > 1) {
                passcheck[0].style.color = "yellow";
                p0 = 1;
            }
            else {
                p0 = 0;
                passcheck[0].style.color = "red";
            }

            const em = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (em.test(email.value)) {
                passcheck[3].style.color = "yellow";
                p3 = 1;
            }
            else {
                p3 = 0;
                passcheck[3].style.color = "red";

            }


            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (passwordRegex.test(pass.value)) {
                passcheck[1].style.color = "yellow";
                p1 = 1;

                if (pass.value == cpass.value && pass.value != "") {
                    passcheck[2].style.color = "yellow";
                    p2 = 1;
                }
                else {
                    passcheck[2].style.color = "red";
                    p2 = 0;
                }
            } else {
                p1 = 0;
                passcheck[1].style.color = "red";
            }


        }

        function val() {
            if (p0 == 1 && p1 == 1 && p2 == 1 && p3 == 1) {
                Err.innerText = "SUCCESSFULLY SIGNED"
                Err.style.color = "gold";

                arr.push({ id: id++, name: name.value, email: email.value, password: pass.value })
                console.log(arr);

                clear();

                // form1.style.display="none";
                logredir.style.display="inline";

            }
            else{
                Err.innerText = "PLEASE GIVE VALID INFORMATION"
                Err.style.color = "gold";

            }
        }
        
        console.log(arr);

        function clear(){
            pass.value="";
            cpass.value="";
        }

        // login page

        function login(){
            window.location.assign("login.html");
        }

        function welcome(){
            window.location.assign("welcome.html");
        }
