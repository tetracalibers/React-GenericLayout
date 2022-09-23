import { CSSt } from '@polym/react-props'
import { desc_CSS } from '@polym/story-cssdata'
import { defaultProps } from '../../components/VerticalStack/model'

export const desc_VerticalStackProps = {
  recursive: {
    control: {
      type: 'boolean'
    },
    description: 'Whether to apply layout to nested elements',
    table: {
      type: {
        summary: null
      },
      category: 'style',
      defaultValue: {
        summary: defaultProps.recursive,
        details: null
      }
    }
  },
  separateFrom: {
    control: {
      type: 'number'
    },
    description: 'Separator to group elements up and down',
    table: {
      type: {
        summary: null
      },
      category: 'style',
      defaultValue: {
        summary: defaultProps.separateFrom,
        details: null
      }
    }
  },
  spaceV: {
    ...desc_CSS.margin,
    control: {
      type: 'number'
    },
    description:
      'Numeric value representing the spacing of elements in a vertical line',
    table: {
      ...desc_CSS.margin.table,
      defaultValue: {
        summary: defaultProps.spaceV,
        details: null
      }
    }
  },
  spaceU: {
    ...desc_CSS.margin,
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of spaceV',
    table: {
      ...desc_CSS.margin.table,
      defaultValue: {
        summary: defaultProps.spaceU,
        details: null
      }
    }
  }
}
