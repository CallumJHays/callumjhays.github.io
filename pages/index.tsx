import Head from "next/head";
import { GithubActivity } from "components/GithubActivity";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

function SkillBar({ proficiency }) {
  const segments = [];
  for (let i = 0; i < proficiency; i++) {
    segments.push(<span style={{ color: "#9be9a8" }}>■</span>);
  }
  for (let i = proficiency; i < 10; i++) {
    segments.push(<span style={{ color: "#ebedf0" }}>■</span>);
  }
  return <>{segments}</>;
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cal Hays</title>

        {/* external deps? in 2020? yikes. Could fix this*/}
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css"
        />

        <script
          type="text/javascript"
          src="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js"
        ></script>
      </Head>

      <main className="font-mono container mx-auto lg:w-10/12 xl:w-9/12 grid grid-cols-5 gap-4 h-screen p-10">
        <article className="col-span-3">
          <h1>Callum Hays</h1>
          <p style={{ paddingLeft: "0.4rem" }}>
            Mechatronics Engineer | Web Developer
          </p>
          <p>
            🌎 Brisbane, Australia |{" "}
            <a className="cursor-pointer border rounded p-1 bg-gray-50">
              Contact Me 💬
            </a>
          </p>
        </article>

        <a className="panel cursor-pointer">
          <h2 className="inline">Resume</h2>
          <a className="underline text-green-500 float-right pr-3">See More</a>
          <p>
            Software: <SkillBar proficiency={5} />
          </p>
          <p>
            Engineering: <SkillBar proficiency={5} />
          </p>
        </a>

        <div className="col-span-3 row-span-2 flex flex-col">
          <div className="-mb-4">
            <GitHubCalendar username="callumjhays">
              <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
          </div>
          <GithubActivity className="h-72 flex-grow" />
        </div>

        <div className="panel border-b-4 border-r-2 col-span-2 rounded border-gray-400 p-2 bg-white">
          <h2>Projects</h2>
          <ul>
            <li>Simulink for Python</li>
            <li>Hexapod & Mobile App</li>
            <li>Matlab Utility Library</li>
          </ul>
        </div>

        <div className="panel border-b-4 border-r-2 col-span-2 rounded border-gray-400 p-2 bg-white">
          <h2>Blog</h2>
          <p>Python Annotated type</p>
        </div>
      </main>
    </>
  );
}
