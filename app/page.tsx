import { Signature } from "@/components/signature";

export default function Home() {
  return (
    <div className="min-h-svh flex flex-col justify-center px-6 gap-4 max-w-md mx-auto">
      <div className="flex flex-col gap-1.5">
        <h1>harry</h1>
        <p>some <span className="font-bold">bold</span> text about me because i am <span className="font-medium">harry</span></p>
        <Signature className="self-end" text="harry" fontSize={22} color="#4fb6d6" inView={false} />
      </div>
    </div>
  );
}
