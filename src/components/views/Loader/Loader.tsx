import { FlapperSpinner } from 'react-spinners-kit'
import { MainLoaderProps } from '@/types/types'
import { LoaderContainer } from './Loader.styled'
import { LOADER_SETTINGS } from '@/constants/defaultLoaderSettings'

export const Loader = ({
  color = LOADER_SETTINGS.color,
  size = LOADER_SETTINGS.size,
  loading = LOADER_SETTINGS.loading,
  speedMultiplier = LOADER_SETTINGS.speedMultiplier,
}: MainLoaderProps) => {
  return (
    <LoaderContainer>
      <FlapperSpinner
        color={color}
        size={size}
        speedMultiplier={speedMultiplier}
        loading={loading}
      />
    </LoaderContainer>
  )
}
