import { Helmet } from 'react-helmet-async';
import { Rewards } from 'modules/rewards';
import { ContentLayout } from 'common';

const RewardsPointsPage = () => {
  return (
    <Helmet>
      <meta
        property="og:url"
        content="https://push-protocol.github.io/push-dapp/pr-preview/pr-1877/points"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content="Push App (Previously EPNS)"
      />
      <meta
        property="og:description"
        content="Push App (Previously EPNS) | Communication Protocol of Web3"
      />
      <meta
        property="og:image"
        content="https://push-protocol.github.io/push-dapp/pr-preview/pr-1877/previews/rewardsPreview.png"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:domain"
        content="https://push-protocol.github.io/push-dapp/pr-preview/pr-1877/points"
      />
      <meta
        property="twitter:url"
        content="https://push-protocol.github.io/push-dapp/pr-preview/pr-1877/points"
      />
      <meta
        name="twitter:title"
        content="Push App (Previously EPNS)"
      />
      <meta
        name="twitter:description"
        content="Push App (Previously EPNS) | Communication Protocol of Web3"
      />
      <meta
        name="twitter:image"
        content="https://push-protocol.github.io/push-dapp/pr-preview/pr-1877/previews/rewardsPreview.png"
      />
      <ContentLayout>
        <Rewards />
      </ContentLayout>
    </Helmet>
  );
};
export default RewardsPointsPage;
