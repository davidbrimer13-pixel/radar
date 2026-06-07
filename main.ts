let seek = 0
let seeking = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    seek = 0
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    seek = 1
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 230)
})
basic.forever(function on_forever() {
    
    if (input.compassHeading() < 80 || input.compassHeading() > 90) {
        seeking = 1
    } else {
        seeking = 0
    }
    
    if (seek) {
        if (seeking) {
            basic.showIcon(IconNames.Asleep)
            basic.pause(500)
            basic.showIcon(IconNames.Surprised)
            basic.pause(500)
            basic.showIcon(IconNames.Confused)
        } else {
            basic.show_leds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
            seek = 0
        }
        
    }
    
    basic.pause(100)
})
