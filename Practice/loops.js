const nameList = ['Joshua', 'Timothy', 'Tori', 'Ryanne'];

let nameLooper = (nameList, name) => {
    let indexOfArr = 0;

    while(indexOfArr <  nameList.length){
        if(nameList[indexOfArr] === name){
            console.log(nameList[indexOfArr]);
            break;
        }

        indexOfArr += 1;
    }
}

// nameLooper(nameList, 'Joshua')

// for loop
const iceCreams = ['vanilla','chocolate','strawberry'];

function iceCreamGetter(arr, type){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === type){
            console.log(arr[i] + " "+"is at position:"+ i);
        }
    }
}

iceCreamGetter(iceCreams, "strawberry");

// labels
outerLoop:
for (let i = 0; i < 10; i++){
    console.log("loop #" + i);
    innerLoop:
    for (let a = 0; a < 10; a++){
        console.log("Inner loop:" + a);
        if(a ===3){
            break outerLoop;
        }
    }
}

// foreach loop
const drinks = ['pepsi', 'coke', '5alive','tem', 'fanta'];

drinks.forEach(function(d){
    console.log(d);
});