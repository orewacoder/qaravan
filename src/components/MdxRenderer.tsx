import { MdxRenderer as Renderer } from '@/lib/mdx';

export default function MdxRenderer({ code }: { code: string }) {
  return <Renderer code={code} />;
} 