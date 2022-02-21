// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { auth } from '../../../../config'
import { getDatabase, ref, child, get } from 'firebase/database'

export default function getMoviesLike (setMovies, setIsloading) {
  const Uid = auth.currentUser.uid
  const dataMovies = []
  const dbRef = ref(getDatabase())

  get(child(dbRef, 'likes/' + Uid)).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        dataMovies.push(childSnapshot.val())
      })
      setMovies(dataMovies)
      setIsloading(false)
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
