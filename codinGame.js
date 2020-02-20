/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
let X0 = parseInt(inputs[0]);
let Y0 = parseInt(inputs[1]);

// game loop
while (true) {
    const bombDir = readline();
    let x;
    let y;
    // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or ULconsole.log(W,H,N,X0,Y0
    // Write an action using console.log()
    if(bombDir=="DR"){
             X0 = X0 + 1;
             Y0 = Y0 + 1;
    }
    else if(bombDir=="D"){
        Y0 = Y0+1;
    }
    else if(bombDir==="UR"){
            Y0=Y0-1;
             X0=X0+1;
    }
    else if(bombDir==="DR"){
             y=Y0+1;
             x=X0+1;
    }
    else if(bombDir==="DL"){
             Y0=Y0+1;
             X0=X0-1;
    }
    else if(bombDir==="U"){
             Y0=Y0-1;
    }
    else if(bombDir==="R"){
             X0=X0+1;
    }
    else{
            X0=X0-1;
    }
    // To debug: console.error('Debug messages...');
    

    // the location of the next window Batman should jump to.
    console.log(`${X0} ${Y0}`);
}
