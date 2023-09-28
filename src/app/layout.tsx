import './globals.css';

export const metadata = {
  title: 'Itinerary App',
  description: 'Itinerary App'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
