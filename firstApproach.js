let a = [1,2,3,4,5,6,7,8,9];
let turns = 0;
let b;


getInput();



function checkX() {
    console.log('checkX got called');
    if ((a[0] === 'x' && a[1] === 'x' && a[2] === 'x') || (a[2] === 'x' && a[1] === 'x' && a[0] === 'x')) {
        alert('X wins');
    } else if ((a[3] === 'x' && a[4] === 'x' && a[5] === 'x') || a[5] === 'x' && a[4] === 'x' && a[3] === 'x') {
        alert('X wins');
    } else if ((a[6] === 'x' && a[7] === 'x' && a[8] === 'x') || a[8] === 'x' && a[7] === 'x' && a[6] === 'x') {
        alert('X wins');
    } else if((a[0] === 'x' && a[3]=== 'x' && a[6] === 'x') || (a[6] === 'x' && a[3]=== 'x' && a[0] === 'x')) {
        alert('X wins');
    } else if ((a[1] === 'x' && a[4]=== 'x' && a[7] === 'x') || (a[7] === 'x' && a[4]=== 'x' && a[1] === 'x')) {
        alert('X wins');
    } else if ((a[2] === 'x' && a[5]=== 'x' && a[8] === 'x') || (a[8] === 'x' && a[5]=== 'x' && a[2] === 'x')) {
        alert('X wins');
    } else if ((a[0] === 'x' && a[4]=== 'x' && a[8] === 'x') || (a[8] === 'x' && a[4]=== 'x' && a[0] === 'x')) {
        alert('X wins');
    } else if((a[2] === 'x' && a[4]=== 'x' && a[6] === 'x') || a[6] === 'x' && a[4]=== 'x' && a[2] === 'x') {
        alert('X wins');
    } else {
        getInput();
    }
}


function checkY() {
    console.log('checkY got called');
    if ((a[0] === 'o' && a[1] === 'o' && a[2] === 'o') || (a[2] === 'o' && a[1] === 'o' && a[0] === 'o')) {
        alert('o wins');
    } else if ((a[3] === 'o' && a[4] === 'o' && a[5] === 'o') || a[5] === 'o' && a[4] === 'o' && a[3] === 'o') {
        alert('o wins');
    } else if ((a[6] === 'o' && a[7] === 'o' && a[8] === 'o') || a[8] === 'o' && a[7] === 'o' && a[6] === 'o') {
        alert('o wins');
    } else if((a[0] === 'o' && a[3]=== 'o' && a[6] === 'o') || (a[6] === 'o' && a[3]=== 'o' && a[0] === 'o')) {
        alert('o wins');
    } else if ((a[1] === 'o' && a[4]=== 'o' && a[7] === 'o') || (a[7] === 'o' && a[4]=== 'o' && a[1] === 'o')) {
        alert('o wins');
    } else if ((a[2] === 'o' && a[5]=== 'o' && a[8] === 'o') || (a[8] === 'o' && a[5]=== 'o' && a[2] === 'o')) {
        alert('o wins');
    } else if ((a[0] === 'o' && a[4]=== 'o' && a[8] === 'o') || (a[8] === 'o' && a[4]=== 'o' && a[0] === 'o')) {
        alert('o wins');
    } else if((a[2] === 'o' && a[4]=== 'o' && a[6] === 'o') || a[6] === 'o' && a[4]=== 'o' && a[2] === 'o') {
        alert('o wins');
    } else {
        getInput();
    }
}

function getInput() {
    b =  parseInt(prompt("Enter number between 1 and 9"));
    if (b <= 0 || b > 9) {
        alert('Enter Number between 1 and 9');
        turns = 0;
    }
    
    if(turns === 0) {
        a[b-1] = 'x';
        turns++;
    } else if (turns === 1) {
        a[b-1] = 'o';
        turns++;
    } else if (turns === 2) {
        a[b-1] = 'x';
        turns++;
    } else if (turns === 3) {
        a[b-1] = 'o';
        turns++;
    } else if (turns === 4) {
        a[b-1] = 'x';
        turns++;
    } else if (turns === 5) {
        a[b-1] = 'o';
        turns++;
    } else if (turns === 6) {
        a[b-1] = 'x';
        turns++;
    } else if (turns === 7) {
        a[b-1] = '0';
        turns++;
    } else if (turns === 8) {
        a[b-1] = 'x';
        turns++;
    }
    if (turns > 3) {
        if(turns === 4 || turns === 6 || turns === 8) {
            checkX();
        } else if(turns === 3 ||turns === 5 || turns === 7) {
            checkY();
        }
    } else {
        getInput();
    }
}