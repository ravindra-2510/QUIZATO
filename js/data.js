console.log("data js is running!");
let html;
(function fatchMydata() {
    console.log("my function");
    let data = fetch("http://localhost:3000/JAVASCRIPT");
    setTimeout(()=>{
        data.then((item) => {
            console.log(item.json());
             html=`
             <p class="question">${item[0]}</p>
             <ul class="answers">            
            <input type="radio" name="q2" value="a" id="q2a"><label for="q2a">${item[1].op1}</label><br/>           
            <input type="radio" name="q2" value="b" id="q2b"><label for="q2b">Answer 2</label><br/>            
            <input type="radio" name="q2" value="c" id="q2c"><label for="q2c">Answer 3</label><br/>           
            <input type="radio" name="q2" value="d" id="q2d"><label for="q2d">Answer 4</label><br/>       
            </ul>`;
        });
        let element=document.getElementById("ques");
        element.innerHTML+=html;
    },6000)
})();