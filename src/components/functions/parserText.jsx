
function parserText (textToTranslate) {
  const fragmentos = []
  // fragment text to max caracters 500 and include to array
  let i = 0
  let j = 0
  while (i < textToTranslate.length && j < 10) {
    const primerParser = textToTranslate.substring(i, i + 500)
    const segundoParser = primerParser.substring(0, primerParser.lastIndexOf('.'))
    fragmentos.push(segundoParser)
    i += segundoParser.length
    console.log(i, textToTranslate.length, primerParser)
    j += 1
  }

  // console.log(fragmentos.length)
}

export default parserText
