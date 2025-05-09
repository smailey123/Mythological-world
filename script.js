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
                question: "Яка істота живе серед квітів і старих лісів, розсіюючи навколо себе магію?",
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
    points () {
        let q = document.querySelectorAll(".q")
        q.innerHTML = `${this.currentQuestion}/${this.questions.length}`
    }
}






//coloring_page.html
let td_1 = document.querySelectorAll(".td_1")
let td_2 = document.querySelectorAll(".td_2")
let td_3 = document.querySelectorAll(".td_3")
let td_4 = document.querySelectorAll(".td_4")
let td_5 = document.querySelectorAll(".td_5")
let td_9 = document.querySelectorAll(".td_9")
let td_12 = document.querySelectorAll(".td_12")
let td_16 = document.querySelectorAll(".td_16")
let td_17 = document.querySelectorAll(".td_17")
let td_18 = document.querySelectorAll(".td_18")
let td_19 = document.querySelectorAll(".td_19")
let td_20 = document.querySelectorAll(".td_20")
let td_22 = document.querySelectorAll(".td_22")
let td_24 = document.querySelectorAll(".td_24")

function changeCellColor(cells, color) {
    cells.addEventListener("click", function() {
        cell.style.backgroundColor = color;
    });
}

changeCellColor(td_1, "red");
changeCellColor(td_2, "blue");
changeCellColor(td_3, "green");
changeCellColor(td_4, "yellow");
changeCellColor(td_5, "purple");
changeCellColor(td_9, "orange");
changeCellColor(td_12, "pink");
changeCellColor(td_16, "cyan");
changeCellColor(td_17, "lime");
changeCellColor(td_18, "magenta");
changeCellColor(td_19, "brown");
changeCellColor(td_20, "teal");
changeCellColor(td_22, "gold");
changeCellColor(td_24, "silver");