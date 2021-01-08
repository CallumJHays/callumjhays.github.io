import Head from "next/head";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { useRef, useState } from "react";

function SkillBar({ proficiency }) {
  const segments = [];
  for (let i = 0; i < proficiency; i++) {
    segments.push(
      <span
        key={i}
        className="h-3 w-3 inline-block mx-px"
        style={{ background: "#9be9a8" }}
      ></span>
    );
  }
  for (let i = proficiency; i < 7; i++) {
    segments.push(
      <span
        key={i}
        className="h-3 w-3 inline-block mx-px"
        style={{ background: "#ebedf0" }}
      ></span>
    );
  }
  return <div className="whitespace-nowrap ml-2">{segments}</div>;
}

function ProjectPreview({ name }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLVideoElement>();

  const vid = (
    <video
      ref={ref}
      className="h-full"
      preload="none"
      src={require(`assets/${name}.webm`)}
      poster={require(`assets/${name}.png`)}
    />
  );

  return (
    <>
      <div
        className="h-20 inline-block border-4 border-gray-200"
        onMouseEnter={() => {
          if (ref.current.preload == "none") {
            ref.current.preload = "auto";
            ref.current.onloadeddata = ref.current.play;
          } else {
            ref.current.currentTime = 0;
            ref.current.play();
          }
          setActive(true);
        }}
        onMouseLeave={() => {
          ref.current.pause();
          setActive(false);
        }}
      >
        {vid}
      </div>
      <div
        className={
          "absolute left-14 -top-56 z-10 h-64 w-96" +
          (active ? null : " hidden")
        }
      >
        {vid}
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cal Hays</title>
      </Head>
      <div className="h-screen flex flex-col justify-around">
        <main className="front-page">
          <article className="md:col-span-4 flex flex-col sm:flex-row justify-center">
            <img
              src={require("assets/me.png")}
              className="max-h-36 object-contain pr-4"
            />
            <div className="whitespace-nowrap text-center sm:text-left mt-4 sm:mt-0">
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

          <a className="panel cursor-pointer md:col-span-2 lg:col-span-2">
            <h2 className="inline">Skills</h2>
            <span className="underline text-green-500 float-right pr-3">
              See More
            </span>

            <div className="flex flex-row justify-around">
              <div className="grid grid-cols-2">
                Electrical: <SkillBar proficiency={5} />
                Software: <SkillBar proficiency={7} />
                Mechanical: <SkillBar proficiency={3} />
                Social: <SkillBar proficiency={4} />
              </div>

              <div className="grid-cols-2 hidden sm:grid md:hidden">
                Design: <SkillBar proficiency={3} />
                Frontend: <SkillBar proficiency={7} />
                Dev-Ops: <SkillBar proficiency={6} />
                Data Science: <SkillBar proficiency={5} />
              </div>
            </div>
          </a>

          <div className="md:col-span-3 panel">
            <span className="underline text-green-500 float-right pr-3">
              See More
            </span>
            <h2>Experience</h2>
            <ul className="list-disc list-inside text-sm">
              <li>Techstars Music Alumni (2017)</li>
              <li>Software Engineer @ Popgun AI</li>
              <li>Desktop Model Control Engineer @ Verton</li>
              <li>Machine Learning Intern @ Notiv</li>
              <li>Computer Systems (CAB102) Tutor @ QUT</li>
            </ul>
          </div>

          <div className="panel row-span-2 md:col-span-3">
            <h2>Blog</h2>
            <p>Python Annotated type</p>
            <span className="underline text-green-500 pr-3">See More</span>
          </div>

          <div className="panel md:col-span-3 relative">
            <span className="underline text-green-500 float-right pr-3">
              See All
            </span>
            <h2>Projects</h2>
            <div className="overflow-x-scroll whitespace-nowrap">
              <ProjectPreview name="BdsimWeb" />
              <ProjectPreview name="Hillary" />
              <ProjectPreview name="RooBlocks" />
              <ProjectPreview name="ConfigApp" />
            </div>
          </div>

          <div className="md:col-span-6 tablet-hidden monitor-block">
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
      </div>
    </>
  );
}
