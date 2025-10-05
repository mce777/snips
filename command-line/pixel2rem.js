(function pixel2rem() {
    const remBase = 16
    const error = "only 1 parameter! Example: rem 32"

    return process.argv[3] ?
        console.log(error) && false :
        console.log(`Hello, ${process.argv[2]} pixels is ${process.argv[2] /remBase}rem`)
})