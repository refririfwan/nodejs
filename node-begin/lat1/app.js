var printstuff = function (stuff) {
    console.log(stuff)
}

function mainFunction(anotherFunction, value) {
    anotherFunction(value)
}

mainFunction(printstuff, "Helo World")