<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Website</title>
    <link rel="stylesheet" href="quiz.css">
</head>
<style>
input[type="radio"]:checked {
    background-color: #8ec5fc;
    border-color: #8ec5fc;
}

.btn {
    padding: 1rem 4rem;
}

.quiz-section{
    display: flex;
    align-items: center;
    background-color: rgb(142, 82, 82);

}
button{
    padding: 0 3rem;
    height: 3rem;
    border-radius: 3rem;
    -webkit-border-readius:5rem;
    -moz-border-radius: 5rem;
    -ms-border-radius:5rem;
    -o-border-radius:5rem;
    background-color : #6274a5;
    border: none;
    color: #d7c7c7;
    font-size: 1.8rem;


}

.result{
    width: 100%;
    height: auto;
    padding: 5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    -webkit-border-radius:0.5rem;
    -moz-border-radius: 0.5rem;
    -ms-border-radius:0.5rem;
    -o-border-radius:0.5rem;
    box-shadow: 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
}





.result h2 {
    font-size: 3.4rem;

}

.result p{
    font-size: 2rem;
}


const quizData=[
    {
        question:"What does HTML stand for?",
        otions: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and text  Markup Language",
        ],
        correct:0,
    },
    {
        question:
        "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        coorect: 1,
    },
    
]


const answerElm = document.querySelectorAll(" .answer");
const[questionElm, option_1, option_2, option_3, option_4] =
document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4 "
);
const submitBtn = document.querySelector("#submit");

const currentQuiz = 0;
const score=0;


</style>
<body>
    <div class="quiz-section">
        <div id="quiz">
            <h2 class="question" id="question">What does HTML stand for?</h2>
            <hr>
            <ul>
                <li>
                <input type="radio" name="answer" id="a">
                <label for="a" id="option_1">Hypertext Markup Language</label>
            </li>
            <li>
                <input type="radio" name="answer" id="b">
                <label for="b" id="option_1">Hypertext Machine Language</label>
            </li>
            <li>
                <input type="radio" name="answer" id="c">
                <label for="c" id="option_1">Hyper Transfer Markup Language</label>
            </li>
            <li>
                <input type="radio" name="answer" id="d">
                <label for="d" id="option_1">Hyperlink and text  Markup Language</label>
            </li>
            </ul>


            
            <hr>
            <div class="btn">
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
</body>
</html>
