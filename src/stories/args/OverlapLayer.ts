import { CSSt } from '@polym/react-props'
import { desc_CSS } from '@polym/story-cssdata'
import { defaultUpperProps } from './../../components/OverlapLayer/model/upper'

export const desc_OverlapLayerProps = {
  fixed: {
    ...desc_CSS.position,
    control: {
      type: 'boolean'
    },
    description:
      'Whether to fix to the center of the screen and follow scrolling or not',
    table: {
      ...desc_CSS.position.table,
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
      category: 'style',
      defaultValue: {
        summary: defaultUpperProps.contain,
        details: null
      }
    }
  },
  marginV: {
    ...desc_CSS.margin,
    control: {
      type: 'number'
    },
    description:
      'A number indicating the minimum margin between the four edges of the lower layer and the four edges of the upper layer',
    table: {
      ...desc_CSS.margin.table,
      defaultValue: {
        summary: defaultUpperProps.marginV,
        details: null
      }
    }
  },
  marginU: {
    ...desc_CSS.margin,
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Unit of the number specified by marginValue',
    table: {
      ...desc_CSS.margin.table,
      defaultValue: {
        summary: defaultUpperProps.marginU,
        details: null
      }
    }
  }
}
