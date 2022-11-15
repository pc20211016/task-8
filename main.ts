let directions = 0
input.onButtonPressed(Button.A, function () {
    directions = input.compassHeading()
    if (directions == 90) {
        basic.showString("E")
        music.playMelody("C5 B C5 A B G F G ", 300)
    } else if (directions == 180) {
        basic.showString("S")
        music.playMelody("C5 C E D F A G B ", 300)
    } else if (directions == 270) {
        basic.showString("W")
        music.playMelody("C5 A D E F G F B ", 300)
    } else {
        basic.showString("N")
        music.playMelody("C5 C D E G F A B ", 300)
    }
})
basic.forever(function () {
	
})
