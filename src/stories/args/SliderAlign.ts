import { desc_CSS } from '@polym/story-cssdata'
import { CSSt } from '@polym/react-props'
import { defaultProps } from '../../components/SliderAlign/model'

export const desc_SliderAlignProps = {
  spaceV: {
    ...desc_CSS.marginLeft,
    control: {
      type: 'number'
    },
    description:
      'Numerical value indicating the size of the gap between each item',
    table: {
      ...desc_CSS.marginLeft.table,
      defaultValue: {
        summary: defaultProps.spaceV,
        details: null
      }
    }
  },
  spaceU: {
    ...desc_CSS.marginLeft,
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of spaceV',
    table: {
      ...desc_CSS.marginLeft.table,
      defaultValue: {
        summary: defaultProps.spaceU,
        details: null
      }
    }
  },
  hideScrollBar: {
    control: {
      type: 'boolean'
    },
    description: 'Whether to hide scrollbars',
    table: {
      type: {
        summary: null
      },
      category: 'ScrollBar',
      defaultValue: {
        summary: defaultProps.hideScrollBar,
        details: null
      }
    }
  },
  barHeightV: {
    ...desc_CSS.height,
    control: {
      type: 'number'
    },
    description: 'Numeric value representing the height of the scrollbar area',
    table: {
      ...desc_CSS.height.table,
      category: 'ScrollBar',
      defaultValue: {
        summary: defaultProps.barHeightV,
        details: null
      }
    }
  },
  barHeightU: {
    ...desc_CSS.height,
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of barHeightV',
    table: {
      ...desc_CSS.height.table,
      category: 'ScrollBar',
      defaultValue: {
        summary: defaultProps.barHeightU,
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
  itemWidth: {
    ...desc_CSS.width,
    description: 'Width of each item',
    table: {
      ...desc_CSS.width.table,
      defaultValue: {
        summary: defaultProps.itemWidth,
        details: null
      }
    }
  },
  height: {
    ...desc_CSS.height,
    description: 'Height of the SliderAlign component itself',
    table: {
      ...desc_CSS.height.table,
      defaultValue: {
        summary: defaultProps.height,
        details: null
      }
    }
  },
  barBgColor: {
    ...desc_CSS.backgroundColor,
    description: 'Background color of scrollbar area',
    table: {
      ...desc_CSS.backgroundColor.table,
      category: 'ScrollBar',
      defaultValue: {
        summary: defaultProps.barBgColor,
        details: null
      }
    }
  },
  barColor: {
    ...desc_CSS.color,
    description: 'Color of scrollbar',
    table: {
      ...desc_CSS.color.table,
      category: 'ScrollBar',
      defaultValue: {
        summary: defaultProps.barColor,
        details: null
      }
    }
  }
}
