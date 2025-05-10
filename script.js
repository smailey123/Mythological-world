let div_h2_left = document.getElementById("div_h2_left")
let div_left = document.getElementById("div_left")
let div2_h2 = document.getElementById("div_h2")
let div_right = document.getElementById("div_right")

// let div1_h2 = document.querySelector(".div1_h2")
// let div2_h2_left = document.querySelector(".div2_h2_left")
// let div3_h2 = document.querySelector(".div3_h2")
// let div4_h2_left = document.querySelector(".div4_h2_left")
// let div5_h2 = document.querySelector(".div5_h2")
// let div6_h2_left = document.querySelector(".div6_h2_left")
let div_1 = document.querySelectorAll(".div-1")

let div1 = document.querySelectorAll(".div1")
let div2_left = document.querySelectorAll(".div2_left")
let div3 = document.querySelectorAll(".div3")
let div4_left = document.querySelectorAll(".div4_left")
let div5 = document.querySelectorAll(".div5")
let div6_left = document.querySelectorAll(".div6_left")

let h2 = document.querySelectorAll(".h2")
let div_2 = document.querySelectorAll(".div_2")

//тут я додаю слухач подій на кожний елемент div котрий видвігається при наведені
div2_left.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff00";
        });
    });
    element.addEventListener("mouseout", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff";
        });
    });
});

div1.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff00";
            div_1.style.marginRight = "0";
        });
    });
    element.addEventListener("mouseout", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff";

        });
    });
});

div3.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff00";
        });
    });
    element.addEventListener("mouseout", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff";
        });
    });
});

div4_left.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff00";
        });
    });
    element.addEventListener("mouseout", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff";
        });
    });
});

div5.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff00";
        });
    });
    element.addEventListener("mouseout", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff";
        });
    });
});

div6_left.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff00";
        });
    });
    element.addEventListener("mouseout", function() {
        h2.forEach(function(h2Element) {
            h2Element.style.transition = ".3s ease-in-out";
            h2Element.style.color = "#ffffff";
        });
    });
});


//тут починається js test.html
//тут буде саме функціонал для тесту
//тут щоб відображався текст на екрані
let btn = document.querySelector(".btn")
let container = document.querySelector(".container")
container.style.display = 'none'
btn.addEventListener("click", function(){
    btn.style.display = 'none'
    container.style.display = 'block'
    const test = new Test();
    test.startTest();
    const answersElement = document.getElementById("answers");
    const answerElement = document.querySelectorAll(".answer")

    if (answersElement) {
        answersElement.style.transition = ".3s ease-in-out";
        answersElement.style.color = " #c300ff";
        answersElement.style.display = "flex";
        answersElement.style.flexDirection = "column";
        answersElement.style.gap = "10px";
        answersElement.style.fontSize = "18px";
        answersElement.style.boxShadow = "5px 5px 5px #540082";
        answersElement.style.marginBottom = "20px";
    }
});

class Test {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.questions = [
            //1 question, Перевертень
            {
                question: "Яка істота здатна змінювати свою форму під світлом повного місяця?",
                answers: ["Відьма", "Перевертень", "Вампір", "Русалка"],
                correctAnswer: 1
            },
            //2 question, Русалка
            {
                question: "Хто зачаровує своїм співом моряків і заманює їх у глибини?",
                answers: ["Фейра", "Русалка", "Перевертень", "Відьма"],
                correctAnswer: 1
            },
            //3 question, Фейра
            {
                question: "Яка істота живе серед квітів і старих лісів, розсіюючи навколо себе магію?",
                answers: ["Фейра", "Відьма", "Дракон", "Русалка"],
                correctAnswer: 0
            },
            //4 question, Відьма
            {
                question: "Чий холодний погляд може проникати у думки і змінювати хід подій?  ",
                answers: ["Фейра", "Перевертень", "Вампір", "Відьма"],
                correctAnswer: 3
            },
            //5 question, Дракон
            {
                question: "Яка істота може ширяти у небі на потужних крилах та видихати полум’я?  ",
                answers: ["Фейра", "Перевертень", "Дракон", "Відьма"],
                correctAnswer: 2
            },
            //6 question, Вампір
            {
                question: "Хто не має відбитка в дзеркалі?",
                answers: ["Фейра", "Відьма", "Вампір", "Русалка"],
                correctAnswer: 2
            },
            //7 question, так
            {
                question: "Русалка може врятувати потопаючих, але також затягнути їх у глибину?  ",
                answers: ["Ні", "Так"],
                correctAnswer: 1
            },
            //8 question, ні
            {
                question: "Відьми можуть часто допомагати героям у казках, даючи їм магічні дари?  ",
                answers: ["Ні", "Так"],
                correctAnswer: 0
            },
            //9 question, Брауні
            {
                question: "До фей відносяться:",
                answers: ["Амфітери", "Дреїки", "Птахолюд", "Брауні"],
                correctAnswer: 3
            },
            //10 question, Русалка
            {
                question: "Іноді її можна побачити біля самотньої скелі над морем, де вона співає так, що серце стискається від туги. Її краса заворожує, а голос неможливо забути. Хто це?  ",
                answers: ["Фейра", "Відьма", "Вампір", "Русалка"],
                correctAnswer: 3
            },
        ];
    }

    startTest() {
        if (this.questions.length === 0) {
            console.error("Питання відсутні.");
            return;
        }
        this.showQuestion();
        this.updateProgress();
    }

    showQuestion() {
        const questionElement = document.getElementById("question");
        const answersElement = document.getElementById("answers");

        if (!questionElement || !answersElement) {
            console.error("Елементи #question або #answers не знайдені.");
            return;
        }

        questionElement.innerHTML = this.questions[this.currentQuestion].question;
        answersElement.innerHTML = "";

        this.questions[this.currentQuestion].answers.forEach((answer, index) => {
            const answerButton = document.createElement("button");
            answerButton.textContent = answer; // Використовуємо textContent для безпеки
            answerButton.addEventListener("click", () => this.checkAnswer(index));
            answersElement.appendChild(answerButton);
        });
    }

    checkAnswer(selectedAnswer) {
        if (selectedAnswer === this.questions[this.currentQuestion].correctAnswer) {
            this.score++;
        }
        this.currentQuestion++;

        if (this.currentQuestion < this.questions.length) {
            this.showQuestion();
            this.updateProgress();
        } else {
            this.showResult();
        }
    }

    showResult() {
        const questionElement = document.getElementById("question");
        const answersElement = document.getElementById("answers");
        
        if (!questionElement || !answersElement) {
            console.error("Елементи #question або #answers не знайдені.");
            return;
        }

        questionElement.innerHTML = `Правильно відповіли на ${this.score} з ${this.questions.length}.`;
        answersElement.innerHTML = "";
    }
    updateProgress() {
        const q = document.querySelector(".q");
        if (q) {
            q.textContent = `${this.currentQuestion + 1} / ${this.questions.length}`;
        } else {
            console.error("Елемент .q не знайдено.");
        }
    }
}
