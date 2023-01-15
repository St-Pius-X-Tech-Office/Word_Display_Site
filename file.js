let words = ["html", "www", "browser", "internet", "phishing", "dox"];
let count = 0;

var para = document.getElementById("changed_p");
var prev_btn = document.getElementById("prev_btn");
var next_btn = document.getElementById("next_btn");

// Show the previous word in the array on click
prev_btn.onclick = function () {
  // Don't underflow the array
  if (count == 0) {
    para.innerHTML = words[0];
  }
  // Move backwards in the array
  else {
    count--;
    para.innerHTML = words[count];
  }
};

// Go to the next word when the button is pushed
next_btn.onclick = function () {
  // Don't overflow the array
  if (count == words.length - 1) {
    para.innerHTML = words[words.length - 1];
  }
  // Move forward in the array
  else {
    count++;
    para.innerHTML = words[count];
  }
};
