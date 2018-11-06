const Generator = require('./someModule')

let one = 'one'

const myFunc = (parameter1) => {
    const generator = new Generator('test 1', 'test 2')
    generator.method1('test 3')
    console.log(parameter1)
}

myFunc('test 0')