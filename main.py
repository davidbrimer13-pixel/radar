seek = 0
seeking = 0

def on_button_pressed_a():
    global seek
    seek = 0
    input.calibrate_compass()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global seek
    seek = 1
    basic.pause(1000)
    wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 230)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global seeking, seek
    if input.compass_heading() < 80 or input.compass_heading() > 90:
        seeking = 1
    else:
        seeking = 0
    if seek:
        if seeking:
            basic.show_icon(IconNames.NO)
        else:
            basic.show_leds("""
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                """)
            wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
            seek = 0
    basic.pause(100)
basic.forever(on_forever)
