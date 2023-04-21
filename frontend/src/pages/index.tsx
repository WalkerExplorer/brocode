import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brocode</title>
        <meta
          name="description"
          content="An AI bro, coding algorithm with you "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Bro</span>code
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div className="col-span-1">
              <div className="mb-4 flex max-h-60 max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 text-white ">
                <h3 className="sticky top-0 text-2xl font-bold">Problem</h3>
                <div className="overflow-scroll">
                  <div className="rounded-md bg-gray-800 p-4">
                    <code className="font-mono text-sm">
                      Input: nums = [2,7,11,15], target = 9<br></br>
                      Output: [0,1]
                      <br></br>
                      <br></br>
                      Explanation:
                      <br></br>
                      Because nums[0] + nums[1] == 9, we return [0, 1].
                    </code>
                  </div>
                </div>
              </div>
              <div className="flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 text-white ">
                <h3 className="text-2xl font-bold">Code generation</h3>
                <div className="text-lg">
                  Learn more about Create T3 App, the libraries it uses, and how
                  to deploy it.
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex h-full max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 text-white ">
                <h3 className="text-2xl font-bold">Input →</h3>
                <div className="text-lg">
                  Just the basics - Everything you need to know to set up your
                  database and authentication.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
