export class UnsupportedChainIdError extends Error {
  constructor(message = "", ...args) {
    super(message, ...args);
    this.message = message;
  }
}
