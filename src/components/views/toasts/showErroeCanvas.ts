import Swal from 'sweetalert2'

export const showErrorCanvas = (error: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... Something went wrong',
    text: `Error: ${error}`,
  })
}
