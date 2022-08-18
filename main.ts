let cflag=0
function mysoundtrigged () {
    cflag = 1
    input.onSound(DetectedSound.Loud, function () { })
    if (lasttimestamp <= input.runningTime() + 1000) {
        clap_count += 1
    } else {
        clap_count = 3
    }
    input.onSound(DetectedSound.Loud, mysoundtrigged)
    cflag = 0
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
function dothing () {
    input.onSound(DetectedSound.Loud, function () { })
der_der_der_()
    input.onSound(DetectedSound.Loud, mysoundtrigged)
}
let myimg: Image = null
let out = 0
let clap_count = 0
let lasttimestamp = 0
input.setSoundThreshold(SoundThreshold.Loud, 154)
let c_numofclaps = 2
let c_defineclapcounttime = 1000
lasttimestamp = input.runningTime()
input.onSound(DetectedSound.Loud, mysoundtrigged)
basic.forever(function () {
    if (cflag == 1)
        return
    if (input.runningTime() > lasttimestamp + 2000) 
    {
        // ready to check
        if (clap_count == 2) {
            dothing()
        }
        lasttimestamp = input.runningTime()
        clap_count = 0
    }
})
