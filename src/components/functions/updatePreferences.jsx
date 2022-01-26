// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../../config'
import { ref, set } from 'firebase/database'

export default function updatePreferences (values) {
  const Uid = auth.currentUser.uid
  const n = new Date()
  const newTime = n.toISOString().slice(0, 10)
  set(ref(db, 'users/' + Uid), {
    username: values.username,
    name: values.name,
    surnames: values.surnames,
    lastUpdate: newTime
  })
    .then(() => {
      console.log('like added')
    })
    .catch(error => {
      console.log('error', error)
    })

  /* const likesRef = collection(dbs, 'likes')
  const docRef = doc(likesRef, Uid.toString())
  setDoc(docRef, infoLike) */
}
