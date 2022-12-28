const testObj: {name: string; age: string; hobby: string[]; info: any[]} = {
    name: 'Anna',
    age: '14',
    hobby: ['reading', 'cooking'],
    info: ['kind girl', 14, ['school', 'cars']],
}
console.log(testObj.hobby)

let someVar: string;

//someVar = 5; error

//accessing method of specific type 