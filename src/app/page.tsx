import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] flex items-center justify-center">
      {/* <h1 className="text-3xl font-bold text-blue-500">Hello, Tailwind!</h1> */}
      <HeroSection />
    </main>
  );
}
