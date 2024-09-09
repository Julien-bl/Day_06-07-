function map(elements, callback) {
    let result = []
    for (let i = 0; i < elements.length; i++) {
        result.push(callback(elements[i]))
    }

    return result
}
function isEven(number) { return number % 2 === 0
}
