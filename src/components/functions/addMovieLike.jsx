// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../../config'
import { ref, set } from 'firebase/database'

export default function addMovieLike (infoLike) {
  const Uid = auth.currentUser.uid

  console.log('infoLike', Uid)
  set(ref(db, 'likes/' + Uid + '/' + infoLike.id), {
    movieId: infoLike.id,
    userId: Uid,
    title: infoLike.title
  })

  /* const likesRef = collection(dbs, 'likes')
  const docRef = doc(likesRef, Uid.toString())
  setDoc(docRef, infoLike) */
}
