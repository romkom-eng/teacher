import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';

const lexend = Lexend({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'K-Edu Connect | 글로벌 한국 교과 전문 과외',
  description: '세상의 모든 한인 학생들을 위한 맞춤형 한국 교육 서비스.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
