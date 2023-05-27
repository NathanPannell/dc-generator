import random

POSSIBLE_COUNTS = [5, 6]
COUNT_WEIGHTS = [0.75, 0.25]
MAX_POINTS = 3
ODDS_OF_ENDING_14 = [0.75, 0.25]  # End with a 14 75% of the time

villains = {
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
}


def main():
    max_count = int(random.choices(POSSIBLE_COUNTS, COUNT_WEIGHTS, k=1)[0]) - 1
    jumps = [0] * max_count
    jumps[0] = 1
    jumps[3] = 1
    for _ in range(MAX_POINTS):
        index = random.randint(0, len(jumps) - 1)
        jumps[index] += 1
    jumps[len(jumps) - 1] += random.choices([1, 0], ODDS_OF_ENDING_14, k=1)[0]

    print("---  START  ---")
    cost = 8
    for jump in jumps:
        select_villain(cost)
        cost += jump
    select_villain(cost)

    print("---  END  ---")


def select_villain(cost):
    # Select random villain from array and remove it
    selected = random.choice(villains[cost])
    index = villains[cost].index(selected)
    villains[cost].pop(index)

    input(f"Next: {cost}-" + selected)


if __name__ == "__main__":
    main()
