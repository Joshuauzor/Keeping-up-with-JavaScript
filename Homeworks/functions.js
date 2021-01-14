
let men = ['Alexander', 'Aristotle', 'Pythagoras', 'Socrates', 'Joshua'];

 function isMortal(men, name){
    let isValidString = typeof(name) == 'string'
    
    if(isValidString){
        return men.includes(name) ? "mortal" : "immortal"
    }
    return "Your argument must be of type String";
}

console.log(isMortal(men, 'Joshua'));


// Extra credit
let cake = ['vanilla','chocolate', 'strawberry','lollipop','banana'];

let checkCake = function(cake, flavor){
    if(cake.includes(flavor)){
        return flavor == 'chocolate' ? true : 'The flavour of the cake is '+ flavor
    }
    return "The Argument is not a valid cake flavor"
}
console.log(checkCake(cake, 'chocolate'));