import { CSSt } from '@polym/react-props'
import { defaultProps } from '../../components/HorizontalStack/model'
import { desc_CSS } from '@polym/story-cssdata'

export const desc_HorizontalStackProps = {
  spaceV: {
    ...desc_CSS.gap,
    control: {
      type: 'number'
    },
    description:
      'Numeric value representing the Minimum space to be reserved between child elements',
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
  },
  justify: {
    ...desc_CSS.justifyContent,
    table: {
      ...desc_CSS.justifyContent.table,
      defaultValue: {
        summary: defaultProps.justify,
        details: null
      }
    }
  },
  align: {
    ...desc_CSS.alignItems,
    table: {
      ...desc_CSS.alignItems.table,
      defaultValue: {
        summary: defaultProps.align,
        details: null
      }
    }
  }
}
