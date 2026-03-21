Sort = (array) => {
    if (array.length <= 1) return array;
    
    const esquerda = []
    const meio = [array[1]]
    const direita = []

    for (let i of array) {
        if (i < meio) {esquerda.push(i)}
        
        else {direita.push(i)}
    }

    return Sort(esquerda) + meio + Sort(direita)
}

console.log(Sort([2,5,6,8,3]))