const chokidar = require('chokidar')
const babel = require('@babel/core')
const fs = require('fs')
const presets = require('@babel/preset-env')

chokidar.watch('./src/').on('all', (event, path) => {
    console.log(path)
    if (path.includes('.js')) {
        const code = fs.readFileSync(path, { encoding: 'utf8' })
        const result = babel.transformSync(code, { presets: [presets] })
        console.log(result.code)
    }
})