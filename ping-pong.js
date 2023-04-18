const input = document.querySelector("#rounds");
const btn1 = document.querySelector("#player1");
const btn2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");
const display = document.querySelector('#display');
const text = document.querySelector('#text');


let p1score = 0, p2score = 0;

function updateScore() {
    display.style.alignSelf = 'center';
    display.innerHTML = `<b>${p1score}-${p2score}</b>`;
}

input.addEventListener('input', function () {
    updateScore();
    input.disabled = true;
    return input.value;
});

btn1.addEventListener('click', function () {
    if (input.value) {
        if (p1score < input.value - 1 /*(max-1)*/) {
            p1score++;
            updateScore();
        } else {
            p1score++;
            display.innerHTML = `<b>${p1score}-${p2score} Player 1 Wins</p>`;
            btn1.disabled = true;
            btn2.disabled = true;
        }
    } else {
        alert("State The Number of Rounds");
    }
});
btn2.addEventListener('click', function () {
    if (input.value) {
        if (p2score < input.value - 1 /*(max-1)*/) {
            p2score++;
            updateScore();
        } else {
            p2score++;
            display.innerHTML = `<b>${p1score}-${p2score} Player 2 Wins</p>`;
            btn1.disabled = true;
            btn2.disabled = true;
        }
    } else {
        alert("State The Number of Rounds");
    }
});

reset.addEventListener('click', function () {
    if (input.value) {
        input.value = '';
        input.disabled = false;
        btn1.disabled = false;
        btn2.disabled = false;
        display.style.alignSelf = 'flex-start';
        display.innerText = 'Ping-Pong player score keeper';
        p1score = 0;
        p2score = 0;
    }
    else {
        alert("State The Number of Rounds");
    }
});