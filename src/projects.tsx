import StyledLink from "components/StyledLink";
import { ReactChild } from "react";


export type ProjectDescription = {
    title: string;
    subtitle: ReactChild;
    imageURL: string | null;
    videoURL: string;
    tags: string[];
    href: string;
}

export const PROJECTS: ProjectDescription[] = [
    {
        title: "Droid Racing Challenge",
        subtitle: <>
            Winning Entry for QUT's Droid Racing Challenge 2021.
            <br />
            Built using <StyledLink href="https://github.com/CallumJHays/bdsim_realtime">BDSim Realtime</StyledLink>
            &nbsp;for all data processing, telemetry and high-level execution control.
            <br />
            Low-level ESC control is handled by an Arduino.
            <br />
            <StyledLink href="https://www.youtube.com/watch?v=_i1_FaduE24">
                YouTube Video
            </StyledLink>
        </>,
        imageURL: null,
        videoURL: "projects/DroidRacingChallenge.webm",
        tags: ["python", "bdsim_realtime", "remote-control", "webapp",
               "opencv", "nvidia jetson", "arm64", "arduino", "c++", "c", "embedded"],
        href: "https://github.com/CallumJHays/bdsim_realtime"
    },
    {
        title: "BDSim Realtime",
        subtitle: <>
            Real-time execution, remote monitoring and tuning of block-diagrams
            for streamlined modeling, simulation and control of dynamical systems in Python.
            <br />
            Built atop <StyledLink href="https://github.com/petercorke/bdsim">BDSim</StyledLink>
            &nbsp;for honours thesis project; supervised by renowned robotics professor Peter Corke.
        </>,
        imageURL: "projects/BdsimWeb.png",
        videoURL: "projects/BdsimWeb.webm",
        tags: ["python", "react", "realtime", "remote-control", "telemetry", "block-diagram", "modeling", "simulation", "remote-control", "webapp",
               "opencv", "computer-vision", "tuning", "control-theory", "signal-analysis"],
        href: "https://github.com/CallumJHays/bdsim_realtime"
    },
    {
        title: "Hillary the Hexapod",
        subtitle: <>
            Remote control, live calibration and 3D visualisation for&nbsp; 
            <StyledLink href="https://www.qut.edu.au/robotics-club">QUT Robotics Club</StyledLink>
            's long-running hexapod project
        </>,
        imageURL: "projects/Hillary.png",
        videoURL: "projects/Hillary.webm",
        tags: ["python", "react", "remote-control", "webapp",
               "kinematics", "robotics", "calibration", "joystick"],
        href: "https://github.com/CallumJHays/bdsim_realtime"
    },
    {
        title: "RooBlocks",
        subtitle: <span>
            Child-friendly electron app for controlling an ESP32
            over Bluetooth using Blockly.
            <br />
            Built for mechatronics design 3 (EGH454)
        </span>,
        imageURL: "projects/RooBlocks.png",
        videoURL: "projects/RooBlocks.webm",
        tags: ["python", "realtime", "block-diagram", "modeling", "simulation", "remote-control", "webapp",
               "opencv", "computer-vision", "tuner", "control-theory", "signal-analysis"],
        href: "https://github.com/CallumJHays/RooBlocks"
    },
]