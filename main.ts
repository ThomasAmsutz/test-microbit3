basic.forever(function () {
    if (150 < input.soundLevel()) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
