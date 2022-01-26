/* eslint-disable react/jsx-indent */
// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { storage, auth } from '../../../config'
import { ref, getDownloadURL } from 'firebase/storage'

export default function getPreferencesImage (setImageUrl) {
  const Uid = auth.currentUser.uid
  const imageRef = ref(storage, 'images/' + Uid + '/profileImage')
  getDownloadURL(imageRef).then((imageUrl) => {
    setImageUrl(imageUrl)
  }).catch((error) => {
    console.log(error)
  })
}
