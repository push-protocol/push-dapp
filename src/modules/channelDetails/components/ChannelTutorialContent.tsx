import { FC } from 'react';

import { Box, Button, Dropdown, ExternalLink, Link, Text, Tutorial } from 'blocks';
import { UserJourney } from './UserJourneyPreview';

import { useBlocksTheme } from 'blocks/Blocks.hooks';

import { useDisclosure } from 'common';

export type ChannelTutorialContentProps = { tutotrialDetails: any };
const ChannelTutorialContent: FC<ChannelTutorialContentProps> = ({ tutotrialDetails }) => {
  const { mode } = useBlocksTheme();
  const modalControl = useDisclosure();

  return (
    <Dropdown
      trigger="hover"
      overlay={
        <Box
          backgroundColor="surface-secondary"
          padding="spacing-xs"
          borderRadius="radius-sm"
          display="flex"
          gap="spacing-md"
          flexDirection="column"
        >
          {tutotrialDetails.userjourneyshort && (
            <Box
              display="flex"
              flexDirection="column"
              gap="spacing-xxs"
            >
              <Text
                color="text-primary"
                variant="bm-semibold"
              >
                Subscribe to enable
              </Text>

              <Box
                width="218px"
                height="142px"
                overflow="hidden"
                borderRadius="radius-xs"
              >
                <img
                  width="100%"
                  height="100%"
                  src={`./tuts/${tutotrialDetails?.userjourneyshort}/${tutotrialDetails?.userjourneyshort}_${mode}.png`}
                  srcSet={`./tuts/${tutotrialDetails?.userjourneyshort}/${tutotrialDetails?.userjourneyshort}_${mode}@2x.png 2x, ./tuts/${tutotrialDetails?.userjourneyshort}/${tutotrialDetails?.userjourneyshort}_${mode}@3x.png 3x`}
                  alt={`${tutotrialDetails?.userjourneyshort}`}
                />
              </Box>
            </Box>
          )}
          <Box
            display="flex"
            justifyContent="space-between"
          >
            {tutotrialDetails?.userjourneyyoutube && (
              <Button
                variant="outline"
                leadingIcon={<Tutorial color="icon-primary" />}
                size="small"
                onClick={() => modalControl.open()}
              >
                {' '}
                User Journey
              </Button>
            )}
            {tutotrialDetails?.article && (
              <Link
                to={tutotrialDetails?.article}
                target="_blank"
              >
                <Button
                  size="small"
                  variant="outline"
                  iconOnly={<ExternalLink />}
                />
              </Link>
            )}
          </Box>
        </Box>
      }
    >
      <Box
        display="flex"
        gap="spacing-xxxs"
      >
        <Tutorial
          size={16}
          color="icon-tertiary"
        />
        <Text
          color="text-tertiary-inverse"
          variant="c-regular"
        >
          Tutotrial
        </Text>
        {modalControl.isOpen && (
          <UserJourney
            modalControl={modalControl}
            videoLink={tutotrialDetails?.userjourneyyoutube}
          />
        )}
      </Box>
    </Dropdown>
  );
};

export { ChannelTutorialContent };
