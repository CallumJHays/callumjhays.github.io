import { useRef, useState } from "react";
import Link from "next/link";

import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import unwrap from "ts-unwrap";

import MainLayout from "components/MainLayout";
import Loader from "components/Loader";
import Panel from "components/Panel";
import LinkTextSpan from "components/LinkTextSpan";
import StyledLink from "components/StyledLink";

function SkillBar({ proficiency }: { proficiency: number }) {
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

function ProjectPreview({ name }: { name: string }) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

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
          const vidEl = unwrap(ref.current);
          if (vidEl.preload == "none") {
            vidEl.preload = "auto";
            vidEl.onloadeddata = () => {
              vidEl.play();
              setLoaded(true);
            };
          } else {
            vidEl.currentTime = 0;
            vidEl.play();
          }
          setActive(true);
        }}
        onMouseLeave={() => {
          unwrap(ref.current).pause();
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

export default function HomePage() {
  return (
    <>
      <MainLayout footer={false}>
        <style jsx global>{`
          .front-page {
            @apply font-mono grid grid-cols-1 md:grid-cols-6 gap-3;

            max-height: 41rem;
          }

          /* don't show github if it makes page fit awkwardly */
          @media screen and (width >= 768px) and (300px <= height < 640px) {
            .stout-hidden {
              display: none;
            }
          }
        `}</style>

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
            <StyledLink href="/resume" floatRight>
              See More
            </StyledLink>
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
            <StyledLink href="/resume" floatRight>
              See More
            </StyledLink>

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

            <StyledLink href="/blog">See More</StyledLink>
          </Panel>

          <Panel className="md:col-span-3 relative">
            <StyledLink href="/projects" floatRight>
              See All
            </StyledLink>
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
      </MainLayout>
    </>
  );
}
