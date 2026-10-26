/** SDK-local failure; messages must not contain tokens, evidence or personal data. */
export class LuliVerifyError extends Error {
  constructor(readonly code: string, message: string) {
    super(message);
    this.name = 'LuliVerifyError';
  }
}
