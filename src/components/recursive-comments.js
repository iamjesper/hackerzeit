/* eslint-disable react/prop-types */
import { Box, Text } from '@/primitives';
import { parseComment, relativeTime } from '@/utils';

const RecursiveComments = ({ comment }) => (
  <Box mt={[2, 3]}>
    <Text darkVariant="gray" size="s">
      {comment.by}
    </Text>
    <Text darkVariant="midGray" italic ml="0.4em" size="s">
      {relativeTime(comment.time)}
    </Text>
    <Text
      as="div"
      css={`
        overflow-wrap: anywhere;
      `}
      lineHeight="1.4"
      size="s"
    >
      {parseComment(comment.text)}
    </Text>
    <Box
      borderLeft={1}
      borderLeftColor="lightGray"
      borderLeftStyle="solid"
      pl={[2, 3]}
    >
      {comment.kids.length
        ? comment.kids.map((childComment) => {
            return (
              !childComment.deleted && (
                <RecursiveComments
                  key={childComment.id}
                  comment={childComment}
                />
              )
            );
          })
        : null}
    </Box>
  </Box>
);

export default RecursiveComments;
