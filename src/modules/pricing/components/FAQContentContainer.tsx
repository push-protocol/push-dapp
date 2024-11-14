import { FC, useState } from 'react';
import { Add, Box, Button, Dash, Front, Link, Text } from 'blocks';
import { faqList } from '../Pricing.constants';
import { css } from 'styled-components';

export type FAQContentContainerProps = {};

const FAQContentContainer: FC<FAQContentContainerProps> = ({}) => {
  const [expandedQid, setExpandedQid] = useState<number | null>(null);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="70%"
      gap="spacing-md"
    >
      {/* Render list of questions with answers */}
      <Box>
        {faqList.map((faqItem, index) => (
          <Box
            display="flex"
            flexDirection="column"
            key={`${index}-faq-item-keys`}
            padding={index === 0 ? 'spacing-none spacing-none spacing-md spacing-none' : 'spacing-md spacing-none'}
            width="auto"
            gap="spacing-sm"
            css={css`
              border-bottom: var(--border-sm) solid var(--stroke-tertiary);
            `}
          >
            <Box
              display="flex"
              flexDirection="row"
              width="auto"
              justifyContent="space-between"
            >
              <Text
                color="text-primary"
                variant="h4-regular"
              >
                {faqItem?.question}
              </Text>

              {expandedQid === faqItem?.id ? (
                <Dash
                  color="icon-primary"
                  onClick={() => setExpandedQid(null)}
                  size={28}
                />
              ) : (
                <Add
                  color="icon-primary"
                  onClick={() => setExpandedQid(faqItem?.id)}
                  size={28}
                />
              )}
            </Box>
            {expandedQid === faqItem?.id && (
              <Text
                color="text-secondary"
                variant="bl-regular"
              >
                {faqItem?.answer}
              </Text>
            )}
          </Box>
        ))}
      </Box>

      {/* Render explore more questions view */}
      <Box
        alignSelf="flex-end"
        display="flex"
        flexDirection="column"
      >
        <Link
          target="_blank"
          to={'#'}
        >
          <Box
            display="flex"
            flexDirection="row"
            gap="spacing-xxs"
            alignItems="center"
          >
            <Text
              color="text-primary"
              variant="bm-semibold"
            >
              Explore FAQs
            </Text>
            <Front
              color="icon-primary"
              size={16}
            />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export { FAQContentContainer };
