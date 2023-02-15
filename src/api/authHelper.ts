import { AppDispatch } from '@/store/store'
import { getAuth } from 'firebase/auth'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { app } from '@/api/firebase.config'
import { saveUser, deleteUser } from '@/store/slice/userSlice'
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorageKeys'

export const auth = getAuth(app)

export const createUser = (email: string, password: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.user, JSON.stringify(email))
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = (email: string, password: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.user, JSON.stringify(email))
  return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.user)
  return signOut(auth)
}

export const authCheck = (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(saveUser(user.email))
    } else {
      dispatch(deleteUser())
    }
  })
}
