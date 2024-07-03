import { Box, Button } from 'blocks';
import {
  PointsVaultActivity,
  PointsVaultStatus,
  useApprovePointsVaultUser,
  usePointsVaultToken,
  useRejectPointsVaultUser,
} from 'queries';

export type PointsVaultListActionButtonsProps = {
  item: PointsVaultActivity;
  status: PointsVaultStatus;
  refetch: () => void;
};

const PointsVaultListActionButtons = ({ status, item, refetch }: PointsVaultListActionButtonsProps) => {
  const token = usePointsVaultToken();

  const { mutate: rejectPointsVaultUser, isPending: isPendingRejection } = useRejectPointsVaultUser();

  const { mutate: approvePointsVaultUser, isPending: isPendingApproval } = useApprovePointsVaultUser();

  const handleReject = async () => {
    rejectPointsVaultUser(
      {
        activityId: item.activityId,
        currentStatus: status,
        token,
      },
      { onSuccess: () => refetch() }
    );
  };

  const handleApprove = async () => {
    approvePointsVaultUser(
      {
        activityId: item.activityId,
        currentStatus: status,
        token,
      },
      { onSuccess: () => refetch() }
    );
  };

  return (
    <Box
      width="208px"
      minWidth="208px"
      minHeight="22px"
      display="flex"
      justifyContent="center"
      gap="s2"
    >
      {status !== 'COMPLETED' && (
        <Button
          variant="outline"
          size="extraSmall"
          disabled={isPendingApproval || isPendingRejection}
          onClick={handleApprove}
        >
          Approve
        </Button>
      )}
      {status !== 'REJECTED' && (
        <Button
          variant="dangerSecondary"
          size="extraSmall"
          disabled={isPendingApproval || isPendingRejection}
          onClick={handleReject}
        >
          Reject
        </Button>
      )}
    </Box>
  );
};

export { PointsVaultListActionButtons };
