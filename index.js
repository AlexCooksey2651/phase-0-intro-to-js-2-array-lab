// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newcats = [...cats, name]
    return newcats
}

console.log(appendCat("Broom"))

function prependCat(name) {
    const newcats = [name, ...cats]
    return newcats
}

function removeLastCat(name) {
    const newcats = cats.slice(0, -1)
    return newcats
}

function removeFirstCat(name) {
    const newcats = cats.slice(1)
    return newcats
}