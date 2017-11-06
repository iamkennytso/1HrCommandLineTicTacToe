var board = [[1,2,3],[4,5,6],[7,8,9]]
var board2 = [[1,'x',3],[4,'o',6],[7,8,9]]

const printBoard = (board) => {
  for ( let i = 0; i < board.length; i++){
    var print = ''
    for ( let j = 0; j < board[i].length; j++){
      if (typeof(board[i][j]) === 'number') print=print.concat(' |')
      else print = print.concat(`${board[i][j]}|`)
    }
    console.log(print.slice(0,5))
    if(i !== 2) console.log('______')
  }
}
console.log('Welcome to 1 hour time limit tic tac toe!')
console.log('left arrow means it is X turn')
console.log('right arrow means it is O turn')
console.log('to place your piece somewhere, simply enter in "place(x)", ')
console.log('where x is the position on the board. here are the positions: ')
console.log(board[0])
console.log(board[1])
console.log(board[2])
console.log('currently your board looks like this: ')
printBoard(board)
console.log('Have fun!')
