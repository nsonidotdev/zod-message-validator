const elements = [{ }, 2, 5, false, null]

console.log(elements.filter(Boolean))

export function createAddition(incrementor: number) {
    return function(value: number) {
        return value + incrementor;
    }
}

const addTen = createAddition(10);

console.log(addTen(5));