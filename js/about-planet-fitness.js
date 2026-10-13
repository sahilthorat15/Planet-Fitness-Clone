console.log("About PF");

let readmoreBtn = document.getElementById('readmore');
let hidePara = document.getElementsByClassName('hide')[0];
// console.log(hidePara)


readmoreBtn.addEventListener('click', function(){
    // console.log("Read-more")
    hidePara.classList.toggle('hide');
    if(!hidePara.classList.contains('hide')){
        readmoreBtn.innerText = "Read less";
    }else{
        readmoreBtn.innerText = "Read more";
    }
})