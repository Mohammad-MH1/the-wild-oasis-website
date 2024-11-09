import { ReactNode } from "react";

import "@/app/_styles/globals.css";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
