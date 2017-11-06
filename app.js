var board = [[0,1,2],[3,4,5],[6,7,8]]
var turn = true
const printBoard = (board) => {
  for ( let i = 0; i < board.length; i++){
    var print = ''
    for ( let j = 0; j < board[i].length; j++){
      if (board[i][j] < 9) print=print.concat(' |')
      else {
        if(board[i][j]===10)print = print.concat(`X|`)
        if(board[i][j]===100)print = print.concat(`O|`)
      }
    }
    console.log(print.slice(0,5))
    if(i !== 2) console.log('______')
  }
}
console.log('Welcome to 1 hour time limit tic tac toe!')
console.log('to place your piece somewhere, simply enter in "place(x)", ')
console.log('where x is the number position on the board. here are the positions: ')
console.log(board[0])
console.log(board[1])
console.log(board[2])
console.log('currently your board looks like this: ')
printBoard(board)
console.log('X goes first, have fun!')
const place = (x) => {
  var i = Math.floor(x / 3)
  var j = x % 3
  if (turn) board[i][j] = 10
  else board[i][j] = 100
  turn = !turn
  printBoard(board)
  if(!turn) console.log(`Now it's O's turn`)
  else console.log(`Now it's X's turn`)
}

const checkWin = () => {
  
}

place(4)
place(0)