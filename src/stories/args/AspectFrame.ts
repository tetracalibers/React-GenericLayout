import { defaultProps } from '../../components/AspectFrame/model'

export const desc_AspectFrameProps = {
  ratioX: {
    control: {
      type: 'number'
    },
    description: 'Width as denominator of aspect ratio',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.ratioX,
        details: null
      }
    }
  },
  ratioY: {
    control: {
      type: 'number'
    },
    description: 'Height as the numerator of the aspect ratio',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.ratioY,
        details: null
      }
    }
  }
}
