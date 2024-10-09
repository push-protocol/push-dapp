export const URLRegex = /^(http:\/\/|https:\/\/|www\.)?([\w-]+\.)+[\w-]{2,}(\/[\w.-]*)*\/?$/;

export const getRequiredFieldMessage = (name: string) => `${name} is required.`;
export const getValidURLMessage = (name: string) => `${name} is invalid.`;

export const getMaxCharLimitFieldMessage = (limit: number) => `Maximum ${limit} characters allowed.`;

export const getMinNumValueMessage = (limit: number | string) => `Must be greater than ${limit}`;

export const getRangeValueMessage = (name: string) => `${name} must be within the defined range limits.`;
