function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2021 - yearOfBirth;
        console.log((retirementAge - age) + a);
        
    }
}

// var retirementNig = retirement(65);
// retirementNig(1999);

// closures
retirement(65)(1999);

function interviewQuestion(job) {
    return function(name){
        switch(job){
            case 'designer':
                console.log(name + ', can you please explain what UX design is?');
            break;
            case 'teacher':
                console.log('What subject do you teach, ' + name + '?');
            break;
            default: 
                console.log('hello ' +name + ', what do you do?')
        }
    }
}

var player = interviewQuestion('teacher');
player('Joshua') 