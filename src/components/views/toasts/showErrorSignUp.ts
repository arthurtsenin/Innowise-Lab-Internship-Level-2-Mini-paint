import Swal from 'sweetalert2'

export const showErrorSignUp = (error: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... We have problems with your registration. Try again',
    text: `Error: ${error}`,
  })
}
