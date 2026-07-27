import { PortableText } from '@portabletext/react';
import ImageUrlBuilder from '@sanity/image-url';
import sanityClient from '../lib/client';

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const components = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(800).fit('max').auto('format').url()}
        alt={value.alt || ''}
        loading="lazy"
      />
    ),
  },
};

export default function BlockText({ blocks }) {
  return <PortableText value={blocks} components={components} />;
}
