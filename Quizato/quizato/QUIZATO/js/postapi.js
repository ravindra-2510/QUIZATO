/*console.log("post api working!");
let postBtn = document.getElementById("postBtn");
postBtn.onclick = () => postData();
async function postData() {
    let ques = document.getElementById("ques").value;
    let opt1 = document.getElementById("option-1").value;
    let opt2 = document.getElementById("option-2").value;
    let opt3 = document.getElementById("option-3").value;
    let opt4 = document.getElementById("option-4").value;
    let ans = document.getElementById("ans").value;
    let url = `http://localhost:3000/JAVASCRIPT`;
    let obj = {
        ques: ques,
        opt1: opt1,
        opt2: opt2,
        opt3: opt3,
        opt4: opt4,
        ans: ans,
    };
    params = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };

    await fetch(url, params).then(response=>response.json()).then(data=>console.log(data)).catch(err=>console.log(err));

    console.log(obj);
}*/
