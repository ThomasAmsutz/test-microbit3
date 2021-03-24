basic.forever(function () {
    if (150 < input.soundLevel()) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.Shake)) {
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
