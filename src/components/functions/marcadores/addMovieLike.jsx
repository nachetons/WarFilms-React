// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../../../config'
import { ref, set } from 'firebase/database'

export default function addMovieLike (infoLike) {
  const Uid = auth.currentUser.uid
  const n = new Date()
  const newTime = n.toISOString().slice(0, 10)
  console.log('infoLike', Uid)
  set(ref(db, 'likes/' + Uid + '/' + infoLike.id), {
    movieId: infoLike.id,
    userId: Uid,
    title: infoLike.title,
    overview: infoLike.overview,
    vote: infoLike.vote,
    UrlImage: infoLike.UrlImage,

    date: newTime
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
