basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P1.run(69)
    } else if (input.buttonIsPressed(Button.B)) {
        servos.P1.run(-50)
    } else {
        servos.P1.stop()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(988)
    } else if (input.buttonIsPressed(Button.B)) {
        music.ringTone(131)
    } else {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.West)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showLeds(`
            . . . # .
            . . . # .
            . # # # .
            # # # # .
            . # # . .
            `)
    }
})
