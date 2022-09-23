import { CSSt } from '@polym/react-props'
import { desc_CSS } from '@polym/story-cssdata'
import { defaultProps } from '../../components/Grid/model'

export const desc_GridProps = {
  columnMinWidthV: {
    ...desc_CSS.minHeight,
    control: {
      type: 'number'
    },
    description:
      'Numeric value representing the minimum width of the grit cell',
    table: {
      ...desc_CSS.minHeight.table,
      defaultValue: {
        summary: defaultProps.columnMinWidthV,
        details: null
      }
    }
  },
  columnMinWidthU: {
    ...desc_CSS.minHeight,
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of columnMinWidthV',
    table: {
      ...desc_CSS.minHeight.table,
      defaultValue: {
        summary: defaultProps.columnMinWidthU,
        details: null
      }
    }
  },
  spaceV: {
    ...desc_CSS.gap,
    control: {
      type: 'number'
    },
    description: 'Numeric value representing the size of the grit cell gap',
    table: {
      ...desc_CSS.gap.table,
      defaultValue: {
        summary: defaultProps.spaceV,
        details: null
      }
    }
  },
  spaceU: {
    ...desc_CSS.gap,
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of spaceV',
    table: {
      ...desc_CSS.gap.table,
      defaultValue: {
        summary: defaultProps.spaceU,
        details: null
      }
    }
  }
}
