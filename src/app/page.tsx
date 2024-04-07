import { Landing } from "@src/components/landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24">
      <Landing />
    </main>
  );
}
