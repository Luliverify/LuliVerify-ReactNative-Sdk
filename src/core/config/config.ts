export type LuliVerifyPresentation = 'native' | 'hosted';

export interface LuliVerifyConfig {
  readonly apiBaseUrl: string;
  readonly presentation: LuliVerifyPresentation;
}

/** Non-secret configuration, not a claim that either presentation is available. */
export function createLuliVerifyConfig(input: {
  readonly apiBaseUrl: string;
  readonly presentation?: LuliVerifyPresentation;
}): Readonly<LuliVerifyConfig> {
  const url = new URL(input.apiBaseUrl);
  if (url.protocol !== 'https:' || !url.hostname || url.username || url.password || /[?#]/.test(input.apiBaseUrl)) {
    throw new TypeError('apiBaseUrl must be HTTPS without credentials, query or fragment');
  }
  const presentation = input.presentation ?? 'native';
  if (presentation !== 'native' && presentation !== 'hosted') {
    throw new TypeError('Unsupported presentation');
  }
  return Object.freeze({ apiBaseUrl: url.toString(), presentation });
}
