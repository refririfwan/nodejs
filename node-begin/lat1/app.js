var printstuff = function (stuff) {
    console.log(stuff)
}

function mainFunction(anotherFunction, value) {
    anotherFunction(value)
}

mainFunction(printstuff, "Helo World")
console.log(__filename)
console.log(__dirname)

function printAfter() {
    console.log("This was from setTimeout")
}
setTimeout(printAfter, 5000)
setInterval(printAfter, 2000)