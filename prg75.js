//object inheritance

baleno={
    model:'hatch back',
    varient:["automatic","manual"],
    manufacturer:"maruti"
}

glanza={
    manufacturer:"Toyota"
}

glanza.__proto__=baleno
console.log(glanza.model);
console.log(glanza.varient);