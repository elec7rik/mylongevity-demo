import "./globals.css";

export const metadata = {
  title: "My Longevity",
  description: "A premium wellness commerce prototype for My Longevity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
