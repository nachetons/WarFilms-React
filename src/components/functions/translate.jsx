import axios from 'axios'

function translate (textToTranslate, setTextTranslate, setIsLoading) {
  // console.log(textToTranslate.length)

  const params = new URLSearchParams()

  params.append('q', textToTranslate)
  params.append('source', 'en')
  params.append('target', 'es')
  params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
  axios.post('https://libretranslate.de/translate', params, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'

    }
  }).then(res => {
    setTextTranslate(res.data.translatedText)
    setIsLoading(false)
  })
}

export default translate
