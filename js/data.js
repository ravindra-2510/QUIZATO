console.log("data js is running!");
let html;
(async function fatchMydata() {
    console.log("my function");
    fetch("http://localhost:3000/JAVASCRIPT").then((Response) => {
        return Response.json();
    }).then((data) => {
        let element = document.getElementById("ques");
        console.log(data);
        for (i=0;i<data.length;i++){
            html = `
            <div id="ques">
            <p class="question">${i}:${data[i].que}</p>        
          
          <ul class="answers">            
          <input type="radio" name="q1" value="a" id="q1a"><label for="q1a">${data[i].op1}</label><br/>          
          <input type="radio" name="q1" value="b" id="q1b"><label for="q1b">${data[i].op2}</label><br/>            
          <input type="radio" name="q1" value="c" id="q1c"><label for="q1c">${data[i].op3}</label><br/>            
          <input type="radio" name="q1" value="d" id="q1d"><label for="q1d">${data[i].op4}</label><br/>       
          </ul> 
          </div>  `;
          element.innerHTML += html;
        //   console.log(typeof(data[i]));
        }
       
    });
    // console.log(element);
})();
//   console.log(data.then((item) => item.json()));

  //  await data.then((item) => {
  //     console.log(item.json());
  //     html = `
  //             <p class="question">${item[0]}</p>
  //             <ul class="answers">
  //             <input type="radio" name="q2" value="a" id="q2a"><label for="q2a">${item[1].op1}</label><br/>
  //             <input type="radio" name="q2" value="b" id="q2b"><label for="q2b">Answer 2</label><br/>
  //             <input type="radio" name="q2" value="c" id="q2c"><label for="q2c">Answer 3</label><br/>
  //             <input type="radio" name="q2" value="d" id="q2d"><label for="q2d">Answer 4</label><br/>
  //             </ul>`;
  //   });
  //   let element = document.getElementById("ques");
  //   element.innerHTML += html;

