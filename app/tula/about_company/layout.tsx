export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mt-8">{children}</section>;
}
