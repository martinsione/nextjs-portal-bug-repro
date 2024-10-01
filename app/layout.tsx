import "./globals.css";

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col justify-between">
        <div>element 1</div>
        <div>element 2</div>
      </body>
    </html>
  );
}
