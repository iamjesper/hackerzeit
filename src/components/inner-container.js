import css from '@styled-system/css';
import styled from 'styled-components';

export default styled('main')`
  background-color: var(--brightBackground);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  transition: background-color 0.1s;

  ${css({
    maxWidth: 8,
    paddingX: [3, 7],
    paddingTop: [4, 6],
  })}
`;
