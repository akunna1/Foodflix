"use client";

// Contains actual UI structure (e.g., page layout, footer, floating buttons, menu, etc.) => clientLayout.tsx

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <main className="grow flex flex-col">
        {children}
      </main>

    </>
  );
}