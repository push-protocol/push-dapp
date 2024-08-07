// External Packages
import { AiOutlinePlus } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

// Internal Components
import { Button } from 'blocks';

interface ChannelButtonProps {
  onClick: () => void;
}

interface ModifySettingsButtonProps extends ChannelButtonProps {
  title?: string;
}

export const AddDelegateButton = ({ onClick }: ChannelButtonProps) => {
  return (
    <Button
      leadingIcon={<AiOutlinePlus />}
      onClick={onClick}
      size="small"
      variant="tertiary"
    >
      Add Delegate
    </Button>
  );
};

export const ManageSettingsButton = ({ onClick }: ChannelButtonProps) => {
  return (
    <Button
      leadingIcon={<FiSettings />}
      onClick={onClick}
      size="small"
      variant="tertiary"
    >
      Manage Settings
    </Button>
  );
};

export const ModifySettingsButton = ({ onClick, title }: ModifySettingsButtonProps) => {
  return (
    <Button
      variant="outline"
      size="small"
      onClick={onClick}
    >
      {title ? title : 'Modify Settings'}
    </Button>
  );
};

export const AddSettingButton = ({ onClick }: ChannelButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size="small"
      leadingIcon={<AiOutlinePlus />}
      variant="tertiary"
    >
      Add Setting
    </Button>
  );
};
