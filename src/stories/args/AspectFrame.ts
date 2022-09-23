import { desc_CSS } from '@polym/story-cssdata'
import { defaultProps } from '../../components/AspectFrame/model'

export const desc_AspectFrameProps = {
  ratioX: {
    ...desc_CSS.aspectRatio,
    control: {
      type: 'number'
    },
    description: 'Width as denominator of aspect ratio',
    table: {
      ...desc_CSS.aspectRatio.table,
      defaultValue: {
        summary: defaultProps.ratioX,
        details: null
      }
    }
  },
  ratioY: {
    ...desc_CSS.aspectRatio,
    control: {
      type: 'number'
    },
    description: 'Height as the numerator of the aspect ratio',
    table: {
      ...desc_CSS.aspectRatio.table,
      defaultValue: {
        summary: defaultProps.ratioY,
        details: null
      }
    }
  }
}
