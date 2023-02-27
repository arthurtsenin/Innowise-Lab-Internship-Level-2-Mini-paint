import { Routes, Route } from 'react-router-dom'
import { PUBLICK_ROUTES, PRIVATE_ROUTES } from '@/constants/routes'
import { useTypedSelector } from '@/hooks/useTypedSelector'

export const AppRouter = () => {
  const user = useTypedSelector((state) => state.user.user)
  const isUser = user ? PRIVATE_ROUTES : PUBLICK_ROUTES

  return (
    <Routes>
      {isUser.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  )
}
