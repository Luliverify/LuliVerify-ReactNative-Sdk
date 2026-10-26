import test from 'node:test';
import assert from 'node:assert/strict';
import { createLuliVerifyConfig, LuliVerifyError } from '../dist/index.js';

test('native is the default and configuration is immutable', () => {
  const config = createLuliVerifyConfig({ apiBaseUrl: 'https://api.example.com' });
  assert.equal(config.presentation, 'native');
  assert.equal(Object.isFrozen(config), true);
});
test('hosted mode is explicit', () => {
  assert.equal(createLuliVerifyConfig({ apiBaseUrl: 'https://api.example.com', presentation: 'hosted' }).presentation, 'hosted');
});
for (const apiBaseUrl of ['http://api.example.com', '/relative', 'https://user:secret@api.example.com', 'https://api.example.com?token=secret', 'https://api.example.com#secret']) {
  test(`reject unsafe URL ${apiBaseUrl}`, () => {
    assert.throws(() => createLuliVerifyConfig({ apiBaseUrl }));
  });
}
test('reject unsupported runtime presentation', () => {
  assert.throws(() => createLuliVerifyConfig({ apiBaseUrl: 'https://api.example.com', presentation: 'unknown' }));
});
test('local error retains its code', () => {
  assert.equal(new LuliVerifyError('unsupported', 'Unavailable').code, 'unsupported');
});
