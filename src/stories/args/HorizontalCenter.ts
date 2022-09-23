import { desc_CSS } from '@polym/story-cssdata'
import { CSSt } from '@polym/react-props'
import { defaultProps } from '../../components/HorizontalCenter/model'

export const desc_HorizontalCenterProps = {
  paddingXV: {
    control: {
      type: 'number'
    },
    description: 'Space at both ends of content',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.paddingXV,
        details: null
      }
    }
  },
  paddingXU: {
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of paddingXV',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.paddingXU,
        details: null
      }
    }
  },
  maxWidthV: {
    ...desc_CSS.maxWidth,
    control: {
      type: 'number'
    },
    description: 'Space at both ends of content',
    table: {
      ...desc_CSS.maxWidth.table,
      defaultValue: {
        summary: defaultProps.maxWidthV,
        details: null
      }
    }
  },
  maxWidthU: {
    control: {
      type: 'select'
    },
    options: CSSt.Unit.length,
    description: 'Units of maxWidthV',
    table: {
      ...desc_CSS.maxWidth.table,
      defaultValue: {
        summary: defaultProps.maxWidthU,
        details: null
      }
    }
  },
  textCenter: {
    control: {
      type: 'boolean'
    },
    description: 'Whether text is also centered or not',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.textCenter,
        details: null
      }
    }
  },
  byContentWidth: {
    control: {
      type: 'boolean'
    },
    description:
      'Whether to center child elements based on their content width',
    table: {
      type: {
        summary: null
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.byContentWidth,
        details: null
      }
    }
  }
}
