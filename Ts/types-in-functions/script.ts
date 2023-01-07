function firstLetterUpperCase(name: string) {
    let firstLetter = name.charAt(0).toUpperCase()
    return firstLetter + name.substring(1) //substring: restante dos caracteres a partir da posição 1
};

firstLetterUpperCase('bonieky');
