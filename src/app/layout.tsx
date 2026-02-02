import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "CORUS",
  description: "Access a curated network of premium workspaces, studios, and private offices. Find your perfect space to focus, create, and collaborate.",
  icons: {
    icon: '/logo-tp.png',
    shortcut: '/logo-tp.png',
    apple: '/logo-tp.png',
  },
  openGraph: {
    title: "CORUS",
    description: "Access a curated network of premium workspaces, studios, and private offices.",
    images: ['/logo.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#112628',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=clash-grotesk@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
