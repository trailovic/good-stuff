import { useEffect, useState } from 'react';
import { auth } from '../config/firebaseConfig';

export const useAuth = () => {
  const [user, setUser] = useState(auth.currentUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  return { user }
}