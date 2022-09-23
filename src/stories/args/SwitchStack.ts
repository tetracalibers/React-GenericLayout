import { CSSt } from '@polym/react-props'
import { desc_CSS } from '@polym/story-cssdata'
import { defaultProps } from '../../components/SwitchStack/model'

export const desc_SwitchStackProps = {
  limit: {
    control: {
      type: 'number'
    },
    description:
      'Maximum number of items that can be lined up in a horizontal layout',
    table: {
      type: {
        summary: null
      },
      category: 'style',
      defaultValue: {
        summary: defaultProps.limit,
        details: null
      }
    }
  },
  spaceV: {
    ...desc_CSS.gap,
    control: {
      type: 'number'
    },
    description:
      'Numeric value representing the spacing of elements horizontally aligned',
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
  breakpointV: {
    control: {
      type: 'number'
    },
    description:
      'Numeric value representing the breakpoints that switch from horizontal to vertical alignment',
    table: {
      type: {
        summary: null
      },
      category: 'style',
      defaultValue: {
        summary: defaultProps.breakpointV,
        details: null
      }
    }
  },
  breakpointU: {
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of spaceV',
    table: {
      type: {
        summary: null
      },
      category: 'style',
      defaultValue: {
        summary: defaultProps.breakpointU,
        details: null
      }
    }
  }
}
