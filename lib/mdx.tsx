import Notice from '@/components/Notice';
import Prose from '@/components/Prose';

/**
 * MDX components mapping. You can extend this to include more custom components.
 */
export const mdxComponents = {
  Notice,
  wrapper: ({ children }: { children: React.ReactNode }) => <Prose>{children}</Prose>
};

// For Next.js 15 MDX configuration
export function useMDXComponents(components: any) {
  return {
    ...mdxComponents,
    ...components,
  };
}