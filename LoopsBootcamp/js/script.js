console.log('loopa 1000 ggr:')

for (let i = 1; i <= 1000; i++){
    console.log(i)
}

console.log(' ')

//___________________________________________________________________


console.log('räkna ner från 100:')

for (let i = 100; i >= 0; i--){
    console.log(i)
}

console.log(' ')

//___________________________________________________________________


console.log('loopa ut frukt:')

function loopFruit(){
    
    let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple']
    
    for (let i = 0; i < fruits.length; i++){

        console.log(fruits[i])
    }
}

loopFruit()

console.log(' ')

//___________________________________________________________________


console.log('loopa ut frukt med index:')

function loopFruitWithIndex(){

    let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple']
    
    for (let i = 0; i < fruits.length; i++){

        console.log(i + '. ' + fruits[i])
    }
}

loopFruitWithIndex()

console.log(' ')

//___________________________________________________________________


console.log('"for of" loop:')

function loopToolsWithForOf(){

    let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

    for (const element of things) {
        console.log(element)
    }
}

loopToolsWithForOf()

console.log(' ')

//___________________________________________________________________


console.log('"for each" loop:')

function loopToolsWithForEach(){

    let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

    things.forEach(element => {
        console.log(element)
    })
}

loopToolsWithForEach()

console.log(' ')

//___________________________________________________________________


console.log('while loop 1000 varv:')

function whileLoop1000Iterations(){

    let i = 1;

    while(i <= 1000){
        console.log(i)
        i++
    }
}

whileLoop1000Iterations()

console.log(' ')

//___________________________________________________________________


console.log('Skapa kortlek:')

function createDeckOfCards(){

    let cardsPerSuite = 14
    let suite = ['hjärter', 'klöver', 'ruter', 'spader']

    for (let i = 0; i < suite.length; i++){

        for (let j = 1; j <= cardsPerSuite;  j++){
            console.log(suite[i] + ' ' + j)
        }
    }
}

createDeckOfCards()

console.log(' ')

//___________________________________________________________________


console.log('loopa ut vänners frukt:')

function loopFriendsFruit(){
    
    let friends = [
        {
            name: 'Sixten',
            likes: [
                'bananas',
                'strawberries',
                'blueberries'
            ]
        },
        {
            name: 'Khalid',
            likes: [
                'papaya',
                'pear',
                'pineapple'
            ]
        },
        {
            name: 'Lisa',
            likes: [
                'raspberries',
                'watermelon',
                'apple'
            ]
        }
    ]
    
    for (let i = 0; i < friends.length; i++){
        
        for (let j = 0; j < friends[i].likes.length; j++){
            
            console.log(friends[i].likes[j])
        }
    }
    
}

loopFriendsFruit()

console.log(' ')

//___________________________________________________________________


console.log('brute force password:')

function bruteForce(){

    const randomNumber = Math.floor(Math.random()*(passwords.length - 1))

    const topsecret = passwords[randomNumber]

    let matching = '';

    for (let i = 0; i < passwords.length; i++){

        if(passwords[i] == topsecret){
            matching = passwords[i]
        }
    }

    console.log('Aha! I found you, ' + matching)

    console.log(topsecret)
}

bruteForce()