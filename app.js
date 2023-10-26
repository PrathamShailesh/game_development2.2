const boxarr = document.querySelectorAll(".box");

let flag = 1;
var ans = 0;
winning_combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
];
const x_pos = [];
const y_pos = [];

boxarr.forEach((el) => {
  el.addEventListener("click", (event) => {
    startgame(event.target);
  });
});

function startgame(e) {
  let cl = Number(e.parentElement.id);
  if (x_pos.includes(cl) || y_pos.includes(cl)) {
    alert("click on different box")
   

    
  } else {
    if (flag == 1) {
      const p = document.createElement("p");
      p.innerText = "X";
      p.style.color = "Yellow";
      e.appendChild(p);
      x_pos.push(Number(e.id));
      if (check_win(x_pos, winning_combinations) == true) {
        console.log("x won");
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("message").innerText = "X won";
        return
      }
      ans += 1;
      flag = 0;
    } else {
      const p = document.createElement("p");
      p.innerText = "O";
      p.style.color = "Red";
      e.appendChild(p);
      y_pos.push(Number(e.id));
      if (check_win(y_pos, winning_combinations) == true) {
        console.log("y won");
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("message").innerText = "Y won";
        return
      }
      flag = 1;
      ans += 1;
    }
    if (ans == 9) {
      document.getElementById("result").style.visibility = "visible";
      document.getElementById("message").innerText = "Draw";
    }
    
    console.log(x_pos, y_pos);
    console.log(ans);


    
  }

  function check_win(arr, winning_combinations) {
    for (let i = 0; i < winning_combinations.length; i++) {
      // console.log(winning_combinations[i])
      const boole = winning_combinations[i].every((el) => {
        return arr.includes(el);
      });
      if (boole == true) {
        return true;
      }
    }
    return false;
  }

  document.getElementById("button").onclick = function () {
    window.location.reload();
  };


 
  if (ans == 9) {
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("message").innerText = "Draw";
  }
}
