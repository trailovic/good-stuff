import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebaseConfig';

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    console.error('Login failed:', error)
    return null
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Logout failed:', error)
  }
}