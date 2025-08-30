import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Make it explicit that we are NOT using a provider:
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: undefined,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
