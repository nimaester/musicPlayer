let tracks = [1,1,2,3,4,5,5]

const shuffleHandler = () => {
  return Math.floor(Math.random() * Math.floor(tracks.length))
}

console.log(shuffleHandler())