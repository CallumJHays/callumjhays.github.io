import Marquee from "react-fast-marquee";

import MainLayout from "components/MainLayout";
import Pill from "components/Pill";
import StyledLink from "components/StyledLink";
import { PROJECTS } from "src/projects";

export default function ProjectIndexPage() {
  return (
    <MainLayout>
      <h1 className="my-10 ml-4 mb-20">Projects</h1>
      <div className="flex flex-col items-center md:grid md:grid-cols-5 md:gap-10">
        {PROJECTS.map(
          ({ title, subtitle, imageURI, githubURL, tags, id }) => (
            <>
              <div className="md:col-span-2 mt-4 max-w-screen-sm" id={id}>
                <h2 className="text-2xl mb-2 mt-8 md:hidden">{title}</h2>
                <img src={imageURI} className="pb-2" />
                <Marquee className="h-9 w-full" pauseOnHover={true} gradientWidth={20}>
                  {tags.map((tag) => (
                    <Pill>{tag}</Pill>
                  ))}
                </Marquee>
              </div>

              <div className="md:col-span-3 bg-white p-2 max-w-screen-sm">
                <h2 className="text-2xl hidden md:block" id={id}>{title}</h2>
                <p className="text-md mb-2 mt-2">{subtitle}</p>
                {!githubURL ? null : (
                  <StyledLink href={githubURL}>Source Code (GitHub)</StyledLink>
                )}
              </div>
            </>
          )
        )}
      </div>
    </MainLayout>
  );
}
