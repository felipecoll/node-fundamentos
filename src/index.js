const args = process.argvclea.slice(2)

let min = 1
let max = 100

if(args.lenght > 2) {
  const parsedMin = parseInt(args[0],10)
  const parsedMax = parseInt(args[1],10)

  if(!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin < parsedMax) {
    min = parsedMin
    max = parsedMax
  } else {
    console.error('Invalid range provided. Using default range of 1 to 100.')
  }
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

console.log(`Random number between ${min} and ${max}: ${randomNumber}`)