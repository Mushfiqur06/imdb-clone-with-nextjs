import "./globals.css";

export const metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB Clone website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
