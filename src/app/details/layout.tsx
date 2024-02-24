export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="max-w-screen-lg">{children}</div>
    </main>
  );
}
