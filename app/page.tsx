import Image from "next/image";
import { cn } from "@/utils/cn";
import { Spotlight } from "./components/ui/spotlight";

export default function Home() {
  return (
    <main>
      <div className=" w-full h-screen rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Welcome to Demo App <br />
            with Nextjs and Aceternity UI.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            This demo website consists of Next js and Aceternity UI . Tailwind
            css is used for styling here and all the design attributes were
            templated.
            {/* I don&apos;t know why but I&apos;m running out of copy. */}
          </p>
        </div>
      </div>
    </main>
  );
}
