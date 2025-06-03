import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // Redirect root to default language (e.g., Uzbek)
  if (path === '/') {
    return NextResponse.redirect(new URL('/uz', request.url))
  }

  return NextResponse.next()
} 