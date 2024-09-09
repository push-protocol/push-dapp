export const settingInitialValue = {
  type: 1,
  default: 0,
  description: '',
  index: 0,
};

export function compareObject(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => compareObject(obj1[key], obj2[key]));
}
