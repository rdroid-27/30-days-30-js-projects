 const questions=[
    {
        question:"What is the capital of India?",
        answer:[
            {text: "Mumbai" , correct: false},
            {text: "New Delhi" , correct: true},
            {text: "Kolkata" , correct: false},
            {text: "Chennai" , correct: false}
        ]

    },
    {
        question:"Which is the national bird of India?",
        answer:[
            {text: "Peacock" , correct: true},
            {text: "Eagle" , correct: false},
            {text: "Vulture" , correct: false},
            {text: "Dove" , correct: false}
        ]

    },
    {
        question:"Which is India's largest state in population?",
        answer:[
            {text: "Maharashtra" , correct: false},
            {text: "Bihar" , correct: false},
            {text: "Tamil Nadu" , correct: false},
            {text: "U.P." , correct: true}
        ]

    },
    {
        question:"Which city is called silicon valley of India?",
        answer:[
            {text: "Mumbai" , correct: false},
            {text: "New Delhi" , correct: false},
            {text: "Bangalore" , correct: true},
            {text: "Chennai" , correct: false}
        ]

    }

 ]

 const ques= document.querySelector("#ques");
 const ansBtn=document.querySelector("#ansBtn");
 const nextBtn=document.querySelector("#nextBtn");

 let currentQues = 0;
 let score=0;

 function startQuiz(){
    currentQues=0;
    score=0;
    nextBtn.innerHTML="NEXT";
    showQues();
 }

 function showQues(){
    resetState();
    let currentQuestion=questions[currentQues];
    let questionNo=currentQues+1;
    ques.innerHTML=questionNo + ": "+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const btn=document.createElement("button");
        btn.innerHTML=answer.text;
        btn.classList.add("btn");
        ansBtn.appendChild(btn);
        if(answer.correct){
            btn.dataset.correct= answer.correct;
        }
        btn.addEventListener("click",selectAns);

    });
 }
 function resetState(){
     nextBtn.style.display="none";
     while(ansBtn.firstChild){
         ansBtn.removeChild(ansBtn.firstChild);
     }
 }
function selectAns(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");

    }
    Array.from(ansBtn.children).forEach(btn=>{
        if(btn.dataset.correct==="true"){
            btn.classList.add("correct");
        }
        btn.disabled=true;
    });
    nextBtn.style.display="block";
}



nextBtn.addEventListener("click",()=>{
    if(currentQues<questions.length){
        currentQues++ ;
        if(currentQues<questions.length){
            showQues();
        }
        else{
            resetState();
         ques.innerHTML=`Your Score: ${score} out of ${questions.length}!`;
         nextBtn.innerHTML="Play Again";
         nextBtn.style.display="block";   
        }
    }
    else{
        startQuiz();
    }
});
startQuiz();