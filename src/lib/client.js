import { createClient } from '@sanity/client';

export default createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'jw5kec04',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});
