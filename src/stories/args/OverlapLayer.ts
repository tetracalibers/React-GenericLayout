import { CSSt } from '@polym/react-props'
import { defaultUpperProps } from './../../components/OverlapLayer/model/upper'

export const desc_OverlapLayerProps = {
  fixed: {
    control: {
      type: 'boolean'
    },
    description:
      'Whether to fix to the center of the screen and follow scrolling or not',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultUpperProps.fixed,
        details: null
      }
    }
  },
  contain: {
    control: {
      type: 'boolean'
    },
    description:
      'Whether to guarantee that the layer above will not extend beyond the area of the layer below',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultUpperProps.contain,
        details: null
      }
    }
  },
  marginV: {
    control: {
      type: 'number'
    },
    description:
      'A number indicating the minimum margin between the four edges of the lower layer and the four edges of the upper layer',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultUpperProps.marginV,
        details: null
      }
    }
  },
  marginU: {
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Unit of the number specified by marginValue',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultUpperProps.marginU,
        details: null
      }
    }
  }
}
