import { CSSt } from '@polym/react-props'
import { desc_CSS } from '@polym/story-cssdata'
import { defaultProps } from '../../components/VerticalCenter/model'

export const desc_VerticalCenterProps = {
  central: {
    control: {
      type: 'number'
    },
    description:
      'A number indicating how many of the child elements the element to be vertically centered is, or the tag name or component name of the element',
    table: {
      type: {
        summary: null
      },
      category: 'style',
      defaultValue: {
        summary: defaultProps.central,
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
      'Numerical value indicating the size of the gap between each item',
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
  },
  paddingV: {
    ...desc_CSS.padding,
    control: {
      type: 'number'
    },
    description:
      'Numeric value representing the size of the space between the four sides of the Slider and the child elements.',
    table: {
      ...desc_CSS.padding.table,
      defaultValue: {
        summary: defaultProps.paddingV,
        details: null
      }
    }
  },
  paddingU: {
    ...desc_CSS.padding,
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of paddingV',
    table: {
      ...desc_CSS.padding.table,
      defaultValue: {
        summary: defaultProps.paddingU,
        details: null
      }
    }
  },
  minHeightV: {
    ...desc_CSS.minHeight,
    control: {
      type: 'number'
    },
    description:
      'A number representing the minimum height of the entire component',
    table: {
      ...desc_CSS.minHeight.table,
      defaultValue: {
        summary: defaultProps.minHeightV,
        details: null
      }
    }
  },
  minHeightU: {
    ...desc_CSS.minHeight,
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of spaceV',
    table: {
      ...desc_CSS.minHeight.table,
      defaultValue: {
        summary: defaultProps.minHeightU,
        details: null
      }
    }
  }
}
