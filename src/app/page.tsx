'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  const path = usePathname()

  const refreshData = () => router.replace(path);

  useEffect(() => {
    refreshData()
  },[])

  return (
    <>
      <div className="h-64 md:h-96 flex justify-center items-center sm:h-80">
        <div className="w-[39rem] h-[39rem] bg-[#ffc9c9] rounded-full absolute -z-50 top-[40%] left-[60%] translate-x-[-50%] translate-y-[-50%] blur-[100px]"></div>
        <div className="w-[39rem] h-[39rem] bg-[#ffec99] rounded-full absolute -z-50 top-[40%] left-[50%] translate-x-[-90%] translate-y-[-50%] blur-[100px]"></div>

        <h1 className="text-center text-7xl text-[white]/1 font-semibold">
          I show your <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text text-8xl">secret</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <section className="text-center flex flex-col gap-2 w-56">
          <h2 className="text-2xl font-semibold">Branch Names</h2>
          <article className="grid p-2 grid-rows-2 gap-4 grid-cols-2 w-full">
            {

              ['PHM', 'CSE', 'EE', 'MECH', 'CIVIL'].map(branch => (
                <Link href={`/branch/${branch}`} className="px-5 py-3 bg-[white]/45 font-semibold" key={branch}>{branch}</Link>
              ))
            }
          </article>
        </section>
      </div>
    </>
  );
}
