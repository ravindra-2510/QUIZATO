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
                    html = ` <div class="container-fluid bg-info">
                    <div class="modal-dialog">
                      <div class="modal-content">
                         <div class="modal-header">
                            <h3><span class="label label-warning" id="qid">${i+1}</span> ${data[i].ques}</h3>
                        </div>
                        <div class="modal-body">
                            <div class="col-xs-3 col-xs-offset-5">
                               <div id="loadbar" style="display: none;">
                                  <div class="blockG" id="rotateG_01"></div>
                                  <div class="blockG" id="rotateG_02"></div>
                                  <div class="blockG" id="rotateG_03"></div>
                                  <div class="blockG" id="rotateG_04"></div>
                                  <div class="blockG" id="rotateG_05"></div>
                                  <div class="blockG" id="rotateG_06"></div>
                                  <div class="blockG" id="rotateG_07"></div>
                                  <div class="blockG" id="rotateG_08"></div>
                              </div>
                          </div>
                  
                          <div class="quiz" id="quiz" data-toggle="buttons">
                           <label class="element-animation1 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="1">1 ${data[i].opt1}</label>
                           <label class="element-animation2 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="2">2 ${data[i].opt2}</label>
                           <label class="element-animation3 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="3">3 ${data[i].opt3}</label>
                           <label class="element-animation4 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="4">4 ${data[i].opt4}</label>
                       </div>
                   </div>
                   <div class="modal-footer text-muted">
                    <span id="answer"></span>
                  </div>
                  </div>
                  </div>
                  </div>`;
                    html += html;
                    element.innerHTML += html;
                    // console.log(data[i]);
                }
            });
        } else {
            document.write(res.status);
        }
    } catch (error) {
        console.log(error);
        document.write(error);
    }
})();
