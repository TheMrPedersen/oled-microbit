OLED12864_I2C.init(60)
basic.forever(function () {
    OLED12864_I2C.showString(
    2,
    1,
    "4PIP",
    10
    )
    basic.pause(100)
    OLED12864_I2C.rect(
    1,
    0,
    60,
    30,
    100
    )
})
