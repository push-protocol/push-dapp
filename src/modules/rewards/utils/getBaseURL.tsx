// helpers
import { getPreviewBasePath } from '../../../../basePath';

const getPreview = getPreviewBasePath();

export const getBaseURL = () => {
  if (getPreview) {
    return getPreview;
  } else return window.location.origin;
};
