import { FC, ReactNode, useState } from 'react';
import { Add, Box, Button, Dash, Front, Link, Text, ArrowUpRight } from 'blocks';
import { css } from 'styled-components';
import { faqList } from 'common';

export type FAQContainerProps = {};

const FAQContainer: FC<FAQContainerProps> = ({}) => {
  const [expandedQid, setExpandedQid] = useState<number | null>(null);

  const answerMapper: { [x: number]: ReactNode } = {
    1: <AnswerOne />,
    2: <AnswerTwo />,
    3: <AnswerThree />,
    4: <AnswerFour />,
    5: <AnswerFive />,
  };

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
              {expandedQid && expandedQid === faqItem?.id && answerMapper[expandedQid]}
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

const AnswerOne: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        Push is the world’s first blockchain-agnostic decentralised communication protocol for Web3. It is an open
        network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be
        integrated by any crypto frontend (dApps, wallets, etc).
      </Text>
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        Any smart contract, dApp, or backend service can integrate Push to provide a communication layer through
        notifications or chats that are tied to the wallet addresses of users.
      </Text>
    </Box>
  );
};

const AnswerTwo: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        Push is building the communication layer for Web3, using which any dApp, smart contracts or backend can send any
        real time communications (such as notifications, chats, video and more) that are tied directly to a user's
        wallet address (aka web3 usernames).
      </Text>
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        This addresses a major gap in the web3 infrastructure, and improving the everyday experience for blockchain
        users. The notifications (or any other communications) are off-chain, gasless for all scenarios except when a
        smart contract sends them (in which case the smart contract pays a slightly higher gas fees for the payload that
        is sent on blockchain).
      </Text>
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        While communications are encrypted and secure, they utilize Push open network which means any dApp or crypto
        wallet can easily integrate them making the lives of all web3 users a lot easier and more akin to web2 UX where
        apps (or protocols) communicate with their users whenever something of importance occurs or is about to occur
        for them.
      </Text>
    </Box>
  );
};

const AnswerThree: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        <b>⚬ Push Notifications:</b> Enables any smart contract, dApp, backend to deliver critical informations as
        notifications to web3 users directly to their wallet addresses.
      </Text>
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        <b>⚬ Push Chat(wallet-to-wallet chat):</b> Enabling 2-way communication for web3 users from their wallet
        addresses.
      </Text>
    </Box>
  );
};

const AnswerFour: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        Connect to the{' '}
        <Link
          isText
          target="_blank"
          to={'/welcome'}
          textProps={{
            color: 'text-brand-medium',
            variant: 'bl-regular',
            css: css`
              display: inline;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            `,
          }}
        >
          Push dApp
        </Link>{' '}
        & opt-in to channels to get notifications for protocols that are relevant to you. Channels are protocols that
        activate themselves on Push protocol to send notification.
      </Text>

      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        You can receive notifications from any crypto frontends that have already integrated Push. Alternatively, you
        can use via{' '}
        <Link
          isText
          target="_blank"
          to={'/welcome'}
          textProps={{
            color: 'text-brand-medium',
            variant: 'bl-regular',
            css: css`
              display: inline;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            `,
          }}
        >
          Push dApp
        </Link>
        ,{' '}
        <Link
          isText
          target="_blank"
          to={'https://chromewebstore.google.com/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg'}
          textProps={{
            color: 'text-brand-medium',
            variant: 'bl-regular',
            css: css`
              display: inline;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            `,
          }}
        >
          browser extension
        </Link>
        , and mobile app (
        <Link
          isText
          target="_blank"
          to={'https://play.google.com/store/apps/details?id=io.epns.epns&pli=1'}
          textProps={{
            color: 'text-brand-medium',
            variant: 'bl-regular',
            css: css`
              display: inline;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            `,
          }}
        >
          Android
        </Link>{' '}
        &{' '}
        <Link
          isText
          target="_blank"
          to={'https://apps.apple.com/us/app/push-epns/id1528614910'}
          textProps={{
            color: 'text-brand-medium',
            variant: 'bl-regular',
            css: css`
              display: inline;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            `,
          }}
        >
          iOS
        </Link>
        ) in case your favorite wallet or dApp doesn't have Push support yet.
      </Text>

      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        Push recently launched a wallet-to-wallet communication product called Push Chat which is in alpha stage. Reach
        out to us on{' '}
        <Link
          isText
          target="_blank"
          to={'https://discord.com/invite/pushprotocol'}
          textProps={{
            color: 'text-brand-medium',
            variant: 'bl-regular',
            css: css`
              display: inline;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            `,
          }}
        >
          Discord
        </Link>{' '}
        to get exclusive Push Chat access.
      </Text>
    </Box>
  );
};

const AnswerFive: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        Push operates on network of nodes called Push Nodes which are responsible for the validation, storage, and
        delivery of notifications & chats.
      </Text>
      <Text
        color="text-secondary"
        variant="bl-regular"
      >
        Major efforts are put into decentralising Push Nodes which is in the final stages now. Any content or payloads
        getting delivered are already immutable and can't be changed as they are secured using crypto-graphical proofs.
        The other part which ensures that the content can't be censored is in final stages now of testing and public
        alpha push nodes are expected to be rolled out soon.
      </Text>
    </Box>
  );
};
