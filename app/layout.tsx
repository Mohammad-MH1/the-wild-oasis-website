import { ReactNode } from 'react';

import '@/app/_styles/globals.css';
import Logo from '@/app/_components/Logo';
import { title } from 'process';

export const metadata = {
  title: {
    template: '%s | The Wild Oasis',
    default: 'Welcome | The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the italian Dolomites, surrounded by beautiful mountains and dark forests',
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-primary-950 text-primary-100 min-h-screen'>
        <header>
          <Logo />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
