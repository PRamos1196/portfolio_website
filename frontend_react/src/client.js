import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: prosess.env.REACT_APP__SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-01-05',
    useCdn: true,
    token: process.env.REACT_APP__SANITY_TOKEN,
});