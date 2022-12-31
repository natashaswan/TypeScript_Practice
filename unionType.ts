const combine = (first: number | string, second: number | string) => {
    let result;
    if(typeof first === 'number' && typeof second === 'number') result = first + second;
    else result = first.toString() + second.toString();
    return result
}
console.log(combine(4, 5));
console.log(combine('4', '5'));

