
//function that takes a two 
//start at [0,0]
//make it to [len, wid]
//0 === wall

//remember where we've looked

var maze = [
    [1,0,1,0,0],
    [1,1,1,1,0],
    [1,0,0,1,1],
    [1,1,1,0,1],
    [1,0,0,0,1],
]

const SEEN = 5;
const UNSEEN = 4;
var key = [
[UNSEEN,UNSEEN,UNSEEN,UNSEEN,UNSEEN],
[UNSEEN,UNSEEN,UNSEEN,UNSEEN,UNSEEN],
[UNSEEN,UNSEEN,UNSEEN,UNSEEN,UNSEEN],
[UNSEEN,UNSEEN,UNSEEN,UNSEEN,UNSEEN],
[UNSEEN,UNSEEN,UNSEEN,UNSEEN,UNSEEN],
]

function solve(maze){
var path = []

return path;
}

function traverse(map, maze, x, y){
//if wall/seen/undefined return
if(x < 0 || x > maze.length || y < 0 || y > maze[y].length || key[x][y] === SEEN ){
return
}
//if we win return!
if(x === maze.length && y === maze[y].length){
map.push({"x": x, "y" : y})
return 
}
//look up, right, down, left
key[y][x] = SEEN

//look up
traverse(map, maze, x-1, y)
//look down
traverse(map, maze, x+1, y)
//look left
traverse(map, maze, x, y-1)
//look right
traverse(map, maze, x, y+1)

}