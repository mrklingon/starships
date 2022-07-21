input.onButtonPressed(Button.A, function () {
    cursys = randint(0, 9)
    loc = Systems[2 * cursys]
    dst = Systems[1 + 2 * cursys]
    scrollbit.scrollText(loc, 128, 50)
    scrollbit.scrollText(convertToText(dst), 128, 50)
})
input.onButtonPressed(Button.B, function () {
    story = ""
    story = "" + story + " " + ships[randint(0, 4)]
    story = "" + story + " " + travel[randint(0, 3)] + " " + loc
    story = "" + story + " " + purpose[randint(0, 4)]
    scrollbit.scrollText(story, 128, 50)
})
let story = ""
let purpose: string[] = []
let travel: string[] = []
let ships: string[] = []
let Systems: string[] = []
let cursys = 0
let dst = ""
let loc = ""
loc = ""
dst = ""
scrollbit.scrollText("starships were meant to fly", 128, 50)
cursys = 9
let maxsys = 9
Systems = [
"Proxima Centauri#",
"4.2465",
"Wolf 359#",
"7.856",
"Lalande 21185",
"8.304",
"Epsilon Eridani",
"10.489",
"Lacaille 9352#",
"10.724",
"Ross 128",
"11.007",
"Struve 2398 B#",
"11.491",
"Groombridge 34 A#",
"11.619",
"Epsilon Indi A",
"11.867",
"Tau Ceti#",
"11.912"
]
ships = [
"The Enterprise",
"The Millenium Falcon",
"Solar Sail Rembrandt",
"USS Voyager",
"The Defiant"
]
travel = [
"travels to",
"returns from",
"escapes from",
"mysteriously arrives at"
]
purpose = [
"with supplies",
"carrying passengers",
"with ancient artifacts",
"escaping a battle",
"pursuing an enemy"
]
basic.forever(function () {
	
})
