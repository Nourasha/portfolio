import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getImageDimensions, urlFor } from '@/lib/image';

const MAX_WIDTH = 1200;

const components = {
  types: {
    image: ({ value }) => {
      const src = urlFor(value).width(MAX_WIDTH).fit('max').auto('format').url();
      const dimensions = getImageDimensions(value);

      if (!dimensions) {
        // Every Sanity asset ref carries its dimensions; if one somehow does not,
        // fall back to a plain img rather than guessing an aspect ratio.
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={value.alt || ''} loading="lazy" />;
      }

      const width = Math.min(dimensions.width, MAX_WIDTH);
      return (
        <Image
          src={src}
          alt={value.alt || ''}
          width={width}
          height={Math.round((width * dimensions.height) / dimensions.width)}
          sizes="(max-width: 768px) 100vw, 768px"
        />
      );
    },
  },
};

export default function BlockText({ blocks }) {
  return <PortableText value={blocks} components={components} />;
}
