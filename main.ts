sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.score() < 9) {
        info.changeScoreBy(1)
        info.startCountdown(1.5)
        pizza.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
        music.baDing.play()
    } else {
        game.over(true)
        music.powerUp.play()
    }
})
info.onCountdownEnd(function () {
    music.wawawawaa.play()
    game.over(false)
})
let pizza: Sprite = null
music.setVolume(20)
scene.setBackgroundColor(9)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . . 
. . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . . 
. . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . . 
. . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . . 
. . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . . 
f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . . 
f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . . 
f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . . 
. f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . . 
. . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . . 
. . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . . 
. . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . . 
. . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite2, 200, 200)
pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . 
. . . . . 6 c 6 6 6 6 6 6 9 6 . 
. . . . 6 c c 6 6 6 6 6 6 9 c 6 
. . d 6 9 c c 6 9 9 9 9 9 9 c c 
. d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
. 6 6 6 9 b 8 8 b b b 8 b b 8 6 
. 6 6 6 6 6 8 b b b b 8 b b b 8 
. 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
. 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
. d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
. 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
. 8 8 8 8 f f f 8 8 8 8 f f f f 
. . . 8 f f f f f 8 8 f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
