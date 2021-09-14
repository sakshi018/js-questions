/**
 * Your are given a 2-D array of characters. There is a hidden message in it.

I B C A L K A
D R F C A E A
G H O E L A D 
The way to collect the message is as follows

start at top left
move diagonally down right
when cannot move any more, try to switch to diagonally up right
when cannot move any more, try switch to diagonally down right, repeat 3
stop when cannot neither move down right or up right. the character on the path is the message
for the input above, IROCLED should be returned.

notes

if no characters could be collected, return empty string
 */

function decode(message) {
    if (message.length === 0) return ''
    if (message[0].lenght === 0) return ''
    
    const rows = message.length
    const cols = message[0].length
    
    let result = ''
    let row = 0
    let col = 0
    let directionY = 1
    
    while (col < cols && row > -1 && row < rows) {
      result += message[row][col]
      col += 1
      
      row += directionY
      
      if (row > rows - 1) {
        directionY = -1
        row -= 2
      } else if (row < 0) {
        directionY = 1
        row += 2
      }
    }
    
    return result
  }