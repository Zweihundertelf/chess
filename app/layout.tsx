import type { Metadata } from 'next';

import './global.scss';

export const metadata: Metadata = {
  title: 'Chess App',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
