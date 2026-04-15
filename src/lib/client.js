import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'jw5kec04',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});
