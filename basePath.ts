export function getPreviewBasePath(): string {
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    // Vite environment
    // @ts-ignore
    return import.meta.env.VITE_PR_PREVIEW_BASE ? `/push-dapp/pr-preview/${import.meta.env.VITE_PR_PREVIEW_BASE}` : '';
  } else if (typeof process !== 'undefined' && process.env) {
    // Node.js environment (e.g., during the build process)
    return process.env.VITE_PR_PREVIEW_BASE ? `/push-dapp/pr-preview/${process.env.VITE_PR_PREVIEW_BASE}` : '';
  }
  return '';
}
