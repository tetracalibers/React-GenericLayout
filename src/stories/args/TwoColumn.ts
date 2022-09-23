import { CSSt } from '@polym/react-props'
import { desc_CSS } from '@polym/story-cssdata'
import { defaultProps } from '../../components/TwoColumn/model'
import { subColumnOptions } from '../../components/TwoColumn/model'

export const desc_TwoColumnProps = {
  subColumn: {
    control: {
      type: 'radio'
    },
    options: subColumnOptions,
    description:
      'A string indicating which of the two child elements should be considered a sidebar',
    table: {
      type: {
        summary: null
      },
      category: 'style',
      defaultValue: {
        summary: defaultProps.subColumn,
        details: null
      }
    }
  },
  mainMinWidthPer: {
    ...desc_CSS.minWidth,
    control: {
      type: 'number'
    },
    description: 'Minimum width of main content in horizontal arrangement (%)',
    table: {
      ...desc_CSS.minWidth.table,
      defaultValue: {
        summary: defaultProps.mainMinWidthPer,
        details: null
      }
    }
  },
  noStretchHeight: {
    control: {
      type: 'boolean'
    },
    description:
      'Whether the original height of the element should be maintained in vertical placement',
    table: {
      type: {
        summary: null
      },
      category: 'style',
      defaultValue: {
        summary: defaultProps.noStretchHeight,
        details: null
      }
    }
  },
  subMaxWidthV: {
    ...desc_CSS.maxWidth,
    control: {
      type: 'number'
    },
    description: 'Width of sidebar when side-by-side',
    table: {
      ...desc_CSS.maxWidth.table,
      defaultValue: {
        summary: defaultProps.subMaxWidthV,
        details: null
      }
    }
  },
  subMaxWidthU: {
    ...desc_CSS.maxWidth,
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Unit of subMaxWidthV',
    table: {
      ...desc_CSS.maxWidth.table,
      defaultValue: {
        summary: defaultProps.subMaxWidthU,
        details: null
      }
    }
  },
  spaceV: {
    ...desc_CSS.gap,
    control: {
      type: 'number'
    },
    description: 'Gap between sidebar and main content',
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
    description: 'Unit of gapV',
    table: {
      ...desc_CSS.gap.table,
      defaultValue: {
        summary: defaultProps.spaceU,
        details: null
      }
    }
  }
}
