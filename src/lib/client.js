import { createClient } from '@sanity/client';

export default createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});
