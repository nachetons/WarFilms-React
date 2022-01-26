// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../../config'
import { ref, set } from 'firebase/database'

export default function updatePreferences (data) {
  const Uid = auth.currentUser.uid
  const n = new Date()
  const newTime = n.toISOString().slice(0, 10)
  console.log('infoLike', Uid)
  set(ref(db, 'users/' + Uid), {
    movieId: data.id,
    userId: Uid,
    title: data.title,
    overview: data.overview,
    lastModify: newTime
  })
    .then(() => {
      console.log('updated successfully')
    })
    .catch(error => {
      console.log('error', error)
    })

  /* const likesRef = collection(dbs, 'likes')
  const docRef = doc(likesRef, Uid.toString())
  setDoc(docRef, infoLike) */
}
