let a='   +0 234f'
let b=a.trim().match(/^(-|\+)?\d+/g)
console.log(b)