let out = 0
let myimg: Image = null
let clap_count=0
let c_numofclaps=2
let lasttimestamp = input.runningTime()
/**
 * global variables
 */
input.onSound(DetectedSound.Loud, mysoundtrigged)

function mysoundtrigged() {
    if lasttilasttimestamp < 
    input.onSound(DetectedSound.Loud, function () { })

    input.onSound(DetectedSound.Loud, mysoundtrigged)
}

function der_der_der_ () {
    basic.clearScreen()
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Indigo))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    out = randint(1, 12)
    if (out == 1) {
        myimg = images.createImage(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (out == 2) {
        myimg = images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (out == 3) {
        myimg = images.createImage(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (out == 4) {
        myimg = images.createImage(`
            . . # # .
            . # . # .
            # # # # #
            . . . # .
            . . . # .
            `)
    } else if (out == 5) {
        myimg = images.createImage(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (out == 6) {
        myimg = images.createImage(`
            . # # # #
            . # . . .
            . # # # #
            . # . . #
            . # # # #
            `)
    } else if (out == 7) {
        myimg = images.createImage(`
            . # # # #
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            `)
    } else if (out == 8) {
        myimg = images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (out == 9) {
        myimg = images.createImage(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (out == 10) {
        myimg = images.createImage(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (out == 11) {
        myimg = images.createImage(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (out == 12) {
        myimg = images.createImage(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    myimg.showImage(0)
    basic.clearScreen()
    basic.pause(200)
    myimg.showImage(0)
    music.playTone(1000, music.beat(BeatFraction.Eighth))
}

basic.forever(function () {
	
})
