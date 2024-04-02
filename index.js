function writeCards(listName, event) {
    let newArr = [];
    for(let i = 0; i < listName.length; i++) {
        newArr.push(`Thank you, ${listName[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown(num) {
    while(num >= 0) {
        console.log(num);
        num--;
    }
}
