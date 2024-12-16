const isPalindrome = (string) => {
    for (let i = 0; i < string.length; i++){
        if (string[i] !== string[string.length -1 -i]) return false
        return true
    }
}

function isAnagram(firstWord, secondWord) {
    let isAnAnagram = true
    let numChar

    if (firstWord.length != secondWord.length){
        isAnAnagram = false
    } else {
        numChar = 0
        let arrfirstWord = Array.from(firstWord)
        arrfirstWord.sort()
        let arrsecondWord = Array.from(secondWord)
        arrsecondWord.sort()

        while (isAnAnagram && (numChar < arrfirstWord.length)){
            if (arrfirstWord[numChar] != arrsecondWord[numChar]){
                isAnAnagram = false
            } 
            numChar++
        } 
    }
    return isAnAnagram
}


function isIsogram(my_string) {
    let isIsogram = true
    const letrasArray = my_string.toLowerCase().split('')
    const letrasSet = new Set(letrasArray)
    if (letrasArray.length === letrasSet.size) {
        return isIsogram
    } else {
        isIsogram = false
        return isIsogram
    }
    
}

function whatIs(firstWord, secondWord){
    if (isPalindrome(firstWord) && isPalindrome(secondWord) === true){
        return `${firstWord} and ${secondWord} are Palindrome`
    } 
    if (isAnagram(firstWord, secondWord) === true){
        return `${firstWord} and ${secondWord} ara an Anagram`
    }
    if (isIsogram(firstWord)){
        return `${firstWord} is an Isogram`
    } else if(isIsogram(secondWord)){
        return `${secondWord} is an Isogram`
    }
}

console.log(whatIs("cara", "arca"))
console.log(whatIs("ana", "ana"))
console.log(whatIs("ambiente", "murcielago"))
