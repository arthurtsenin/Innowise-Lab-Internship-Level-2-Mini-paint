import { Navigate } from 'react-router-dom'
import { GalleryPage } from '@/pages/GalleryPage/GalleryPage'
import { PaintPage } from '@/pages/PaintPage/PaintPage'
import { SignInPage } from '@/pages/SignInPage/SignInPage'
import { SignUpPage } from '@/pages/SignUpPage/SignUpPage'
import { IRoute } from '@/types/types'

export enum RoutesNames {
  SIGN_IN = '/',
  SIGN_UP = '/signup',
  PAINT = '/paint',
  GALLERY = '/gallery',
  NOT_FOUND = '*',
}

export const PUBLICK_ROUTES: IRoute[] = [
  { path: RoutesNames.SIGN_IN, element: <SignInPage /> },
  { path: RoutesNames.SIGN_UP, element: <SignUpPage /> },
  {
    path: RoutesNames.NOT_FOUND,
    element: <Navigate to={RoutesNames.SIGN_IN} replace />,
  },
]

export const PRIVATE_ROUTES: IRoute[] = [
  { path: RoutesNames.PAINT, element: <PaintPage /> },
  { path: RoutesNames.GALLERY, element: <GalleryPage /> },
  {
    path: RoutesNames.NOT_FOUND,
    element: <Navigate to={RoutesNames.PAINT} replace />,
  },
]
