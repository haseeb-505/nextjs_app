'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import React from "react";

const musicSchoolTestimonials = [
    {
        quote: "This music school has transformed my understanding of music theory!",
        name: "Alice Johnson",
        title: "Music Enthusiast"
    },
    {
        quote: "The instructors are top-notch and truly passionate about teaching.",
        name: "Bob Smith",
        title: "Aspiring Musician"
    },
    {
        quote: "I love the variety of courses offered, from classical to modern genres.",
        name: "Charlie Brown",
        title: "Guitarist"
    }
]

function MusicSchoolTestimonials() {
  return (
    <div className="relative mt-30 sm:mt-20 h-[40rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <h2 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text py-8 px-8 text-2xl text-center font-bold text-transparent sm:text-4xl z-10">Hear our Harmony: Voices of Success</h2>
      <div className="felx justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full nmax-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
            />
        </div>
      </div>
    </div>
  )
}

export default MusicSchoolTestimonials;
