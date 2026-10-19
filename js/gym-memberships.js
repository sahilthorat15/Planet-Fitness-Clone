console.log("Hello");

let questionHeader = document.querySelectorAll('.membership-faq-header')
let questionAnswer = document.querySelectorAll('.membership-faq-number-answer');

questionHeader.forEach(function(question, questionIndex){
    question.addEventListener('click', function(){
        questionAnswer[questionIndex].classList.toggle('showAnswer');

        questionAnswer.forEach(function(answer, answerIndex){
            if(answerIndex != questionIndex){
                answer.classList.remove('showAnswer');
            }
        })
    })
})