console.log('Add 2 arrarys:')

function AddArray(){

    let a = [1,2,3];
    let b = [4,5,6];

    return a.concat(b)
}

console.log(AddArray())

console.log(' ')

//_______________________________________


console.log('Merge arrays at index 3:')


    
function mergeArraysAtIndex(index){

    let a = [1,2,3,7,8,9];
    let b = [4,5,6];

    for (let i = b.length - 1; i >= 0 ; i--){
        a.splice(index, 0, b[i])
    }
    return a
}

console.log(mergeArraysAtIndex(3))

console.log(' ')

//_______________________________________


console.log('test different methods to modify arrays:')

function arrayMethods(){

    let fruits = ['kiwi', 'apple', 'pear'];

    fruits.push('banana')

    console.log(fruits)




    fruits.unshift('orange')

    console.log(fruits)




    fruits.pop()

    console.log(fruits)




    fruits.shift()

    console.log(fruits)




    fruits.splice(1, 0, 'orange')

    console.log(fruits)




    let fruitsToAdd = ['pineapple', 'mango', 'peach']
    
    for (let i = fruitsToAdd.length - 1; i >= 0; i--){

        fruits.splice(2, 0, fruitsToAdd[i])
    }

    console.log(fruits)

    console.log(' ')
}

arrayMethods()        

//_______________________________________


console.log('remove names from array:')

function removeNames(){

    let names = ['David', 'Christoffer', 'Johan', 'Maja']   

    names.splice(1, 2)

    return names
}

console.log(removeNames())

console.log(' ')

//_______________________________________


console.log('reverseArray:')

function reverseArray(){

    let nums = [1,2,3,4,5,6,7,8,9]

    let arrayToReturn = ''

    for (let i = nums.length - 1; i >= 0; i--){

        arrayToReturn += nums[i]
    }

    return arrayToReturn
}

console.log(reverseArray())

console.log(' ')

//_______________________________________


console.log('experiment with string:')

function stringMethods(){

    let str = 'Supercalifragilisticexpialidocious'

    console.log(str.includes('n'))

    console.log(str.includes('x'))

    console.log(str.indexOf('p'))

    let firstSymbols = ''

    let amountOfLetters = 5

    for (let i = 0; i < amountOfLetters; i++){
        firstSymbols += str[i]
    }

    console.log(firstSymbols)

    let lastSymbols = ''

    amountOfLetters = 7


    for (let i = amountOfLetters; i > 0; i--){

        lastSymbols += str.charAt(str.length - i

        )
    }

    console.log(lastSymbols)
}   

stringMethods()

console.log(' ')

//_______________________________________


console.log('filter numbers in array:')

function filterNumbersInArray(){

    let numArray = [23, 45, 5, 62, 1, 21, 3, 54]

    function overFive(value){
        return value > 5
    }

    function underFive(value){
        return value < 5
    }

    let filteredNumbers = numArray.filter(underFive)

    console.log(filteredNumbers)

    filteredNumbers = numArray.filter(overFive)


    console.log(filteredNumbers)
}

filterNumbersInArray()

console.log(' ')

//_______________________________________


console.log('filter objects:')

function filterObjects(){

    let persons = [
        {
            name: "Felicia",
            age: 12
        },
        {
            name: "Pelle",
            age: 20
        },
        {
            name: "Peter",
            age: 59
        },
        {
            name: "Anna",
            age: 32
        },
        {
            name: "Jocke",
            age: 18
        },
        {
            name: "Ella",
            age: 3
        }
    ]
}

filterObjects()