import { Link } from 'react-router-dom'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Loader } from '@/components/views/Loader/Loader'
import { FormValues } from '@/types/types'
import { schema } from '@/constants/formShema'
import { showSuccessSignUp } from '@/components/views/toasts/showSuccessSignUp'
import { showErrorSignUp } from '@/components/views/toasts/showErrorSignUp'
import { createUser } from '@/api/authHelper'
import { RoutesNames } from '@/constants/routes'
import {
  Container,
  FormControl,
  TextField,
  Typography,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Button,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import { FormContainer, PasswordHelperText } from './SignUp.styles'

export const SignUp: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onBlur', resolver: yupResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    setError('')
    setIsLoading(true)
    try {
      await createUser(data.email, data.password)
      setIsLoading(false)
      showSuccessSignUp()
    } catch (e) {
      setIsLoading(false)
      setError((e as Error).message)
      showErrorSignUp(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <Loader loading={isLoading} />
  }

  return (
    <>
      <FormContainer>
        <Container maxWidth="sm">
          <Typography sx={{ m: 2 }} align="center" component="h2" variant="h3">
            Sign up for a free account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              color="primary"
              variant="outlined"
              type="email"
              label="Email"
              error={!!errors.email}
              helperText={errors?.email?.message}
              fullWidth
              sx={{ mb: 2 }}
              {...register('email')}
            />

            <FormControl fullWidth error={!!errors.password}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                {...register('password')}
              />
              <PasswordHelperText>{errors?.password?.message}</PasswordHelperText>
            </FormControl>
            <Button fullWidth sx={{ mt: 2, p: 1.5 }} type="submit" variant="contained">
              <AppRegistrationIcon />
              <Typography>Sign Up</Typography>
            </Button>
            <Typography align="center" mt={2}>
              Already have an account? <Link to={RoutesNames.SIGN_IN}>Sign in.</Link>
            </Typography>
          </form>
        </Container>
      </FormContainer>
    </>
  )
}
