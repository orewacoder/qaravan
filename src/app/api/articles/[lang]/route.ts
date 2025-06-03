import { NextResponse } from 'next/server';
import { getAllArticles } from '@/lib/content';
import { Locale } from '@/types';
import { isLocale } from '@/lib/i18n';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> }
) {
  try {
    const { lang } = await params;
    
    // Validate locale first
    if (!isLocale(lang)) {
      return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
    }
    
    const articles = await getAllArticles(lang);
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
} 