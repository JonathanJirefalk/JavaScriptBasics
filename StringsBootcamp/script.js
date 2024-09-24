console.log('repeatFunction:')

function repeat(text, repititions){
    
    return text.repeat(repititions)
}

console.log(repeat('hej', 3))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('containsCharFunction:')

function containsChar(str, char){

    return str.includes(char)
    
}

console.log(containsChar('hello world', 'o'))
console.log(containsChar('hello world', 'f'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('indexOfCharFunction:')

function indexOfChar(str, char){

    return str.indexOf(char)
}

console.log(indexOfChar('hello world', 'o'))
console.log(indexOfChar('hello world', 'w'))
console.log(indexOfChar('hello world', 'f'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('startsWithFunction:')

function startsWith(str, char){

    return str.indexOf(char) == 0
}

console.log(startsWith('hello world', 'h'))
console.log(startsWith('hello world', 'e'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('endsWithFunction:')

function endsWith(str, char){

    return str.indexOf(char) == str.length - 1
}

console.log(endsWith('hello world', 'd'))
console.log(endsWith('hello world', 'a'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('reverseFunction:')

function reverse(str){

    let stringToReturn =  ''

    for(let i = str.length - 1; i >= 0; i--){

        stringToReturn += str.charAt(i)
    }
    return stringToReturn
}

console.log(reverse('hello'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('removeCharFunction:')

function removeChar(str, char){
    let stringToReturn = ''

    for(let i = 0; i < str.length; i++){

        if(str.charAt(i) !=  char){

            stringToReturn += str.charAt(i)
        }
    }
    return stringToReturn
}

console.log(removeChar('hello world', 'l'))
console.log(removeChar('hello world', 'f'))
console.log(removeChar('hello world', ' '))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('replaceCharFunction:')

function replaceChar(str, char, replacement){

    let stringToReturn = ''

    for(let i = 0; i < str.length; i++){

        if(str.charAt(i) ==  char){

            stringToReturn += replacement
        }
        else{

            stringToReturn += str.charAt(i)
        }
    }
    return stringToReturn
}

console.log(replaceChar('hello world', 'o', 'y'))
console.log(replaceChar('hello world', ' ', '-'))
console.log(replaceChar('hello world', 'f', 'g'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('substringFunction:')

function substring(str, start, stop){

    let stringToReturn = ''

    for(let i = start; i <= stop; i++){

        stringToReturn += str.charAt(i)
    }
    return stringToReturn
}

console.log(substring('hello world', 1, 4))
console.log(substring('hello world', 0, 3))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('containsFunction:')

function contains(str, otherStr){

    return str.includes(otherStr)
}

console.log(contains('hello world', 'world'))
console.log(contains('hello world', 'omg'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('removeFunction:')

function remove(str, otherStr){

    return str.replace(otherStr, '')
}

console.log(remove('hello world', 'hello'))
console.log(remove('hello world', 'hlo'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('replaceFunction:')

function replace(str, otherStr, replacement){

    return str.replace(otherStr, replacement)
}

console.log(replace('hello world', 'hello', 'spongebob'))
console.log(replace('hello world', 'hlo', 'spongebob'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('encryptFunction:')

function encrpyt(str){

    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö', 'A', 'E', 'I', 'O', 'U', 'Y', 'Å', 'Ä', 'Ö']

    let stringToReturn = ''

    let isVowel = false

    for(let i = 0; i < str.length; i++){

        for(let j = 0; j < vowels.length; j++){

            if(str.charAt(i) == vowels[j]){

                isVowel = true
            }
        }

        if(isVowel || str.charAt(i) == ' '){
            
            stringToReturn += str.charAt(i)
            isVowel = false

        }else{

            stringToReturn += (str.charAt(i) + 'o' + str.charAt(i))
        }
    }

    return stringToReturn
}

console.log(encrpyt('hej på dig'))

console.log(' ')

//___________________________________________________________________________________________________________


console.log('decryptFunction:')

function decrypt(str){

    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö', 'A', 'E', 'I', 'O', 'U', 'Y', 'Å', 'Ä', 'Ö']

    let stringToReturn = ''

    let isVowel = false

    for(let i = 0; i < str.length; i++){

        stringToReturn += str.charAt(i)

        for(let j = 0; j < vowels.length; j++){

            if(str.charAt(i) == vowels[j]){

                isVowel = true
            }
        }

        if(!isVowel && str.charAt(i) != ' '){

            i += 2

        }else{

            isVowel = false
        }
    }

    return stringToReturn
}

console.log(decrypt('hohejoj popå dodigog'))
console.log(encrpyt('skepp åhoj landboj'))
console.log(decrypt(encrpyt('skepp åhoj landboj')))