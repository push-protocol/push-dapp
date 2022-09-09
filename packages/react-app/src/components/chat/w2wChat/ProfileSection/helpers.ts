export const showCharacters = (data: string, length = 30): string => {
  if (data) {
    return `${data.slice(0, length)}...`
  } else {
    return data
  }
}
