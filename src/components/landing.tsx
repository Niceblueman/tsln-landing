/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image"
import Link from "next/link"
import { IframeHTMLAttributes, useEffect, useRef } from "react";
// import Frame from 'react-frame-component';

export function Landing() {
  return (
    <section className="py-6 md:py-12 lg:py-24 w-full">
      <div className="space-y-24 px-4 md:px-6 container">
        <div className="flex flex-col justify-center items-center space-y-4 text-center">
          <div className="flex flex-col gap-1 space-y-2">
            <Image src="/TSLN.png" width={100} height={100} className="self-center" alt={""} />
            <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg w-fit text-sm self-center">
              Decentralized Cryptocurrency
            </div>
            <h2 className="font-bold text-3xl sm:text-5xl tracking-tighter">The Currency of Tesla Enthusiasts</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join the community of Tesla fans and be part of the future of sustainable energy and transportation. With
              TeslaNation (TSLN), you can earn rewards, participate in governance, and support projects that accelerate
              Tesla's mission.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="gap-1 grid mx-auto md:mx-0 max-w-sm md:max-w-none">
            <h3 className="font-bold text-lg">Earn Rewards</h3>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              Holders of TSLN can earn rewards through staking and liquidity mining.
            </p>
          </div>
          <div className="gap-1 grid mx-auto md:mx-0 max-w-sm md:max-w-none">
            <h3 className="font-bold text-lg">Participate in Governance</h3>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              Your voice matters. With TSLN, you can vote on proposals and help shape the future of the community.
            </p>
          </div>
          <div className="gap-1 grid mx-auto md:mx-0 max-w-sm md:max-w-none">
            <h3 className="font-bold text-lg">Support Tesla's Mission</h3>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              The funds raised through TSLN will be used to support projects that align with Tesla's goal of
              accelerating the world's transition to sustainable energy.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 mx-auto">
          <Link
            className="inline-flex justify-center items-center border-gray-200 dark:border-gray-800 bg-white hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-950 disabled:opacity-50 shadow-sm px-8 border rounded-md h-10 font-medium text-sm hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 disabled:pointer-events-none dark:focus-visible:ring-gray-300"
            href="https://t.me/TSLNdrop"
            target="none"
          >
            Join Telegram Chat
          </Link>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 mx-auto">
          <SwapFrame />
        </div>
      </div>
    </section>
  )
}

const SwapFrame = () => {
  const contnet = useRef<HTMLIFrameElement>(null)
  useEffect(() => {
    if (contnet.current) {
      contnet.current.onload = (ev) => {
        console.log("ev.eventPhase", contnet.current?.DOCUMENT_NODE);
      }
    }
  }, [])
  return (<iframe ref={contnet} frameBorder="0" sandbox="allow-scripts allow-same-origin" src="https://poocoin.app/embed-swap?outputCurrency=0x10b8714bF415d6F3cB2528C60Cc1045DEA7778b9" width={420} height={600}>
    <style></style>
  </iframe>)
}