import Swal from 'sweetalert2'

export const showSuccessCanvas = () => {
  Swal.fire({
    icon: 'success',
    title: 'Your paint has been saved',
    showConfirmButton: false,
    timer: 1500,
  })
}
