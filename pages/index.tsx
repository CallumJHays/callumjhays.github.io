import { useRef, useState } from "react";
import Link from "next/link";

import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { NextSeo } from "next-seo";

import Loader from "components/Loader";
import Panel from "components/Panel";
import LinkTextSpan from "components/LinkTextSpan";

function SkillBar({ proficiency }) {
  return (
    <div className="whitespace-nowrap ml-2">
      {Array.from({ length: 7 }).map((_, i) => (
        <span
          key={i}
          className="h-3 w-3 inline-block mx-px"
          style={{ background: i < proficiency ? "#9be9a8" : "#ebedf0" }}
        ></span>
      ))}
    </div>
  );
}

function ProjectPreview({ name }) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLVideoElement>();

  const vid = (
    <video
      loop
      ref={ref}
      className="h-full"
      preload="none"
      src={require(`assets/index/${name}.webm`)}
      poster={require(`assets/index/${name}.png`)}
    />
  );

  return (
    <>
      <div
        className="h-20 inline-block border-4 border-gray-200"
        onMouseEnter={() => {
          if (ref.current.preload == "none") {
            ref.current.preload = "auto";
            ref.current.onloadeddata = () => {
              ref.current.play();
              setLoaded(true);
            };
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
          "absolute left-14 -top-56 z-10 h-64 w-96" + (active ? "" : " hidden")
        }
      >
        <Loader loaded={loaded}>{vid}</Loader>
      </div>
    </>
  );
}

function SeeMoreLink({ href, text = "See More", floatRight = false }) {
  return (
    <Link href={href}>
      <LinkTextSpan className={floatRight ? "float-right pr-3" : null}>
        {text}
      </LinkTextSpan>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <NextSeo title="Cal Hays" description="Callum Hays' Personal Website" />
      <style jsx>{`
        .front-page {
          @apply font-mono container mx-auto grid grid-cols-1 md:grid-cols-6 gap-3 h-screen p-4 max-w-3xl;

          max-height: 41rem;
        }

        @media only screen and (max-width: 640px) {
          .xs-flex-col {
            flex-direction: column;
          }
        }

        /* don't show github if it makes page too long */
        @media only screen and (min-height: 300px) and (min-width: 768px) {
          .stout-hidden {
            display: none;
          }
        }

        @media only screen and (min-height: 660px) and (min-width: 768px) {
          .stout-hidden {
            display: block;
          }
        }
      `}</style>

      <div className="h-screen flex flex-col justify-around">
        <main className="front-page">
          <article className="md:col-span-4 flex flex-col sm:flex-row justify-center">
            <img
              src={require("assets/index/me.png?webp&resize")}
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
                <Link href={"/contact"}>
                  <span>
                    <LinkTextSpan>Contact Me</LinkTextSpan> 💬
                  </span>
                </Link>
              </p>
            </div>
          </article>

          <Panel className="md:col-span-2 lg:col-span-2">
            <SeeMoreLink href="/resume" floatRight />
            <h2 className="inline">Skills</h2>

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
                Data-Science: <SkillBar proficiency={5} />
              </div>
            </div>
          </Panel>

          <Panel className="md:col-span-3">
            <SeeMoreLink href="/resume" floatRight />

            <h2>Experience</h2>
            <ul className="list-disc list-inside text-sm">
              <li>Techstars Music Alumni (2017)</li>
              <li>Software Engineer @ Popgun AI</li>
              <li>Desktop Model Control Engineer @ Verton</li>
              <li>Machine Learning Intern @ Notiv</li>
              <li>Computer Systems (CAB102) Tutor @ QUT</li>
            </ul>
          </Panel>

          <Panel className="row-span-2 md:col-span-3">
            <h2>Blog</h2>
            <p>Python Annotated type</p>

            <SeeMoreLink href="/blog" />
          </Panel>

          <Panel className="md:col-span-3 relative">
            <SeeMoreLink href="/projects" text="See All" floatRight />
            <h2>Projects</h2>

            <div className="overflow-x-scroll whitespace-nowrap">
              <ProjectPreview name="BdsimWeb" />
              <ProjectPreview name="Hillary" />
              <ProjectPreview name="RooBlocks" />
              <ProjectPreview name="ConfigApp" />
            </div>
          </Panel>

          <div className="md:col-span-6 stout-hidden">
            <div className="h-40">
              <GitHubCalendar username="callumjhays">
                <ReactTooltip delayShow={50} html />
              </GitHubCalendar>
            </div>
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
