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
    cells.forEach(function(cell) {
        cell.addEventListener("click", function() {
            cell.style.backgroundColor = color;
        });
    });
}

changeCellColor(td_1, " #1900ba");
changeCellColor(td_2, " #2e54c8");
changeCellColor(td_3, "rgb(1, 168, 214)");
changeCellColor(td_4, " #00ddff");
changeCellColor(td_5, " #bdab94");
changeCellColor(td_9, " #af8ac9");
changeCellColor(td_12, " #38001a");
changeCellColor(td_16, " #9fa3dd");
changeCellColor(td_17, "rgb(137, 141, 204)");
changeCellColor(td_18, " #e5b9ff");
changeCellColor(td_19, " #cde2ff");
changeCellColor(td_20, " #aca8ff");
changeCellColor(td_22, " #909090");
changeCellColor(td_24, " #907168");