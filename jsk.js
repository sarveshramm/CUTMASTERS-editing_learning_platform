function submitQuiz() {

  let a = ["To add a filter", "Red-Eye Tool", "Saves the project", "A visual effect between two clips", "PNG"];
  let score = 0;

  
  for (let i = 0; i <=5; i++) {
    let s = document.querySelector(`input[name="q${i + 1}"]:checked`);
    if (s && s.value === a[i]) {
      score++;
    }
  }


  document.getElementById("scoreDisplay").textContent = "You scored " + score + " out of 5";


  let winnerImage = document.getElementById("winnerImage");
  winnerImage.style.display = (score === 5) ? "block" : "none";
}
