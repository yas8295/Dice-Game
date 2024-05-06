let playerArea1 = document.querySelector(".playerarea1");
let playerArea2 = document.querySelector(".playerarea2");
let p1score = document.querySelector(".p1score");
let p2score = document.querySelector(".p2score");
let pActive = 1;
let p1CurrentScore = document.querySelector(".p1-current-score");
let p2CurrentScore = document.querySelector(".p2-current-score");
let diceImage = document.querySelectorAll(".dice-image");
let btnNewGame = document.querySelectorAll(".new-game");
let btnRoll = document.querySelectorAll(".roll");
let btnHold = document.querySelectorAll(".hold");
let current = 0;
let score = [0, 0];
let winner = document.querySelector(".winner");
let overlay = document.querySelector(".overlay");

btnRoll.forEach((e) =>
  e.addEventListener("click", function () {
    if (score[0] >= 100 || score[1] >= 100) {
      document.querySelector(`.p${pActive}score`).textContent =
        score[pActive - 1];
      winner.classList.add("show");
      overlay.classList.add("show");
      winner.textContent = `🎉Player${pActive} is Winner`;
    }
    let rollNumber = Math.trunc(Math.random() * 6 + 1);
    btnRoll = rollNumber;
    diceImage.forEach((e) => (e.src = `dice${rollNumber}.png`));
    if (rollNumber === 1) {
      score[pActive - 1] -= current;
      // currentReduce = 0;
      document.querySelector(".hold").disabled = true;
      document.querySelector(`.p${pActive}-current-score`).textContent = 0;
      playerArea1.classList.toggle("active");
      playerArea2.classList.toggle("active");
      current = 0;
      if (pActive === 1) {
        pActive = 2;
      } else if (pActive === 2) {
        pActive = 1;
      }
    } else if (rollNumber > 1) {
      document.querySelector(".hold").disabled = false;
      current += rollNumber;
      // currentReduce = current;
      score[pActive - 1] += rollNumber;
      document.querySelector(`.p${pActive}-current-score`).textContent =
        current;
      if (score[0] >= 100 || score[1] >= 100) {
        document.querySelector(`.p${pActive}score`).textContent =
          score[pActive - 1];
        winner.classList.add("show");
        overlay.classList.add("show");
        winner.textContent = `🎉Player${pActive} is Winner`;
      }
    }
  })
);

btnHold.forEach((e) =>
  e.addEventListener("click", function () {
    // currentReduce = 0;
    document.querySelector(".hold").disabled = true;
    document.querySelector(`.p${pActive}score`).textContent =
      score[pActive - 1];
    playerArea1.classList.toggle("active");
    playerArea2.classList.toggle("active");
    current = 0;
    document.querySelector(`.p${pActive}-current-score`).textContent = current;
    if (pActive === 1) {
      pActive = 2;
    } else if (pActive === 2) {
      pActive = 1;
    }
  })
);

function newgame() {
  p1score.textContent = 0;
  p2score.textContent = 0;
  playerArea1.classList.add("active");
  playerArea2.classList.remove("active");
  p1CurrentScore.textContent = 0;
  p2CurrentScore.textContent = 0;
  pActive = 1;
  current = 0;
  score = [0, 0];
  document.querySelector(".hold").disabled = true;
}

btnNewGame.forEach((e) => {
  e.addEventListener("click", () => {
    newgame();
  });
});

overlay.addEventListener("click", function () {
  winner.classList.remove("show");
  overlay.classList.remove("show");
  newgame();
});
