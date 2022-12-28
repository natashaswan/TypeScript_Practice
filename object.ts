const testObj: {name: string; age: string; hobbies: string[]; info: any[], role: [string, number]; password: (string | number)} = {
    name: 'Anna',
    age: '14',
    hobbies: ['reading', 'cooking'],
    info: ['kind girl', 14, ['school', 'cars']],
    role: ['actress', 2],
    password: '234',
}
console.log(testObj.hobbies)

let someVar: string;

//someVar = 5; error

//access method of specific type in IDE when type is assigned
for (let hobby of testObj.hobbies){
    console.log(hobby)
}

//Tuples - fixed length Array;

