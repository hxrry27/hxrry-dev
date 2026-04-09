import { Signature } from "@/components/signature";
import { BsDiscord, BsEnvelopeFill, BsGithub } from "react-icons/bs";
import { PopButton } from "@/components/pop-button";
import Link from "next/link";
import ShimmerText from "@/components/shimmer-text";


export default function Home() {
  return (
    <div className="min-h-svh flex flex-col justify-center px-6 gap-4 max-w-md mx-auto">
      <div className="flex flex-col gap-1.5">
        <h1>harry, <span className="opacity-65">amateur tech enthusiast</span></h1>
        <p className="text-neutral-400"> i'm a 25 year old learning <span className="font-semibold text-neutral-50">code</span>, <span className="font-semibold text-neutral-50">design</span>, and <span className="font-semibold text-neutral-50">web development</span> in my spare time.</p>
        <p className="text-neutral-400"> feel free to check out my <span className="font-semibold text-neutral-50"><Link href="/portfolio"><ShimmerText>portfolio</ShimmerText></Link></span>, or drop me a message to chat :)</p>
        <div className="flex gap-2 py-2">
          <PopButton className="" color="rose"><BsEnvelopeFill/></PopButton>
          <PopButton className="" color="blue"><BsDiscord/></PopButton>
          <PopButton className="" color="default"><BsGithub/></PopButton>
        </div>
        <Signature className="self-end" text="harry" fontSize={22} color="#4fb6d6" inView={false} />
      </div>
    </div>
  );
}