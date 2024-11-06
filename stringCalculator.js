// method to add strings

function add(numbers){

    //if input is empty string then return 0
    if(numbers === ""){
        return 0;
    }

    //split inputs by commas, then convert string into number using map(Number)
    const numberArray= numbers.split(',').map(Number);


    //return sum of the array.
    return numberArray.reduce((sum, num)=>sum+num,0);
}

module.exports = add;