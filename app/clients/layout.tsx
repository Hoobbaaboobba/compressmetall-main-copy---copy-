export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mt-8 max-w-[1000px]">{children}</section>;
}
