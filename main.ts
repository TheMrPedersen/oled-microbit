input.onButtonPressed(Button.A, function () {
    // Draw the airplane image
    // Set pixels to 1 to create the image
    // Wings
    OLED12864_I2C.pixel(1, 4, 1)
    OLED12864_I2C.pixel(2, 4, 1)
    OLED12864_I2C.pixel(3, 4, 1)
    OLED12864_I2C.pixel(0, 5, 1)
    OLED12864_I2C.pixel(1, 5, 1)
    OLED12864_I2C.pixel(2, 5, 1)
    OLED12864_I2C.pixel(3, 5, 1)
    OLED12864_I2C.pixel(4, 5, 1)
    OLED12864_I2C.pixel(1, 6, 1)
    OLED12864_I2C.pixel(2, 6, 1)
    OLED12864_I2C.pixel(3, 6, 1)
    // Fuselage
    for (let y = 0; y <= 6; y++) {
        OLED12864_I2C.pixel(6, y, 1)
        OLED12864_I2C.pixel(7, y, 1)
        OLED12864_I2C.pixel(8, y, 1)
    }
})
OLED12864_I2C.init(60)
basic.forever(function () {
	
})
