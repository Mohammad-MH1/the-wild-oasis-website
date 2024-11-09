import { ReactNode } from 'react';

import '@/app/_styles/globals.css';
import Logo from '@/app/_components/Logo';

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
