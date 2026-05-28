export default function PageSkeleton() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#0BD3D3] selection:text-black">
      <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-12">
        <div className="mb-10 h-20 w-40 rounded-full bg-slate-700/90 animate-pulse" />
        <div className="space-y-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <section key={index} className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-xl">
              <div className="mb-6 h-10 w-52 rounded-full bg-slate-700/80 animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 w-full rounded-full bg-slate-700/80 animate-pulse" />
                <div className="h-4 w-[90%] rounded-full bg-slate-700/80 animate-pulse" />
                <div className="h-4 w-[70%] rounded-full bg-slate-700/80 animate-pulse" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="h-32 rounded-[24px] bg-slate-700/80 animate-pulse" />
                <div className="h-32 rounded-[24px] bg-slate-700/80 animate-pulse" />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
