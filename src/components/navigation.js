import css from '@styled-system/css';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { SunIcon } from '@/components';
import { PAGES } from '@/constants';
import { useDidMount } from '@/hooks';
import { Box, Link, Text } from '@/primitives';

const Li = styled.li`
  display: inline;
  position: relative;

  ${css({
    marginRight: [4, 5],
  })}

  &:after {
    background-color: var(--foreground);
    bottom: -2px;
    content: '';
    display: ${({ active }) => (active ? 'block' : 'none')};
    height: 2px;
    left: 0%;
    position: absolute;
    transition: background-color 0.1s;
    width: 100%;
  }
`;
const Ol = styled.ol`
  list-style: none;
  ${css({
    margin: [2, 3],
  })}
`;

const Navigation = ({ setDarkMode, setSerif, isDarkMode, isSerif }) => {
  const { asPath } = useRouter();

  const didMount = useDidMount();

  return (
    <Box
      alignItems="center"
      as="nav"
      bg="var(--accent)"
      display="flex"
      justifyContent="space-between"
      maxWidth={8}
      mx="auto"
      paddingLeft={[2, 4]}
      paddingRight={[2, 4]}
      py={4}
    >
      <Ol>
        {Object.keys(PAGES).map((key) => (
          <Li key={PAGES[key]} active={asPath.includes(key.toLowerCase())}>
            <Link as={`/${key.toLowerCase()}`} href="/[page]">
              <Text _color="foreground" fontSize={[0, 2]} userSelectNone>
                {PAGES[key]}
              </Text>
            </Link>
          </Li>
        ))}
      </Ol>
      <Box alignItems="center" display="flex">
        <Box
          alignItems="center"
          aria-label="Color scheme swich"
          as="button"
          css={`
            svg {
              height: 100%;
            }
          `}
          display="flex"
          justifyContent="center"
          marginRight={[2, 4]}
          onClick={() => setDarkMode(!isDarkMode)}
          padding={['0.15em', 1]}
          pointer
          size={['1.5rem', '2rem']}
          type="button"
        >
          <SunIcon />
        </Box>
        <Box
          alignItems="center"
          aria-label="Font switch"
          as="button"
          display="flex"
          justifyContent="center"
          onClick={() => setSerif(!isSerif)}
          padding={[0, 1]}
          pointer
          size={['1.5rem', '2rem']}
          type="button"
        >
          {didMount && (
            <Text
              bold
              fontSize={[0, 2]}
              sans={isSerif}
              serif={!isSerif}
              userSelectNone
            >
              A
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

Navigation.defaultProps = {
  isDarkMode: false,
  isSerif: false,
};

Navigation.propTypes = {
  setDarkMode: PropTypes.func.isRequired,
  setSerif: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
  isSerif: PropTypes.bool,
};

export default Navigation;
