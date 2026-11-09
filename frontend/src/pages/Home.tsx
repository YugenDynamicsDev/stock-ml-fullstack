import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

const samples = [
    { ticker: "AAPL", name: "Apple", from: "228.40", to: "231.10", change: "+1.2%", up: true },
    { ticker: "MSFT", name: "Microsoft", from: "418.20", to: "414.05", change: "−1.0%", up: false },
    { ticker: "NVDA", name: "Nvidia", from: "131.80", to: "136.40", change: "+3.5%", up: true },
  ]
  
  const steps = [
    {
      n: "01",
      title: "A short stretch of prices",
      body: "Recent closes go in. Nothing else. No news, no feelings, no moon phase.",
    },
    {
      n: "02",
      title: "One number comes out",
      body: "A guess at the next close, plus whether that is up or down from here.",
    },
    {
      n: "03",
      title: "Then it stops talking",
      body: "No alerts, no essays, no “act now.” You can ignore it, which is often wise.",
    },
  ]

import React from 'react'

export const Home = () => {
  return (
    <div>
        <main id="top">
        <section className="mx-auto grid w-full max-w-5xl items-end gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.2fr_0.8fr] md:pt-24 md:pb-28">
          <div>
            <p className="text-sm text-muted-foreground">Stock price prediction</p>
            <h1 className="mt-4 max-w-xl text-4xl leading-[1.1] font-medium tracking-tight text-balance sm:text-5xl">
              Tomorrow’s price, guessed on purpose.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              A small model looks at recent closes and offers one number for the next one.
              It is perfectly calm about being wrong.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#sample" className={cn(buttonVariants({ size: "lg" }), "px-4")}>
                See a sample
              </a>
              <a
                href="#how"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
              >
                What it does
              </a>
            </div>
          </div>

          <figure className="rounded-2xl bg-muted/60 p-5 ring-1 ring-foreground/10">
            <figcaption className="flex items-baseline justify-between text-sm">
              <span className="text-muted-foreground">Next close · AAPL</span>
              <span className="text-emerald-700">up a little</span>
            </figcaption>
            <p className="mt-3 text-4xl font-medium tracking-tight tabular-nums">231.10</p>
            <p className="mt-1 text-sm text-muted-foreground tabular-nums">from 228.40</p>
            <Sparkline />
            <p className="text-xs text-muted-foreground">A made-up week, drawn once. It does not move.</p>
          </figure>
        </section>

        <section id="sample" className="border-t border-border">
          <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-20">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-xl font-medium tracking-tight">A sample, frozen in time</h2>
              <p className="text-sm text-muted-foreground">These numbers do not update.</p>
            </div>

            <div className="mt-8 divide-y divide-border border-y border-border">
              {samples.map((row) => (
                <div key={row.ticker} className="flex items-baseline justify-between gap-4 py-4">
                  <p className="min-w-0">
                    <span className="font-medium tracking-tight">{row.ticker}</span>
                    <span className="ml-3 text-muted-foreground">{row.name}</span>
                  </p>
                  <p className="flex shrink-0 items-baseline gap-4 tabular-nums">
                    <span className="hidden text-muted-foreground sm:inline">{row.from}</span>
                    <span className="font-medium">{row.to}</span>
                    <span className={cn("text-sm", row.up ? "text-emerald-700" : "text-rose-700")}>
                      {row.change}
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A guessed close, and how far that sits from the last one. Painted on, not fetched.
            </p>
          </div>
        </section>

        <section id="how" className="border-t border-border">
          <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-16 md:grid-cols-3 md:py-20">
            {steps.map((step) => (
              <div key={step.n}>
                <p className="text-xs tracking-widest text-muted-foreground">{step.n}</p>
                <h3 className="mt-3 text-base font-medium tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home


function Sparkline() {
    return (
      <svg viewBox="0 0 280 96" className="mt-6 mb-3 h-24 w-full text-foreground" fill="none" aria-hidden="true">
        <path
          d="M4 68 C 24 68, 32 58, 48 56 S 78 74, 98 62 S 128 28, 152 34 S 186 70, 210 52 S 244 22, 276 26"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="276" cy="26" r="3" fill="currentColor" />
      </svg>
    )
  }