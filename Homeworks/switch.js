let typeOfLabels = ['seconds', 'minutes', 'hours', 'days', 'second', 'minutes', 'hour', 'day'];

    // check if value is accepted as a positive integer
    let checkValue = (value) => {
        return !isNaN(value) && value >= 0 ?  true : false;
    }

    // checkIfLabel is correct in array
    let checkListLabel = (label) => {
        return typeOfLabels.includes(label) ? true : false;
    }

    // If the inputs are invalid or impossible, it should return false.
    let isLabelValidToValue = (value, label) => {
        switch(label){
            case 'second':
            case 'minute':
            case 'hour':
            case 'day':
                return (value === 1) ? true : false;
            case 'seconds':
            case 'minutes':
            case 'hours':
            case 'days':
                return (value === 1) ? false : true;
            default:
                console.log('Invalid Label, Please check again');
                return false;
        }
    }



    // define variables here
    const minuteSeconds = 60;
    const hourSeconds = minuteSeconds * 60;
    const daySeconds = hourSeconds * 24;

    //convert all values to seconds
    const convertTosec = (value, label) => {
        switch(label){
            case 'second':
            case 'seconds':
                return value
            case 'minute':
            case 'minutes':
                return value * minuteSeconds;
            case 'hour':
            case 'hours':
                return value * hourSeconds;
            case 'day':
            case 'days':
                return value * daySeconds;
            default:
                console.log('cannot identify string');
                return false;
        }
    }

    // conevert total seconds to good format
    const convertToLargerTime = (seconds) => {
        if (seconds % daySeconds === 0) {
          const days = seconds / daySeconds;
          return (days === 1) ? [days, 'day'] : [days, 'days'];
        } else if (seconds % hourSeconds === 0) {
          const hours = seconds / hourSeconds;
          return (hours === 1) ? [hours, 'hour'] : [hours, 'hours'];
        } else if (seconds % minuteSeconds === 0) {
          const minutes = seconds / minuteSeconds;
          return (minutes === 1) ? [minutes, 'minute'] : [minutes, 'minutes'];
        } else {
          return (seconds === 1) ? [seconds, 'second'] : [seconds, 'seconds'];
        }
    }

    // Need to check

    // bring all in a function
    timeAdder = (value1, label1, value2, label2) => {
        // check first value
        if(!checkValue(value1)){
            return false;
        }

        // check second value
        if(!checkValue(value2)){
            return false;
        }

        // check if label1 is in array
        if(!checkListLabel(label1)){
            return false;
        }

        // check if label2 is in array
        if(!checkListLabel(label2)){
            return false;
        }

        // check if correct label is used to value
        if(!isLabelValidToValue(value1, label1)){
            return false;
        }

        // check if correct label is used to value
        if(!isLabelValidToValue(value2, label2)){
            return false;
        }

        const firstLabelandValueToSec = convertTosec(value1, label1);
        const secondLabelandValueToSec = convertTosec(value2, label2);

        let totalSeconds = firstLabelandValueToSec +  secondLabelandValueToSec;

        return convertToLargerTime(totalSeconds);
    }

console.log(timeAdder(1, 'second', 1, 'second'));