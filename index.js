function getVillains() {
  return {
    8: [
      {
        name: "The Flash",
        url: "https://www.dcdeckbuilding.com/scans/The%20Flash%208%20SO.jpg",
      },
      {
        name: "Ra's Al Ghul",
        url: "https://www.dcdeckbuilding.com/scans/Ras%20Al%20Ghul%208.jpg",
      },
      {
        name: "Vandal Savage",
        url: "https://www.dcdeckbuilding.com/scans/Vandal%20Savage%208.jpg",
      },
      {
        name: "Slade Wilson",
        url: "https://www.dcdeckbuilding.com/scans/Slade%20Wilson%208.jpg",
      },
    ],
    9: [
      {
        name: "Deathstroke",
        url: "https://www.dcdeckbuilding.com/scans/deathstrokeSvErrata.jpg",
      },
      {
        name: "Mordru The Merciless",
        url: "https://www.dcdeckbuilding.com/scans/mordruTheMercilessSvErrata.jpg",
      },
      {
        name: "Graves",
        url: "https://www.dcdeckbuilding.com/scans/Graves%209.jpg",
      },
      {
        name: "H'el",
        url: "https://www.dcdeckbuilding.com/scans/H%20El%209.jpg",
      },
      {
        name: "Green Arrow",
        url: "https://www.dcdeckbuilding.com/scans/Green%20Arrow%209.jpg",
      },
      {
        name: "Jesse Quick",
        url: "https://www.dcdeckbuilding.com/scans/Jesse%20Quick%209.jpg",
      },
    ],
    10: [
      {
        name: "Terra",
        url: "https://www.dcdeckbuilding.com/scans/Terra%2010.jpg",
      },
      {
        name: "Deathstroke",
        url: "https://www.dcdeckbuilding.com/scans/Deathstroke%2010.jpg",
      },
      {
        name: "Cheshire",
        url: "https://www.dcdeckbuilding.com/scans/Cheshire%2010.jpg",
      },
      { name: "(Injustice) Lex Luthor", url: "" },
      {
        name: "Helspont",
        url: "https://www.dcdeckbuilding.com/scans/helspontSvErrata.jpg",
      },
      {
        name: "Johnny Quick",
        url: "https://www.dcdeckbuilding.com/scans/johnnyQuickSvErrata.jpg",
      },
      {
        name: "Constantine",
        url: "https://www.dcdeckbuilding.com/scans/Constantine%2010.jpg",
      },
    ],
    11: [
      {
        name: "Aquaman",
        url: "https://www.dcdeckbuilding.com/scans/Aquaman%2011.jpg",
      },
      {
        name: "Terra",
        url: "https://www.dcdeckbuilding.com/scans/Terra%20SV%20Crisis%204.jpg",
      },
      {
        name: "Lex Luthor",
        url: "https://www.dcdeckbuilding.com/scans/Lex%20Luthor%2011.jpg",
      },
      {
        name: "Cheshire",
        url: "https://www.dcdeckbuilding.com/scans/Cheshire%20SV%20Crisis%204.jpg",
      },
      {
        name: "Helspont",
        url: "https://www.dcdeckbuilding.com/scans/helspontImSvErrata.jpg",
      },
      {
        name: "Mongul",
        url: "https://www.dcdeckbuilding.com/scans/Mongul%2011.jpg",
      },
    ],
    12: [
      {
        name: "Trigon",
        url: "https://www.dcdeckbuilding.com/scans/Trigon%2012.jpg",
      },
      {
        name: "The Anti-Monitor",
        url: "https://www.dcdeckbuilding.com/scans/The%20Anti-Monitor.jpg",
      },
      {
        name: "Doomsday",
        url: "https://www.dcdeckbuilding.com/scans/Doomsday%2012.jpg",
      },
      {
        name: "Shazam!",
        url: "https://www.dcdeckbuilding.com/scans/Shazam%2012.jpg",
      },
      {
        name: "Blight",
        url: "https://www.dcdeckbuilding.com/scans/Blight.jpg",
      },
      {
        name: "Mongul",
        url: "https://www.dcdeckbuilding.com/scans/Mongul%2012.jpg",
      },
      {
        name: "Ultra-Humanite",
        url: "https://www.dcdeckbuilding.com/scans/Ultra%20Humanite%2012.jpg",
      },
      {
        name: "Parallax",
        url: "https://www.dcdeckbuilding.com/scans/Parallax%2012.jpg",
      },
    ],
    13: [
      {
        name: "(Black Lantern) Superman",
        url: "https://www.dcdeckbuilding.com/scans/Black%20Lantern%20Superman%2013.jpg",
      },
      {
        name: "Parallax",
        url: "https://www.dcdeckbuilding.com/scans/Parallax%2013.jpg",
      },
      {
        name: "Gentleman Ghost",
        url: "https://www.dcdeckbuilding.com/scans/gentlemanGhostSvErrata.jpg",
      },
    ],
    14: [
      {
        name: "Bart Allen",
        url: "https://www.dcdeckbuilding.com/scans/Bart%20Allen%2014.jpg",
      },
      {
        name: "Isabel Rochev",
        url: "https://www.dcdeckbuilding.com/scans/isabelRochevSvErrata.jpg",
      },
    ],
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

  let element = `<div><h3>${selected.name} (${cost})</h3><br><img src=${selected.url}></div>`;
  return element;
}

let villains;
let jumps;
let active = false;

function reset() {
  let output = document.getElementById("output");
  villains = getVillains();
  cost = 8;
  active = true;
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
  if (!active) {
    reset();
    return;
  }
  if (jumps.length > 0) {
    output.innerHTML = select_villain(cost) + output.innerHTML;
    cost += jumps.shift();
  } else {
    output.innerHTML = select_villain(cost) + output.innerHTML;
    active = false;
  }
}

document.getElementById("button").addEventListener("click", nextVillain);
