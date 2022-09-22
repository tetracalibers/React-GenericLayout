import { CSSt } from '@polym/react-props'
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
      category: 'style control',
      defaultValue: {
        summary: defaultProps.subColumn,
        details: null
      }
    }
  },
  mainMinWidthPer: {
    control: {
      type: 'number'
    },
    description: 'Minimum width of main content in horizontal arrangement (%)',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
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
      category: 'style control',
      defaultValue: {
        summary: defaultProps.noStretchHeight,
        details: null
      }
    }
  },
  subMaxWidthV: {
    control: {
      type: 'number'
    },
    description: 'Width of sidebar when side-by-side',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.subMaxWidthV,
        details: null
      }
    }
  },
  subMaxWidthU: {
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Unit of subMaxWidthV',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.subMaxWidthU,
        details: null
      }
    }
  },
  gapV: {
    control: {
      type: 'number'
    },
    description: 'Gap between sidebar and main content',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.gapV,
        details: null
      }
    }
  },
  gapU: {
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Unit of gapV',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.gapU,
        details: null
      }
    }
  }
}
