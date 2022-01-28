// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../../../config'
import { ref, remove } from 'firebase/database'

export default function deleteMovieLike (id) {
  const Uid = auth.currentUser.uid

  console.log('infoLike', Uid)
  remove(ref(db, 'likes/' + Uid + '/' + id))
    .then(() => {
      console.log('like deleted')
    })
    .catch(error => {
      console.log('error', error)
    })

  /* const likesRef = collection(dbs, 'likes')
  const docRef = doc(likesRef, Uid.toString())
  setDoc(docRef, infoLike) */
}
