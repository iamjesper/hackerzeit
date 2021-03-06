import styled from 'styled-components';
import {
  color,
  layout,
  position,
  space,
  typography,
  variant,
} from 'styled-system';

const hoverUnderlineCss = `
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Text = styled('span')`
  color: ${({ _color }) => (_color ? `var(--${_color})` : 'var(--foreground)')};
  line-height: 1.2em;
  transition: color 0.1s;
  font-family: ${({ theme, sans, serif }) => {
    if (serif) return theme.fonts.serif;
    if (sans) return theme.fonts.sans;
    return 'var(--fontFamily)';
  }};

  ${variant({
    prop: 'variant',
    variants: {
      l: {
        fontSize: [2, 3],
      },
      m: {
        fontSize: [1, 2],
      },
      s: {
        fontSize: [0, 1],
      },
    },
  })}
  ${({ bold }) => (bold ? 'font-weight: 600' : '')}
  ${({ italic }) => (italic ? 'font-style: italic' : null)};
  ${({ hoverUnderline }) => (hoverUnderline ? hoverUnderlineCss : '')}
  ${({ userSelectNone }) => (userSelectNone ? 'user-select: none;' : '')}
  ${({ pointer }) => (pointer ? 'cursor: pointer;' : '')}
  ${({ noWrap }) => (noWrap ? 'white-space: nowrap;' : '')}
  ${color}
  ${position}
  ${space}
  ${typography}
  ${layout}
`;

Text.defaultProps = {
  variant: 'm',
};

export default Text;
