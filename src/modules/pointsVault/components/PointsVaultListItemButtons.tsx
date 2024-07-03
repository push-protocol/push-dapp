import { Box, Button } from 'blocks';
import { PointsVaultActivity, PointsVaultStatus, useApprovePVUser, useRejectPVUser } from 'queries';
import { useState } from 'react';

export type PointsVaultListItemButtonProps = {
  item: PointsVaultActivity;
  status: PointsVaultStatus;
};

const PointsVaultListItemButtons = ({ status, item }: PointsVaultListItemButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleStopLoading = () => setLoading(false);

  const { rejectPVUserMutation } = useRejectPVUser({
    onSuccess: handleStopLoading,
    onError: handleStopLoading,
  });

  const { approvePVUserMutation } = useApprovePVUser({
    onSuccess: handleStopLoading,
    onError: handleStopLoading,
  });

  const handleReject = async () => {
    setLoading(true);
    await rejectPVUserMutation.mutateAsync({
      activityId: item.activityId,
      currentStatus: status,
    });
  };

  const handleApprove = async () => {
    setLoading(true);
    await approvePVUserMutation.mutateAsync({
      activityId: item.activityId,
      currentStatus: status,
    });
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
          disabled={loading}
          onClick={handleApprove}
        >
          Approve
        </Button>
      )}
      {status !== 'REJECTED' && (
        <Button
          variant="dangerSecondary"
          size="extraSmall"
          disabled={loading}
          onClick={handleReject}
        >
          Reject
        </Button>
      )}
    </Box>
  );
};

export { PointsVaultListItemButtons };
