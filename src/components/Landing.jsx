import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <img alt="Charix Token" className="h-12 w-12" src="/logo.png" />
          <span className="sr-only">Charix Token</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Vision
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Stats
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Donate
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#f0f9ff]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#0077b6]">
                  Charix Token
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A charity-focused cryptocurrency project dedicated to expanding donation capabilities for charitable
                  causes worldwide.
                </p>
              </div>
              <div className="space-x-4">
                <Link className="inline-flex h-9 items-center justify-center rounded-md bg-[#0077b6] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0077b6]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0077b6] disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-[#0077b6] dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" href="#">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="vision">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#f0f9ff] px-3 py-1 text-sm text-[#0077b6]">
                    Our Vision
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revolutionizing Charitable Giving</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                    Charix Token aims to empower individuals and organizations to make a real impact through seamless,
                    transparent, and secure cryptocurrency donations to charitable causes worldwide.
                  </p>
                </div>
              </div>
              <img alt="Charity" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" height="310" src="/charity.jpg" width="550" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f9ff]" id="stats">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 mx-auto text-center lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0077b6]">
                Charix Token Stats
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold">100,000,000,000,000,000</h3>
                  <p className="text-gray-500 dark:text-gray-400">MAX TOTAL SUPPLY</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold">8,199</h3>
                  <p className="text-gray-500 dark:text-gray-400">CHARIX HOLDERS</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold">25,650</h3>
                  <p className="text-gray-500 dark:text-gray-400">TOTAL TRANSFERS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="community">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <img alt="Community" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" height="310" src="/community.jpg" width="550" />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#f0f9ff] px-3 py-1 text-sm text-[#0077b6]">
                    Community-Focused
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empowering Charitable Giving</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                    Charix Token is built on a foundation of community engagement and transparency. We believe in
                    empowering individuals to make a real difference through seamless cryptocurrency donations to their
                    causes of choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f9ff]" id="donate">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 mx-auto text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#0077b6]">
                Donate to Charitable Causes
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Join us in our mission to revolutionize charitable giving. Donate to the Charix Token project and help
                us expand donation capabilities for charitable causes worldwide.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="flex-1" placeholder="Enter your donation amount" type="text" />
                <Button className="bg-[#0077b6] text-white hover:bg-[#0077b6]/90" type="submit">
                  Donate
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                All donations are tax-deductible and go directly to supporting charitable causes.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Charix Token. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}
