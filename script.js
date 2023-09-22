document.addEventListener("DOMContentLoaded", function () {

    const trueAnswer = [
        {
            question: "Qual o nome do cantor de The Weekend?",
            a: "Felipe",
            b: "Michael",
            c: "Abel",
            correct: "c",
        },
        {
            question: "Qual o nome da cantora Taylor Swift?",
            a: "Taylor",
            b: "Abby",
            c: "Bea",
            correct: "a",
        },
        {
            question: "Qual o nome do cantor vocalista de Imagine Dragons?",
            a: "Mathew",
            b: "Daniel",
            c: "Jhon",
            correct: "b",
        },
    ]

    const inAnswer = document.querySelectorAll('.inAnswer');
    let inQuestion = document.getElementById('inQuestion');
    let labelA = document.getElementById('labelA');
    let labelB = document.getElementById('labelB');
    let labelC = document.getElementById('labelC');
    const btSubmit = document.getElementById('btSubmit');

    let score = 0;
    let indice = 0;

    loadQuiz();

    function loadQuiz() {

        deselect();
        let inTrueAnswer = trueAnswer[indice];

        inQuestion.textContent = inTrueAnswer.question;
        labelA.textContent = inTrueAnswer.a;
        labelB.textContent = inTrueAnswer.b;
        labelC.textContent = inTrueAnswer.c;
    }

    function deselect() {
        inAnswer.forEach(radio => radio.checked = false)
    }

    function getSelected() {
        let answer;

        inAnswer.forEach(radio => {
            if (radio.checked) {
                answer = radio.id
            }
        })

        return answer;
    };

    btSubmit.addEventListener("click", () => {
        const answer = getSelected();

        if (!answer) {
            alert("Selecione alguma resposta");
            return;
        }
        if (answer == trueAnswer[indice].correct) {
            score++;
        }

        indice++;

        if (indice < trueAnswer.length) {
            loadQuiz();
        } else {
            outDisplay(score);
        }


    });

    function outDisplay() {
        let inputRadio = document.querySelectorAll('input[type="radio"]');
        inputRadio.forEach((radio) => {
            radio.style.display = "none";
        });

        inQuestion.textContent = "";
        labelA.textContent = "";
        labelB.textContent = "";
        labelC.textContent = "";
        btSubmit.style.display = "none";

        let resultMessage = "";

        if (score == 3){
            resultMessage = "Parabéns, você acertou todas as questões!";
        } else if (score == 1){
            resultMessage = `Você acertou ${score} questão!`;
        } else if(score == 0){
            resultMessage= 'Infelizmente você errou todas as questões!';
        } else {
            resultMessage=`Você acertou ${score} quesões!`;
        }

        const btRestart = document.createElement('button');
        btRestart.textContent = "Restart";
        btRestart.id = "btRestart";
        btRestart.addEventListener('click', () => {
            location.reload();
        });

        document.querySelector(".quiz").appendChild(btRestart);
        let p = document.createElement('p');
        let text = document.createTextNode(resultMessage);
        p.classList.add("paragraph");
        p.appendChild(text);
        document.querySelector(".outResult").appendChild(p);
    }
});
