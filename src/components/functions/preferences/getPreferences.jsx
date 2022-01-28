// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { auth } from '../../../../config'
import { getDatabase, ref, child, get } from 'firebase/database'

export default function getPreferences (setMovies) {
  const Uid = auth.currentUser.uid
  const dbRef = ref(getDatabase())
  get(child(dbRef, 'users/' + Uid)).then((snapshot) => {
    if (snapshot.exists()) {
      const user = []
      snapshot.forEach((childSnapshot) => {
        user.push(childSnapshot.val())
        console.log('childSnapshot', childSnapshot.val())
      })
      setMovies(user)
    } else {
      console.log('No data available')
    }
  }).catch((error) => {
    console.error(error)
  })
}

/* const likesRef = collection(dbs, 'likes')
  const docRef = doc(likesRef, Uid.toString())
  setDoc(docRef, infoLike) */
