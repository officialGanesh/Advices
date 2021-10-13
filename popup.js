console.log("Popup js 🚀");

let date_day = document.getElementById("date_day");
let advice = document.getElementById("advice");
let btn = document.getElementById("btn");
const url = "https://api.adviceslip.com/advice";

class UI{

    static changeDayAndDate(){
        let date = new Date().toLocaleString();
        date_day.innerHTML = date;
    };

    static fetchAdvice(url){
        fetch(url).then(res=>{return res.json()})
        .then(data=>{advice.innerHTML = data.slip.advice})
        .catch(err=>{advice.innerHTML = `Something Went Wrong 🙏`});
    };

}

btn.addEventListener('click',()=>{

    UI.changeDayAndDate()
    UI.fetchAdvice(url);

});

