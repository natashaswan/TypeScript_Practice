const combineTwo = (first: number,  second: number): number => {
    let result;
    if(typeof first === 'number' && typeof second === 'number') result = first + second;
    else result = first + second;
    return result
}

//void type

const getNum = (num1: number, num2: number): number => {
    return num1 + num2
}

const printSum = (sum : number) : void =>{
    console.log(sum)
}

printSum(getNum(7, 8))
console.log('TEST')

//type function
let varFunc: Function;

//more specs
let varSpecFunc: (a:number, b:number)=>number;

//
const combineAndHandle = (first: number,  second: number, handler: (num: number)=>{}) => {
    let result = first + second;
    handler(result)
}
console.log(combineAndHandle(3, 4, (result)=>{return result}))
