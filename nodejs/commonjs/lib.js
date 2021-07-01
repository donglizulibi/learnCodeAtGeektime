module.exports = function(playerAction) {
    var ramdom = Math.random() * 3
    if (ramdom > 2) {
        var computerAction = 'rock'
    } else if (ramdom < 1) {
        var computerAction = 'paper'
    } else {
        var computerAction = 'scissor'
    }
    if (playerAction == computerAction) {
        console.log('你出的是：', playerAction, '电脑出的是：', computerAction)
        console.log('平局')
        return 0
    } else if (
        computerAction == 'rock' && playerAction == 'scissor' ||
        computerAction == 'scissor' && playerAction == 'paper' ||
        computerAction == 'paper' && playerAction == 'rock'
    ) {
        console.log('你出的是：', playerAction, '电脑出的是：', computerAction)
        console.log('你输了')
        return 1
    } else {
        console.log('你出的是：', playerAction, '电脑出的是：', computerAction)
        console.log('你赢了')
        return -1
    }
}