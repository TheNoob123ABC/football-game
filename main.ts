namespace SpriteKind {
    export const dead = SpriteKind.create()
    export const football = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.football, function (sprite, otherSprite) {
    ball.setVelocity(randint(50, 100), 100)
    teamhd.setVelocity(50, 0)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.football, function (sprite, otherSprite) {
    enemy_football_1.setVelocity(randint(50, 100), 100)
    scene.cameraShake(4, 500)
    music.powerUp.play()
})
let enemy_football_1: Sprite = null
let ball: Sprite = null
let teamhd: Sprite = null
storyboard.loaderBootSequence.register()
storyboard.start("")
info.setScore(0)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777771777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777177777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777771777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777177777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777717777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777771777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777177777777777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777717777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777771777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777117777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777771117777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777771177777777777777777111777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777711111177777777111777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777711111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777711111111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777711177771111777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777711177777777777111177777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777711177777777777777777711177777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777771177777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777117777777777777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777771777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777117777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777771777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777717777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777177777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777771771111111111111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777177777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777177777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777717777777777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777717777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777771177777777777777777777777777777117777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777717777777777777777777777777711777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777771777777777777777777777711177777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777117777777777777777771177777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777771177777777777771117777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777711177777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777711111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777711111111111177777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777111177777777777711111777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777711777777777777777777777111777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777771177777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777717777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777177777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777771777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777177777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777771777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777177777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777771777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777
    `)
let dead_zone = sprites.create(img`
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ......................................................................111111........................
    ...................................................................1111.............................
    1111111111111111111111111111111111111111111111111111111111111111111.................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    `, SpriteKind.dead)
teamhd = sprites.create(img`
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ...8.......8..................................ff88fffffffff88.......................................
    .ff88fffff88ff................................fff888ffffff88f.......................................
    .ff2f8fff8f2ff................................fffff888fff8ffff......................................
    .fffff8f8fffff................................fffffff8f88fffff......................................
    .ffffff8ffffff................................fff2fff8f8ffff2f......................................
    .ff88888888fff................................fffffff888ffffff......................................
    .ff8ffffff88ff................................fffff888888fffff......................................
    .ffffffffff8ff................................ffff88ffff888fff......................................
    ......f..ffff.................................ffff8fffffff8fff......................................
    ......f....f...................................fffffffffff8ff.......................................
    ......f........................................fffffffffff8ff.......................................
    ......f........................................fffffffffff8ff.......................................
    fffff.fffffffff..................................ffffffffffff.......................................
    f....f.....ffff.........................................fffff.......................................
    ff...f..fff.........................................f...............................................
    .ff.ffff............................................f...............................................
    ..ff.f..............................................f...............................................
    ...ff...............................................f...............................................
    ....ff............................................fff...............................................
    ....fff......................................fffff..ffffffff........................................
    ....ff.......................................ff.....f.......ffff....................................
    ....ff.........................................ff...f.......ffff....................................
    ..ff..f..........................................fffffffffff........................................
    .ff....f...........................................fff..............................................
    ff......f.........................................ffff..............................................
    f.......fff......................................f...ff.............................................
    `, SpriteKind.Player)
teamhd.setPosition(74, 37)
teamhd.setVelocity(50, 0)
teamhd.setFlag(SpriteFlag.BounceOnWall, true)
ball = sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.football)
ball.setFlag(SpriteFlag.BounceOnWall, true)
enemy_football_1 = sprites.create(img`
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . c c 
    . . . c 4 d 4 4 4 4 4 1 c c 4 c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
    . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
    f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
    . f 4 4 4 4 1 c c 4 4 d f f . . 
    . . f f 4 d 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
enemy_football_1.setPosition(82, 12)
enemy_football_1.setFlag(SpriteFlag.BounceOnWall, true)
let team = sprites.create(img`
    ....................................................................................................
    ....................................................................................................
    .....ffffffffffffffff...............................................................................
    .....ffffffffffffffff.................ffffffffffffffffffff..........................................
    .....ffffffffffffffff.................ffffffffffffffffffff..........................................
    .....f222ffffffff222f.................ffffffffffffffffffff..........................................
    .....fff22fffff222fff.................ff2222fffffff22222ff..........................................
    .....ff8822fff22288ff.................fff8f22fffff22ffffff..........................................
    .....ff88ff222fff88ff.................fff8882ffff288ffffff..........................................
    .....fffffff2ffff88ff.................fff888f22222888fffff..........................................
    .....fffffff2ffffffff.................fffffffff2ff888fffff..........................................
    .....fffffff2ffffffff.................fffffffff2ffffffffff..........................................
    .....fff22222222fffff.................fffff22ff2ffffffffff..........................................
    .....ff2ffffffff2ffff.................fffff2f222222fffffff..........................................
    .....ff2ffffffff2ffff.................fffff2fffffff22fffff..........................................
    .....ffffffffffffffff.................fffff2ffffffff2fffff..........................................
    .....ffffffffffffffff.................ffffffffffffff2fffff..........................................
    ......................................ffffffffffffff2fffff..........................................
    ...ff.......ff......................................................................................
    .....fff....f..................................f....................................................
    ........fffff.....................fffff........f.........fffffff....................................
    ...........f..ffffffffffffff...........ffffffff...fffffff...........................................
    ...........f..................................f.ff..................................................
    ...........f..................................f.....................................................
    ..........fff.........................ffffffffff....................................................
    .....ffffff..ff.....................ff..........f...................................................
    ...............ff................................f..................................................
    ................ff................................f.................................................
    ..................ff...............................ff...............................................
    ....................................................ff..............................................
    `, SpriteKind.Player)
team.setPosition(74, 85)
let football_2 = sprites.create(img`
    . . . . . . . . c c c c c . . . 
    . . . . . . c c 5 5 5 5 5 c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 b b 5 c 
    . . c c d 1 c 1 b 1 b 1 5 5 5 c 
    . c c d d 1 1 1 1 1 b 1 b b 5 c 
    f d d d 1 1 1 1 1 b b 1 f . c c 
    f f f 1 1 1 1 1 1 b b b f . . . 
    . . . f f 1 1 1 b b b 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
football_2.setPosition(82, 105)
controller.moveSprite(football_2, 100, 0)
football_2.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
})
