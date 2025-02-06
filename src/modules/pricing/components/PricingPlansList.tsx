import { FC } from 'react';
import { css } from 'styled-components';

import { useGetPricingInfo } from 'queries';

import { PricingPlanTabsType } from '../Pricing.types';

import { Box, Button, Link, Meteor, Skeleton, Tag, Text, Tick } from 'blocks';
import { formatSentenceWithBoldNumbers, parseStringToArray } from '../utils';

export type PricingPlansListProps = {
  type: PricingPlanTabsType;
};

const PricingPlansList: FC<PricingPlansListProps> = ({ type }) => {
  const { data: pricingInfoList, isLoading: isPricingInfoListLoading } = useGetPricingInfo();
  const pricingList = isPricingInfoListLoading ? Array(4).fill(0) : pricingInfoList;

  return (
    <Box
      flexDirection={{ initial: 'row', ml: 'column' }}
      display="flex"
      justifyContent="space-between"
      width="100%"
      gap="spacing-xs"
      css={css`
        @media (max-width: 1220px) {
          display: grid;
          gap: var(--spacing-xs);
          grid-template-columns: repeat(3, minmax(0px, 1fr));
        }

        @media (max-width: 768px) {
          display: grid;
          gap: var(--spacing-xs);
          grid-template-columns: repeat(2, minmax(0px, 1fr));
        }

        @media (max-width: 425px) {
          grid-template-columns: repeat(1, minmax(0px, 1fr));
        }
      `}
    >
      {pricingList?.map((planItem, planIndex) => (
        <Skeleton
          isLoading={isPricingInfoListLoading}
          borderRadius="radius-lg"
          height="542px"
        >
          <Box
            display="flex"
            flexDirection="column"
            padding="spacing-md"
            gap="spacing-md"
            key={`${planIndex}-pricing-plan-key`}
            border="border-sm solid stroke-tertiary"
            borderRadius="radius-lg"
            width={{ initial: '296px', ml: '100%' }}
            backgroundColor={planItem?.name === 'Pro' ? 'surface-primary' : 'surface-transparent'}
            css={css`
              box-sizing: border-box;
              @media (max-width: 1220px) {
                width: 100%;
              }
            `}
          >
            <Box
              display="flex"
              flexDirection="column"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxs"
              >
                <Text
                  color="text-primary"
                  variant="h3-semibold"
                >
                  {planItem?.name}
                </Text>
                {planItem?.name === 'Pro' && (
                  <Tag
                    icon={<Meteor size={16} />}
                    label="Popular"
                    variant="brand"
                    size="medium"
                  />
                )}
              </Box>
              <Text
                color="text-secondary"
                variant="bm-regular"
              >
                {/* {planItem?.planFor} */}
              </Text>
            </Box>

            <Box
              flexDirection="column"
              display="flex"
              width="auto"
              gap="spacing-lg"
            >
              <Box
                css={
                  planItem?.value > 0
                    ? css`
                        margin: var(--spacing-none);
                      `
                    : css`
                        margin: var(--spacing-none) var(--spacing-none) 20px var(--spacing-none);
                      `
                }
              >
                <Text
                  color="text-primary"
                  variant="h2-semibold"
                >
                  {planItem?.value >= 0
                    ? planItem?.value > 0
                      ? (type == 'monthly' ? planItem?.value : planItem?.value * 12)?.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })
                      : 'Free'
                    : 'Talk to us!'}
                </Text>
                {planItem?.value > 0 && (
                  <Text
                    color="text-tertiary"
                    variant="bs-semibold"
                  >
                    per month billed yearly
                  </Text>
                )}
              </Box>

              <Link to={planItem?.value && planItem?.value > 0 ? `/pricing/${planItem?.id}?type=${type}` : '#'}>
                <Button
                  block
                  variant={planItem?.value === 0 ? 'outline' : planItem?.name === 'Pro' ? 'primary' : 'tertiary'}
                >
                  Get Started
                </Button>
              </Link>
            </Box>

            {/* Render the Plan benefit list */}
            <Box
              flexDirection="column"
              display="flex"
              gap="spacing-sm"
              padding="spacing-none spacing-none spacing-md spacing-none"
            >
              {parseStringToArray(planItem?.description).map((benefit, benefitIndex) => (
                <Box
                  flexDirection="row"
                  display="flex"
                  key={`${benefitIndex}-plan-benefits-item-keys`}
                  gap="spacing-xxs"
                >
                  <Tick
                    color="icon-primary"
                    size={17}
                  />
                  <Box
                    flexDirection="row"
                    display="flex"
                    gap="spacing-xxxs"
                  >
                    <Text
                      color="text-primary"
                      variant="bs-regular"
                    >
                      {formatSentenceWithBoldNumbers(benefit)}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Skeleton>
      ))}
    </Box>
  );
};

export { PricingPlansList };
