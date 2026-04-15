import { PortableText } from '@portabletext/react';

export default function BlockText({ blocks }) {
  return <PortableText value={blocks} />;
}
