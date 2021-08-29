P1n = localStorage.getItem("P1key");
P2n = localStorage.getItem("P2key");

p1s = 0;
p2s = 0;

document.getElementById('nameP1').innerHTML = P1n + " : ";
document.getElementById('nameP2').innerHTML = P2n + " : ";

document.getElementById('ScoreP1').innerHTML = p1s;
document.getElementById('ScoreP2').innerHTML = p2s;

document.getElementById('Qturn').innerHTML = "Question turn - " + P1n;
document.getElementById('Ansturn').innerHTML = "Answer turn - " + P2n;

function Send() {

    R_Chart3 = document.getElementById('AnsText1').value * document.getElementById("AnsText2").value
    console.log(R_Chart3);

    Number1 = document.getElementById('AnsText1').value;
    Number2 = document.getElementById('AnsText2').value;
    Ques = Number1 + " X " + Number2

    question_word = "<h4 id='word_display'> Q. "+Ques+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById('output').innerHTML = row;
    document.getElementById('AnsText').value = "";

}

Q_turn = "player1";
Ans_turn = "player2";

function check() {
    BAns = document.getElementById('input_check_box').value;
    Ans = BAns.toLowerCase();
    if(Ans == R_Chart3) {
        if(Ans_turn == "player1") {
            p1s = p1s + 1;
            document.getElementById('ScoreP1').innerHTML = p1s;
        }
        else {
            p2s = p2s + 1;
            document.getElementById('ScoreP2').innerHTML = p2s;
        }
    }
    if (Q_turn == "player1") {
        Q_turn = "player2";
        document.getElementById('Qturn').innerHTML = "Question turn - " + P2n
    }

    else {
    Q_turn = "player1";
    document.getElementById('Qturn').innerHTML = "Question turn - " + P1n;
    }

    if (Ans_turn == "player1") {
        Ans_turn = "player2";
        document.getElementById('Ansturn').innerHTML = "Answer turn - " + P2n
    }

    else {
    Ans_turn = "player1";
    document.getElementById('Ansturn').innerHTML = "Answer turn - " + P1n;
    }
    document.getElementById('output').innerHTML = "";

}
