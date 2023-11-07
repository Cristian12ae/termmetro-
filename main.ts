basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.No)
        basic.showNumber(input.temperature())
    }
    while (input.temperature() < 27) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Yes)
        basic.showNumber(input.temperature())
    }
})
