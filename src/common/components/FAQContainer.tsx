import { FC, useState } from 'react';
import { Add, Box, Button, Dash, Front, Link, Text, ArrowUpRight } from 'blocks';
import { css } from 'styled-components';
import { faqList } from 'common';

export type FAQContainerProps = {};

const FAQContainer: FC<FAQContainerProps> = ({}) => {
  const [expandedQid, setExpandedQid] = useState<number | null>(null);

  // const answerMapper: { [x: number]: ReactNode } = {
  //   1: <AnswerOne />,
  //   2: <AnswerTwo />,
  //   3: <AnswerThree />,
  //   4: <AnswerFour />,
  //   5: <AnswerFive />,
  // };

  return (
    <Box
      flexDirection="row"
      display="flex"
      width="100%"
      gap="spacing-md"
    >
      {/* Render FAQ left side container */}
      <Box
        flexDirection="column"
        display="flex"
        gap="spacing-md"
        alignItems="flex-start"
        width="30%"
      >
        <Text
          color="text-primary"
          variant="h2-semibold"
        >
          Frequently Asked Questions
        </Text>
        <Link
          target="_blank"
          to={'https://discord.com/invite/pushprotocol'}
        >
          <Button
            size="large"
            trailingIcon={<ArrowUpRight size={24} />}
          >
            Ask us on Discord
          </Button>
        </Link>
      </Box>

      {/* Render FAQ Content container */}
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
              {expandedQid && expandedQid === faqItem?.id && faqItem.answer}
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
            to={'https://push.org/faq/'}
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
    </Box>
  );
};

export { FAQContainer };
