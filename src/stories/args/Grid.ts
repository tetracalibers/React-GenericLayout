import { CSSt } from '@polym/react-props'
import { defaultProps } from '../../components/Grid/model'

export const desc_GridProps = {
  columnMinWidthV: {
    control: {
      type: 'number'
    },
    description:
      'Numeric value representing the minimum width of the grit cell',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.columnMinWidthV,
        details: null
      }
    }
  },
  columnMinWidthU: {
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of columnMinWidthV',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.columnMinWidthU,
        details: null
      }
    }
  },
  spaceV: {
    control: {
      type: 'number'
    },
    description: 'Numeric value representing the size of the grit cell gap',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.spaceV,
        details: null
      }
    }
  },
  spaceU: {
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of spaceV',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.spaceU,
        details: null
      }
    }
  }
}
