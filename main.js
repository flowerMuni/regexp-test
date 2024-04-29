


const str = `
010-1234-5678
flower@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick browm fox jumps over the lazy dog.
abbccddd
`

console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))





