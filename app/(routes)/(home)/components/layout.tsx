function LayoutRoutes({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full">
      <div className="flex justify-between lg:hidden px-6 py-3 items-start">
        <div className="py-1 text-white">
          <h1>Logotype</h1>
        </div>
      </div>
      {children}
    </main>
  );
}

export default LayoutRoutes;
