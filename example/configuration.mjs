import { createLuliVerifyConfig } from '../dist/index.js';

const config = createLuliVerifyConfig({ apiBaseUrl: 'https://api.example.com' });
console.log({ presentation: config.presentation });
