import Head from "next/head";

import "styles/global.scss";
import "styles/github-activity.css";
import Particles from "react-tsparticles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👨‍💻</text></svg>'
        />
      </Head>
      <Particles
        id="particle-background"
        options={{
          background: {
            color: "#fefefe",
          },
          backgroundMode: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#ebedf0", "#d2fcd9"],
              // value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
            },
            shape: {
              type: ["square"],
              stroke: {
                width: 0,
                color: "#fff",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src:
                  "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#808080",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {},
          retina_detect: true,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
