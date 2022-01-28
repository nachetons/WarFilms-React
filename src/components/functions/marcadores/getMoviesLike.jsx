// import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { auth } from '../../../../config'
import { getDatabase, ref, child, get } from 'firebase/database'
import Marcadores from '@/components/pages/marcadores'
import React, { useState, useEffect } from 'react'

export default function getMoviesLike (setIsAuth, isAuth) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchMovies()
  }, [])
  const Uid = auth.currentUser.uid
  const dbRef = ref(getDatabase())
  const fetchMovies = async () => {
    get(child(dbRef, 'likes/' + Uid)).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          setMovies(childSnapshot.val())
        })

        return (

          <Marcadores setIsAuth={setIsAuth} isAuth={isAuth} movies={movies} />
        )
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
}
