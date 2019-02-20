let a = [1,2,3,4,5,6,7,8,9];
let turns = 0;
let b;


getInput();



function isWin(user) {
    if ((a[0] === user && a[1] === user && a[2] === user) ||
    (a[3] === user && a[4] === user && a[5] === user) ||
    (a[6] === user && a[7] === user && a[8] === user) ||
    (a[0] === user && a[3]=== user && a[6] === user) ||
    (a[1] === user && a[4]=== user && a[7] === user) ||
    (a[2] === user && a[5]=== user && a[8] === user) ||
    (a[0] === user && a[4]=== user && a[8] === user) ||
    (a[2] === user && a[4]=== user && a[6] === user)
    ) {
        alert(`${user} wins`);
    }
}

function getInput() {
    b =  parseInt(prompt("Enter number between 1 and 9"));
    if (b <= 0 || b > 9) {
        alert('Enter Number between 1 and 9');
        turns = 0;
    } else if(a[b-1] === 'x') {
        alert('Player 1 has marked it');
    } else if(a[b-1] === 'o') {
        alert('Player 2 has marked it');
    }

    if (turns < 9) {
      a[b-1] = 'x';
      turn++;
    } else {
      alert('Match is Draw');
    }
    
    if (turns > 3) {
        if(turns === 4 || turns === 6 || turns === 8) {
            isWin('x');
        } else if(turns === 3 ||turns === 5 || turns === 7) {
            isWin('o');
        }
    } else {
        getInput();
    }
}

function display() {
    console.log(a[0] || a[1] || a[2]);
    console.log(a[3] || a[4] || a[5]);
    console.log(a[6] || a[7] || a[8]);
}