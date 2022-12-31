const combine = (first: number | string, second: number | string) => {
    let result;
    if(typeof first === 'number' && typeof second === 'number') result = first + second;
    else result = first.toString() + second.toString();
    return result
}
console.log(combine(4, 5));
console.log(combine('4', '5'));
//adding type conversion

const combineOne = (first: number | string, second: number | string, resultType: string) => {
    let result;
    if(typeof first === 'number' && typeof second === 'number') result = first + second;
    else result = first.toString() + second.toString();
    if(resultType === 'text'){
        return result.toString()
    }
    else return +result;
}
console.log(combineOne(4, 5, 'text'));
console.log(combineOne('4', '5', 'number'));
