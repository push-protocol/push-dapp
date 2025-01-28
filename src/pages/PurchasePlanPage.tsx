import { PurchasePlan } from 'modules/purchasePlan';
import { ContentLayout } from 'common';
import { useParams } from 'react-router-dom';

// Other Information section
const PurchasePlanPage = () => {
  // update spaceid in global space context
  let { id } = useParams();
  // RENDER
  return (
    <ContentLayout>
      <PurchasePlan index={id} />
    </ContentLayout>
  );
};
export default PurchasePlanPage;
