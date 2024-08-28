export const URLRegex = /^(http:\/\/|https:\/\/|www\.)?([\w-]+\.)+[\w-]{2,}(\/[\w.-]*)*\/?$/;

export const getRequiredFieldMessage = (name: string) => `${name} is required.`;

export const getMaxCharLimitFieldMessage = (limit: number) => `Maximum ${limit} characters allowed.`;

export const getMinCharLimitMessage = (limit: number | string) => `Must be greater than ${limit}`;
