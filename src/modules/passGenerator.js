const passwordGenerator = (size) => { 

    const characterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y", "z", "1", "2", "3", "4", "5", "@", "#", "%", "$", "&", "*", "!" , "[", "{", "}", "]", "-", "_", "=", "+", "<", ">", "?"]
    const characterListSize = characterList.length
    const inputSize = size
    let password = ""

    for(let i = 0; i<inputSize; i++){
        const randomIndex = Math.floor(Math.random() * characterListSize)
        const char = characterList[randomIndex]
        password += char
    }

    return password
    
}

export default passwordGenerator