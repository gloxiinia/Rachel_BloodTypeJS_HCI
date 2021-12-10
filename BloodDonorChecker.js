// creating the function
const CanGiveBlood = (donor, receiver) => {
    //declaring constants for either yes or no for donor eligibility
    const no = 'Not eligible for donation';
    const yes = 'Eligible for donation';

    //creating the switch for each possible blood donor
    switch(donor){
        case 'A+':
            if (receiver != 'A+' || receiver !='AB+') {
                return no;
            }
        case 'B+':
            if (receiver != 'B+' || receiver !='AB+') {
                return no;
            }
        case 'AB+':
            if (receiver != 'AB+') {
                return no;
            }
        case 'O+':
            if (receiver != 'A+'|| receiver != 'B+'|| receiver != 'AB+' || receiver !='O+'){
                return yes;
            }
        case 'A-':
            if (receiver != 'A+'|| receiver != 'A-'|| receiver != 'AB+' || receiver !='AB-'){
                return no;
            }
        case 'B-':
            if (receiver != 'B+'|| receiver != 'B-'|| receiver != 'AB+' || receiver !='AB-'){
                return no;
            }
        case 'AB-':            
            if (receiver != 'AB+' || receiver !='AB-') {
                return no;
            }
        case 'O-':
            return yes;
        
        //default case for when the blood type is misspelled or typed wrong
        default:
            return 'Please ensure that the blood types are entered correctly.';
                       
    }
}

//Driver to test/run the code
console.log (CanGiveBlood('O+', 'A+'));
console.log (CanGiveBlood('A-', 'B-'));
console.log (CanGiveBlood('A-', 'AB+'));
console.log(CanGiveBlood('C+', 'C++'));
