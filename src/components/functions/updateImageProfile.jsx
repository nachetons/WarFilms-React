/* eslint-disable react/jsx-indent */
// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { storage, auth } from '../../../config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default function updateImage (image) {
  const Uid = auth.currentUser.uid
  const imageRef = ref(storage, 'images/' + Uid + '/profileImage')
  uploadBytes(imageRef, image).then(() => {
    getDownloadURL(imageRef).then((imageUrl) => {
      // setImageUrl(imageUrl)
      console.log('Image uploaded')
    }).catch((error) => {
      console.error(error, 'Error al obtener la url de la imagen')
    }).catch((error) => {
      console.error(error, 'Error al subir la imagen')
    })
  })
}
