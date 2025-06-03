import { MDXProvider } from '@mdx-js/react';

const components = {
  // Здесь можно добавить кастомные компоненты для MDX, если потребуется
};

export function MdxRenderer({ code }: { code: string }) {
  // @ts-ignore
  return (
    <MDXProvider components={components}>
      <div className="prose dark:prose-invert max-w-none">
        {/* @ts-ignore */}
        <div>{code}</div>
      </div>
    </MDXProvider>
  );
} 