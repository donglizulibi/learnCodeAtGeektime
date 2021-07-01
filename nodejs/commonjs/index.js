var playerAction = process.argv[process.argv.length - 1]
    // console.log(playerAction)
    // 

const game = require('./lib');
// game(playerAction)

// const result = game(playerAction)
// console.log(result)

let count = 0;
// 使进程持续进行 把输入的操作打印出来 
// 此时用户的输入分两步，第一步 运行 node index.js  不用加输入
// 第二步再输入需要输入的内容，并且可以一直输入
process.stdin.on('data', e => { //事件监听
    const playerAction = e.toString().trim(); //
    // console.log(playerAction)

    const result = game(playerAction)
    console.log(result)

    if (result === -1) {
        count++
    }
    console.log('count = ', count)
    if (count === 3) {
        console.log('你太厉害了,我不玩了')
        process.exit()
    }

})