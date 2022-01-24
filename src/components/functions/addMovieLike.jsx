import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'

const db = getFirestore()

export default function addMovieLike (infoLike) {
  const collectionRef = collection(db, 'likes')
  const docRef = doc(collectionRef, infoLike.id)
  setDoc(docRef, infoLike)
}
