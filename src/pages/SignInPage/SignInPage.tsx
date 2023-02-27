import { FC } from 'react'
import { SignIn } from '@/components/containers/SignIn/SignIn'
import { SignInContainer } from './SignInPage.styles'

export const SignInPage: FC = () => {
  return (
    <SignInContainer>
      <SignIn />
    </SignInContainer>
  )
}
