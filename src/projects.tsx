import StyledLink from "components/StyledLink";
import { ReactNode } from "react";


export type ProjectDescription = {
    title: string;
    id: string;
    subtitle: ReactNode;
    imageURL: string | null;
    videoURL: string;
    tags: string[];
    githubURL: string | null;
}

export const PROJECTS: ProjectDescription[] = [
    {
        title: "Droid Racing Challenge",
        id: "droid-racing-challenge",
        subtitle: <>
            Winning Entry for QUT's Droid Racing Challenge 2021.
            <br />
            Built using <StyledLink href="https://github.com/CallumJHays/bdsim_realtime">BDSim Realtime</StyledLink>
            &nbsp;for all data processing, telemetry and high-level execution control.
            <br />
            Low-level ESC and Servo control done with Arduino.
            <br />
            <StyledLink href="https://www.youtube.com/watch?v=_i1_FaduE24">
                YouTube Video
            </StyledLink>
        </>,
        imageURL: null,
        videoURL: "projects/DroidRacingChallenge.webm",
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
            <br />
            Built atop <StyledLink href="https://github.com/petercorke/bdsim">BDSim</StyledLink>
            &nbsp;for honours thesis project; supervised by renowned robotics professor Peter Corke.
        </>,
        imageURL: "projects/BdsimWeb.png",
        videoURL: "projects/BdsimWeb.webm",
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
            's long-running hexapod project
        </>,
        imageURL: "projects/Hillary.png",
        videoURL: "projects/Hillary.webm",
        tags: ["Python", "React", "Remote-Control", "Webapp",
               "Kinematics", "Robotics", "Calibration", "Joystick"],
        githubURL: "https://github.com/qut-robotics-club/hillary-hexapod"
    },
    {
        title: "Roo-Blocks",
        id: "roo-blocks",
        subtitle: <span>
            Child-friendly electron app for controlling an ESP32
            over Bluetooth using Blockly.
            <br />
            Built for mechatronics design 3 (EGH454)
        </span>,
        imageURL: "projects/RooBlocks.png",
        videoURL: "projects/RooBlocks.webm",
        tags: ["ESP32", "MicroPython", "Bluetooth", "Blockly", "Electron", "TypeScript", "react"],
        githubURL: "https://github.com/CallumJHays/Roo-Blocks"
    },
]