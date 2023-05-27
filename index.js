function getVillains() {
  return {
    8: ["The Flash", "Ra's Al Ghul", "Vandal Savage", "Slade Wilson"],
    9: [
      "Deathstroke",
      "Mordru The Merciless",
      "Graves",
      "H'el",
      "Green Arrow",
      "Jesse Quick",
    ],
    10: [
      "Terra",
      "Deathstroke",
      "Cheshire",
      "(Injustice) Lex Luthor",
      "Helspont",
      "Johnny Quick",
      "Constantine",
    ],
    11: ["Aquaman", "Terra", "Lex Luthor", "Cheshire", "Helspont", "Mongul"],
    12: [
      "Trigon",
      "The Anti-Monitor",
      "Doomsday",
      "Shazam!",
      "Blight",
      "Mongul",
      "Ultra-Humanite",
      "Parallax",
    ],
    13: ["(Black Lantern) Superman", "Parallax", "Gentleman Ghost"],
    14: ["Bart Allen", "Isabel Rochev"],
  };
}

function randomChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

const COUNT = [5, 5, 5, 6];
const END_14 = [true, true, true, false];
const MAX_POINTS = 3;

function select_villain(cost) {
  let selected = randomChoice(villains[cost]);
  villains[cost] = villains[cost].filter((villain) => villain !== selected);
  return selected;
}

let villains;
let jumps;
let cost = 8;

function main() {
  let output = document.getElementById("output");
  villains = getVillains();
  cost = 8;
  output.innerHTML = "";

  let max_count = randomChoice(COUNT);
  jumps = Array(max_count).fill(0);
  jumps[0] = 1;
  jumps[3] = 1;

  for (let i = 0; i < MAX_POINTS; i++) {
    let index = Math.floor(Math.random() * jumps.length);
    jumps[index] += 1;
  }

  if (randomChoice(END_14)) {
    jumps[max_count - 1] += 1;
  }
}

function nextVillain() {
  let output = document.getElementById("output");
  if (jumps.length > 0) {
    output.innerHTML += `Next: ${cost} - ${select_villain(cost)}<br>`;
    cost += jumps.shift();
  } else {
    output.innerHTML += `Next: ${cost} - ${select_villain(cost)}`;
    cost = 8; // reset cost
  }
}

document.getElementById("startButton").addEventListener("click", main);
document.getElementById("nextButton").addEventListener("click", nextVillain);
