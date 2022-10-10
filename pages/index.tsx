import Link from "next/link";

import Marquee from "react-fast-marquee";

import MainLayout from "components/MainLayout";
import Panel from "components/Panel";
import LinkTextSpan from "components/LinkTextSpan";
import StyledLink from "components/StyledLink";
import BlogTable from "components/BlogTable";
import getBlogPosts, { FrontMatter } from "src/getBlogPosts";
import { GetStaticProps } from "next";
import { PROJECTS } from "src/projects";
import { GithubActivityFeed } from "react-github-activity-feed";

// function SkillBar({ proficiency }: { proficiency: number }) {
//   return (
//     <div className="whitespace-nowrap ml-2">
//       {Array.from({ length: 7 }).map((_, i) => (
//         <span
//           key={i}
//           className="h-3 w-3 inline-block mx-px"
//           style={{ background: i < proficiency ? "#9be9a8" : "#ebedf0" }}
//         ></span>
//       ))}
//     </div>
//   );
// }

export function ProjectPreview({ imgURI, id }: { imgURI: string; id: string }) {
  return (
    <Link href={`/projects#${id}`}>
      <span>
        <span className="h-32 inline-block border-4 border-gray-200 cursor-pointer">
          <img src={imgURI} className="h-full" />
        </span>
      </span>
    </Link>
  );
}

type HomePageProps = {
  blogPosts: FrontMatter[];
};

export function GithubFeed() {
  return (
    <div className="md:col-span-6 md:h-56">
      <style jsx>{`
        :global(.gha-footer) {
          height: 30px;
        }
      `}</style>
      <GithubActivityFeed user="callumjhays" />
    </div>
  );
}

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
      <MainLayout
        navigation={false}
        justifyOuter="around"
        justifyInner="center"
      >
        <main className="font-mono grid grid-cols-1 md:grid-cols-6 gap-4">
          <article className="md:col-span-6 flex flex-col sm:flex-row justify-center mb-5">
            <img
              src={"index/me.png"}
              className=" max-h-40 object-contain sm:mr-14"
            />
            <div className="whitespace-nowrap text-center sm:text-left mt-4 sm:mt-0">
              <h1>Callum Hays</h1>
              <p className="pb-2 pt-2">
                <i className="bg-white">
                  &nbsp;Full-time functional programmer,
                  <br />
                  &nbsp;Part-time functional person
                </i>
              </p>
              <p className="bg-white">
                🌐 Web Developer &nbsp;|&nbsp; Robotics Engineer 🤖
              </p>
              <p className="bg-white">
                🌎 Brisbane, AUS &nbsp;|&nbsp;&nbsp;
                <Link
                  href={`mailto:callumjhays@gmail.com?subject=${encodeURIComponent(
                    "Website Enquiry"
                  )}&body=${MAIL_BODY_DEFAULT}`}
                >
                  <span>
                    <LinkTextSpan>callumjhays@gmail.com</LinkTextSpan>
                  </span>
                </Link>
              </p>
            </div>
          </article>

          <Panel className="md:col-span-6 relative">
            <StyledLink href="/projects" floatRight>
              See All
            </StyledLink>
            <h2 className="pb-2">Projects</h2>

            <Marquee
              className="relative"
              pauseOnHover={true}
              gradientWidth={20}
            >
              {PROJECTS.map((project) => (
                <ProjectPreview
                  id={project.id}
                  key={project.title}
                  imgURI={project.imageURI}
                />
              ))}
            </Marquee>
          </Panel>

          <Panel className="md:col-span-3 p-2">
            <StyledLink href="/resume" floatRight>
              View Resume
            </StyledLink>

            <h2 className="mb-2">Experience</h2>
            <ul className="list-disc list-inside text-sm">
              <li>Lead Software Engineer @ Lyro Robotics</li>
              <li>Techstars Music Alumni (2017)</li>
              <li>Software Engineer @ Popgun AI</li>
              <li>Desktop Model Control Engineer @ Verton</li>
              <li>Machine Learning Intern @ Notiv</li>
              <li>Computer Systems (IFB102) Tutor @ QUT</li>
            </ul>
          </Panel>

          {/* <Panel className="md:col-span-2 lg:col-span-2 px-4">
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
          </Panel> */}

          <Panel className="md:col-span-3 p-2">
            <StyledLink href="/blog" floatRight>
              See All
            </StyledLink>
            <h2 className="pb-2">Blog Posts</h2>

            <BlogTable blogPosts={blogPosts} small={true} />
          </Panel>

          <GithubFeed />
        </main>
      </MainLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const blogPosts = await getBlogPosts();
  return { props: { blogPosts } };
};
