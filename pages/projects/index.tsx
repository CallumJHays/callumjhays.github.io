import Marquee from "react-fast-marquee";

import MainLayout from "components/MainLayout";
import Pill from "components/Pill";
import StyledLink from "components/StyledLink";
import { PROJECTS } from "src/projects";

export default function ProjectIndexPage() {
  return (
    <MainLayout>
      <h1 className="my-10 ml-4 mb-20">Projects</h1>
      <div className="grid grid-cols-5 gap-10">
        {PROJECTS.map(
          ({ title, subtitle, imageURL, videoURL, githubURL, tags, id }) => (
            <>
              <div className="h-full col-span-2 mt-4">
                <video
                  loop
                  className="pb-2"
                  preload="auto"
                  src={videoURL}
                  poster={imageURL ?? undefined}
                  autoPlay={true}
                />
                <Marquee className="h-9" pauseOnHover={true} gradientWidth={20}>
                  {tags.map((tag) => (
                    <Pill>{tag}</Pill>
                  ))}
                </Marquee>
              </div>

              <div className="col-span-3 bg-white p-2">
                <h2 className="text-2xl mb-2" id={id}>{title}</h2>
                <p className="text-md">{subtitle}</p>
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
