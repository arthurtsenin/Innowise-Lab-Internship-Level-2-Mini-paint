import { FC } from 'react'
import { Canvas } from '@/components/containers/Canvas/Canvas'
import { ToolBar } from '@/components/containers/ToolBar/ToolBar'
import { PaintPageContainer } from './PaintPage.styles'

export const PaintPage: FC = () => {
  return (
    <PaintPageContainer>
      <Canvas />
      <ToolBar />
    </PaintPageContainer>
  )
}
