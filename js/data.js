console.log("data js is running!");
let html;

(async function fatchMydata() {
    try {
    console.log("my function");
    //!calling fetch api
        let res = await fetch("http://localhost:3000/JAVASCRIPT").then(
            (Response) => {
                // console.log(Response);
                return Response;
            }
        );
        //!check resonse is "ok" then execute the if block
        if (res.status == 200) {
            let element = document.getElementById("ques");
            result = res.json();
            result.then((data) => {
                for (i = 0; i < data.length; i++) {
                    html = `
                <div id="ques">
                <p class="question">${i + 1}:${data[i].que}</p>        
                <ul class="answers">            
                <input type="radio" name="q1" value="a" id="q1a"><label for="q1a">${data[i].op1
                        }</label><br/>          
                <input type="radio" name="q1" value="b" id="q1b"><label for="q1b">${data[i].op2
                        }</label><br/>            
                <input type="radio" name="q1" value="c" id="q1c"><label for="q1c">${data[i].op3
                        }</label><br/>            
                <input type="radio" name="q1" value="d" id="q1d"><label for="q1d">${data[i].op4
                        }</label><br/>       
                </ul> 
                </div>  `;
                html+=html
                    element.innerHTML += html;
                    // console.log(data[i]);
                }
            });
        } else {
            document.write(res.status);
        }
    } catch (error) {
        console.log(error);
        document.write(error)
    }
})();


