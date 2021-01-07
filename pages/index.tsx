import Head from "next/head";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

function SkillBar({ proficiency }) {
  const segments = [];
  for (let i = 0; i < proficiency; i++) {
    segments.push(
      <span
        key={i}
        className="h-3 w-3 inline-block ml-1"
        style={{ background: "#9be9a8" }}
      ></span>
    );
  }
  for (let i = proficiency; i < 7; i++) {
    segments.push(
      <span
        key={i}
        className="h-3 w-3 inline-block ml-1"
        style={{ background: "#ebedf0" }}
      ></span>
    );
  }
  return <div className="whitespace-nowrap">{segments}</div>;
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cal Hays</title>
      </Head>

      <main className="font-mono container mx-auto lg:w-10/12 xl:w-9/12 grid grid-cols-1 md:grid-cols-6 gap-4 h-screen p-10">
        <article className="md:col-span-3 lg:col-span-4 flex flex-row justify-around">
          <div className="align-baseline xs:block sm:inline-block md:hidden lg:inline-block">
            <img
              width="145"
              height="145"
              src={require("images/circle-cropped4.png")}
              className="rounded-full"
            />
          </div>
          <div className="whitespace-nowrap inline-block">
            <h1>Callum Hays</h1>
            <p className="pb-1">
              <i>
                &nbsp;Full-time functional programmer;
                <br />
                &nbsp;Part-time functional person
              </i>
            </p>
            <p>🌐 Web Development &nbsp;|&nbsp; Robotics 🤖</p>
            <p>
              🌎 Brisbane, AUS &nbsp;|&nbsp;&nbsp;
              {/* <a className="cursor-pointer border rounded pt-1 pd-1 pl-3 pr-2 -m-1 bg-gray-50">
                Contact Me 💬
              </a> */}
              <a className="text-green-500 underline cursor-pointer">
                Contact Me
              </a>{" "}
              💬
            </p>
          </div>
        </article>

        <a className="panel cursor-pointer md:col-span-3 lg:col-span-2 h-36">
          <h2 className="inline">Skills</h2>
          <a className="underline text-green-500 float-right pr-3">See More</a>
          <div className="grid grid-cols-2 gap-0">
            Electrical: <SkillBar proficiency={5} />
            Software: <SkillBar proficiency={7} />
            Mechanical: <SkillBar proficiency={3} />
            Social: <SkillBar proficiency={4} />
          </div>
        </a>

        <div className="panel md:col-span-3">
          <h2>Experience</h2>
          <ul className="list-disc list-inside">
            <li>Software Engineer @ Popgun AI</li>
            <li>Desktop Model Control Engineer @ Verton</li>
            <li>Machine Learning Intern @ Notiv</li>
          </ul>
        </div>

        <div className="panel row-span-2 md:col-span-3">
          <h2>Blog</h2>
          <p>Python Annotated type</p>
        </div>

        <div className="panel md:col-span-3">
          <h2>Projects</h2>
          <ul className="list-disc list-inside">
            <li>Simulink for Python</li>
            <li>Hexapod & Mobile App</li>
            <li>Matlab Utility Library</li>
          </ul>
        </div>

        <div className="md:col-span-6">
          <GitHubCalendar username="callumjhays">
            <ReactTooltip delayShow={50} html />
          </GitHubCalendar>
        </div>
        {/* <div className="md:col-span-2">
          <div className="flex flex-row justify-items-start mb-5 gap-7">
            <Image src="/Github.svg" width={50} height={50} />
            <Image src="/LinkedIn.svg" width={50} height={50} />
            <Image src="/HackerRank.svg" width={50} height={50} />
          </div>
          <a className="underline text-green-500 cursor-pointer">
            callumjhays@gmail.com
          </a>
        </div> */}

        {/* <GithubActivity className="md:col-span-3 h-24" /> */}
      </main>
    </>
  );
}
