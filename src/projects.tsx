import StyledLink from "components/StyledLink";
import { ReactNode } from "react";


export type ProjectDescription = {
    title: string;
    id: string;
    subtitle: ReactNode;
    imageURI: string;
    tags: string[];
    githubURL: string | null;
}

export const PROJECTS: ProjectDescription[] = [
    {
        title: "Droid Racing Challenge",
        id: "droid-racing-challenge",
        subtitle: <>
            Winning Entry for QUT's Droid Racing Challenge 2021.
            <br className="mb-2" />
            Built using <StyledLink href="https://github.com/CallumJHays/bdsim_realtime">BDSim Realtime</StyledLink>
            &nbsp;for all data processing, telemetry and high-level execution control.
            <br className="mb-2" />
            Low-level ESC and Servo control done with Arduino.
            <br className="mb-2" />
            <StyledLink href="https://www.youtube.com/watch?v=_i1_FaduE24">
                YouTube Video
            </StyledLink>
        </>,
        imageURI: "projects/DroidRacingChallenge.webp",
        tags: ["Python", "BDSim Realtime", "Remote-Control", "Webapp",
               "OpenCV", "Nvidia Jetson", "ARM64", "Arduino", "C++", "C", "Embedded"],
        githubURL: null
    },
    {
        title: "BDSim Realtime",
        id: "bdsim-realtime",
        subtitle: <>
            Real-time execution, remote monitoring and tuning of block-diagrams
            for streamlined modeling, simulation and control of dynamical systems in Python.
            <br className="mb-2" />
            Built atop <StyledLink href="https://github.com/petercorke/bdsim">BDSim</StyledLink>
            &nbsp;for honours thesis project; supervised by renowned robotics professor Peter Corke.
        </>,
        imageURI: "projects/BdsimWeb.webp",
        tags: ["Python", "React", "Realtime", "Remote-Control", "Telemetry", "Block-Diagram", "Modeling", "Simulation", "webapp",
               "OpenCV", "Computer-Vision", "Tuning", "Control-Theory", "Signal-Analysis"],
        githubURL: "https://github.com/CallumJHays/bdsim_realtime"
    },
    {
        title: "Hillary the Hexapod",
        id: "hillary-the-hexapod",
        subtitle: <>
            Remote control, live calibration and 3D visualisation for&nbsp; 
            <StyledLink href="https://www.qut.edu.au/robotics-club">QUT Robotics Club</StyledLink>
            's long-running hexapod project.
            <br className="mb-2" />
            Consists of a React/Typescript app hosted by an async Python server via websockets.
        </>,
        imageURI: "projects/Hillary.webp",
        tags: ["Python", "React", "Remote-Control", "Webapp",
               "Kinematics", "Robotics", "Calibration", "Joystick"],
        githubURL: "https://github.com/qut-robotics-club/hillary-hexapod"
    },
    {
        title: "React Github Activity Feed",
        id: "react-github-activity-feed",
        subtitle: <span>
            Turn-key Github activity feed React component.
            Great for portfolio sites of sporadic open-source developers.
            <br className="mb-2" />
            Built for practice publishing a React component to NPM with all the bells and whistles.
            <br className="mb-2" />
            <StyledLink href="/react-github-activity-feed">Storybook Demo / Docs</StyledLink>
        </span>,
        imageURI: "projects/react-github-activity-feed.webp",
        tags: ["TypeScript", "React", "Github", "Rollup", "npm", "Storybook"],
        githubURL: "https://github.com/CallumJHays/react-github-activity-feed"
    },
    {
        title: "Roo-Blocks",
        id: "roo-blocks",
        subtitle: <span>
            Child-friendly electron app for controlling an ESP32
            over Bluetooth using Blockly.
            <br className="mb-2" />
            Built for mechatronics design 3 (EGH454)
        </span>,
        imageURI: "projects/RooBlocks.webp",
        tags: ["ESP32", "MicroPython", "Bluetooth", "Blockly", "Electron", "TypeScript", "React"],
        githubURL: "https://github.com/CallumJHays/Roo-Blocks"
    },
]