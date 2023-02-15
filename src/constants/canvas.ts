import { ICanvasSize, ITools } from '@/types/types'
import CreateIcon from '@mui/icons-material/Create'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal'
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined'

export const CANVAS_SIZE: ICanvasSize = {
  with: 700,
  height: 400,
}

export const TOOLS: ITools = {
  brush: {
    name: 'brush',
    icon: CreateIcon,
  },
  line: {
    name: 'line',
    icon: HorizontalRuleIcon,
  },
  rectangle: {
    name: 'rectangle',
    icon: CropSquareIcon,
  },
  triangle: {
    name: 'triangle',
    icon: ChangeHistoryIcon,
  },
  circle: {
    name: 'circle',
    icon: RadioButtonUncheckedIcon,
  },
  star: {
    name: 'star',
    icon: StarBorderOutlinedIcon,
  },
  hexagon: {
    name: 'hexagon',
    icon: HexagonOutlinedIcon,
  },
  eraser: {
    name: 'eraser',
    icon: AutoFixNormalIcon,
  },
}
