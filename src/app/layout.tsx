import '../styles/globals.css';
import { Inter } from 'next/font/google';
import ClientThemeProvider from '@/components/ClientThemeProvider';
import { TelegramProvider, TelegramWebAppInitializer, TelegramThemeSync } from '@/components/TelegramWebApp';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export const metadata = {
  title: 'QAravan – блог о пути к идеальному качеству',
  description: 'QA как путешествие. Караван, который идёт к стабильному релизу. Без багов, но с приключениями.'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  userScalable: false,
  viewportFit: 'cover'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta name="algolia-site-verification" content="7DE5D7A4F9254997" />
        <script src="https://telegram.org/js/telegram-web-app.js" async></script>
      </head>
      <body className={inter.className}>
        <TelegramProvider>
          <ClientThemeProvider>
            <TelegramThemeSync />
            <TelegramWebAppInitializer />
            {children}
          </ClientThemeProvider>
        </TelegramProvider>
      </body>
    </html>
  );
}
