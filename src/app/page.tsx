import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import SequenceBoard from "@/components/SequenceBoard";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      {/* <h1 className="text-3xl font-bold text-blue-500">Hello, Tailwind!</h1> */}
      <div>
        <HeroSection />
      </div>
      <FeaturedCourses />
      <MusicSchoolTestimonials />
      {/* <SequenceBoard /> */}
      <UpComingWebinars />
      <Instructors />
    </main>
  );
}
