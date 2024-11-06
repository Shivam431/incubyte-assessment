// method to add strings

function add(numbers){

    //if input is empty string then return 0
    if(numbers === ""){
        return 0;
    }

    let delimiter = ",";


    let customDelimiter = numbers.match(/^\/\/(.+)\n/);

    // check custom delimiter if we find the match we extract the delimiter and remove it from the input
    if(customDelimiter){
        delimiter = customDelimiter[1];

        //console.log(delimiter);
        numbers = numbers.split("\n")[1];

        //console.log(numbers);
    }
    //split inputs by commas, then convert string into number using map(Number)
    const numberArray= numbers.split(new RegExp(`[${delimiter},]`)).map(Number);

    //handle negative input
    const negativeNumber= numberArray.filter(num => num < 0);

    if(negativeNumber.length > 0){
        throw new Error(`negative numbers not allowed: ${negativeNumber.join(", ")}`);
    }

    //return sum of the array.
    return numberArray.reduce((sum, num)=>sum+num,0);
}

module.exports = add;