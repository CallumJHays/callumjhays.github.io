import Head from "next/head";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

function ProjectPreview({ name }) {
  return (
    <video
      className="h-18 rounded border-2 border-gray-400 m-1"
      src={require(`assets/${name}.webm`)}
      poster={require(`assets/${name}.png`)}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cal Hays</title>
      </Head>

      <main className="font-mono container mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 h-screen p-4 max-w-3xl">
        <article className="md:col-span-4 flex flex-row justify-center sm:justify-around xs-flex-col">
          <img
            src={require("assets/me.png")}
            className="max-h-36 object-contain"
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
            <li>Techstars Music Alumni</li>
            <li>Endorsed by Dist. Prof. Peter Corke</li>
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
          <h2>Personal Projects</h2>
          <Carousel
            showArrows
            centerMode
            autoPlay
            showIndicators={false}
            infiniteLoop
            showThumbs={false}
            centerSlidePercentage={35}
            className="rounded select-none"
            // className="flex flex-row justify-around overflow-hidden"
          >
            <ProjectPreview name="BdsimWeb" />
            <ProjectPreview name="Hillary" />
            <ProjectPreview name="RooBlocks" />
            <ProjectPreview name="ConfigApp" />
          </Carousel>
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
    </>
  );
}
