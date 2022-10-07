import Link from "next/link";
import { useRef, useState } from "react";
import unwrap from "ts-unwrap";

import Marquee from "react-fast-marquee";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

import MainLayout from "components/MainLayout";
import Panel from "components/Panel";
import LinkTextSpan from "components/LinkTextSpan";
import StyledLink from "components/StyledLink";
import BlogTable from "components/BlogTable";
import getBlogPosts, { FrontMatter } from "src/getBlogPosts";
import { GetStaticProps } from "next";
import { PROJECTS } from "src/projects";

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

export function ProjectPreview({
  videoURL,
  imgURL,
  id,
}: {
  videoURL: string;
  imgURL: string | null;
  id: string;
}) {
  // const [active, setActive] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const vid = (
    <video
      loop
      ref={ref}
      className="h-full"
      preload="auto"
      autoPlay={true}
      src={videoURL}
      poster={imgURL ?? undefined}
    />
  );

  return (
    <Link href={`/projects#${id}`}>
      <span>
        <span
          className="h-20 inline-block border-4 border-gray-200 cursor-pointer"
          // onMouseEnter={() => {
          //   const vidEl = unwrap(ref.current);
          //   vidEl.currentTime = 0;
          //   vidEl.play();
          //   setActive(true);
          // }}
          // onMouseLeave={() => {
          //   unwrap(ref.current).pause();
          //   setActive(false);
          // }}
        >
          {vid}
        </span>
        {/* <div
            className={
              "absolute left-14 -top-56 z-10 h-64 w-96" +
              (active ? "" : " hidden")
            }
          >
            {vid}
          </div> */}
      </span>
    </Link>
  );
}

type HomePageProps = {
  blogPosts: FrontMatter[];
};

export default function HomePage({ blogPosts }: HomePageProps) {
  const MAIL_BODY_DEFAULT = encodeURIComponent(`
G'day Cal,

I saw your website and wanted to get in touch.

I'm interested in working with you on [PROJECT NAME].

...

Cheers,
[YOUR NAME]`);

  return (
    <>
      <MainLayout navigation={false} justifyOuter="around" justifyInner="center">
        <main className="font-mono grid grid-cols-1 md:grid-cols-6 gap-5">
          <article className="md:col-span-4 flex flex-col sm:flex-row justify-center">
            <img
              src={require("public/index/me.png")}
              className="max-h-36 object-contain pr-4"
            />
            <div className="whitespace-nowrap text-center sm:text-left mt-4 sm:mt-0">
              <h1>Callum Hays</h1>
              <p className="pb-2 pt-2">
                <i>
                  &nbsp;Full-time functional programmer,
                  <br />
                  &nbsp;Part-time functional person
                </i>
              </p>
              <p>🌐 Web Developer &nbsp;|&nbsp; Robotics Engineer 🤖</p>
              <p>
                🌎 Brisbane, AUS &nbsp;|&nbsp;&nbsp;
                <Link
                  href={`mailto:callumjhays@gmail.com?subject=${encodeURIComponent(
                    "Website Enquiry"
                  )}&body=${MAIL_BODY_DEFAULT}`}
                >
                  <span>
                    <LinkTextSpan>callumjhays@gmail.com</LinkTextSpan> 💬
                  </span>
                </Link>
              </p>
            </div>
          </article>

          <Panel className="md:col-span-2 lg:col-span-2 px-4">
            <StyledLink href="/resume" floatRight>
              View Resume
            </StyledLink>
            <h2 className="pb-2">Skills</h2>

            <div className="flex flex-row justify-around">
              <div className="grid grid-cols-2">
                Python: <SkillBar proficiency={7} />
                React: <SkillBar proficiency={6} />
                TypeScript: <SkillBar proficiency={6} />
                DevOps: <SkillBar proficiency={5} />
              </div>
            </div>
          </Panel>

          <Panel className="md:col-span-3 p-2 relative">
            <StyledLink href="/resume" floatRight>
              See More
            </StyledLink>

            <h2 className="mb-2">Experience</h2>
            <ul className="list-disc list-inside text-sm">
              <li>Lead Software Engineer @ Lyro Robotics</li>
              <li>Techstars Music Alumni (2017)</li>
              <li>Software Engineer @ Popgun AI</li>
              <li>Desktop Model Control Engineer @ Verton</li>
              <li>Machine Learning Intern @ Notiv</li>
              <li>Computer Systems (CAB102) Tutor @ QUT</li>
            </ul>
          </Panel>

          <Panel className="row-span-2 md:col-span-3 p-2">
            <StyledLink href="/blog" floatRight>
              See More
            </StyledLink>
            <h2 className="pb-2">Blog Posts</h2>

            <BlogTable blogPosts={blogPosts} small={true} />
          </Panel>

          <Panel className="md:col-span-3 relative">
            <StyledLink href="/projects" floatRight>
              See All
            </StyledLink>
            <h2 className="pb-2">Projects</h2>

            <Marquee
              className="h-20 relative"
              pauseOnHover={true}
              gradientWidth={20}
            >
              {PROJECTS.map((project) => (
                <ProjectPreview
                  id={project.id}
                  key={project.title}
                  imgURL={project.imageURL}
                  videoURL={project.videoURL}
                />
              ))}
            </Marquee>
          </Panel>

          <Panel className="md:col-span-6 pb-8">
            <StyledLink href="https://github.com/CallumJHays" floatRight>
              github.com/CallumJHays
            </StyledLink>
            <h2>Github Activity</h2>
            <div className="max-h-28 mt-6">
              <GitHubCalendar username="callumjhays">
                <ReactTooltip delayShow={50} html />
              </GitHubCalendar>
            </div>
          </Panel>
          {/* <div className="md:col-span-6 stout-hidden">
            <div className="h-40 mt-5">
              <GitHubCalendar username="callumjhays">
                <ReactTooltip delayShow={50} html />
              </GitHubCalendar>
            </div>
          </div> */}

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

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const blogPosts = await getBlogPosts();
  return { props: { blogPosts } };
};
