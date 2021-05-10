import CodeBlock from "components/CodeBlock";
import MainLayout from "components/MainLayout";
import Panel from "components/Panel";
import { useCookies } from "react-cookie";
import endent from "endent";
import {
  Component,
  ComponentType,
  ReactChild,
  ReactComponentElement,
  useState,
} from "react";
import { DownloadFiles } from "components/heroicons";
import Button from "components/Button";
import { useForm, UseFormRegister, UseFormReturn } from "react-hook-form";
import LinkTextSpan from "components/LinkTextSpan";
import Link from "next/link";
import ReactTooltip from "react-tooltip";

class DockerSnippet<
  Args extends {
    [name: string]: DockerSnippetArg<any>;
  }
> {
  args: Args;
  render: (args: Args) => string;
  errors: (args: Args) => string[];
  warnings: (args: Args) => string[];

  constructor(
    args: Args,
    render: (args: Args) => string,
    errors: (args: Args) => string[] = () => [],
    warnings: (args: Args) => string[] = () => []
  ) {
    this.args = args;
    this.render = render;
    this.errors = errors;
    this.warnings = warnings;
  }
}

abstract class DockerSnippetArg<Val> {
  val: Val;

  constructor(default_: Val) {
    this.val = default_;
  }

  errors(): string[] {
    return [];
  }

  warnings(): string[] {
    return [];
  }

  abstract editor(register: any): ReactChild;
}

class Toggle extends DockerSnippetArg<boolean> {
  editor(register: any) {
    return <input {...register} type="checkbox" />;
  }
}

class Text extends DockerSnippetArg<string> {
  constructor(default_: string = "") {
    super(default_);
  }

  editor(register: any) {
    return <input {...register} />;
  }
}

class Regex extends Text {
  pattern: RegExp;

  constructor(pattern: RegExp, default_: string = "") {
    super(default_);
    this.pattern = pattern;
  }

  errors() {
    return this.pattern.test(this.val)
      ? []
      : [`Chosen value "${this.val}" does not match regex "${this.pattern}"`];
  }
}

class OneOf<Options extends any[]> extends DockerSnippetArg<Options[number]> {
  options: Options;
  input: boolean;

  constructor(options: Options, default_: Options[number], input: boolean) {
    super(default_);
    this.options = options;
    this.input = input;
  }

  errors() {
    return this.options.includes(this.val)
      ? []
      : [
          // TODO: better support for vals that are objects
          `Chosen value "${this.val}" not one of the expected options "${this.options}"`,
        ];
  }

  editor(register: any) {
    return (
      <select {...register}>
        {this.options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }
}

function BaseImageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full fill-current p-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
      />
    </svg>
  );
}

function DockerSnippetsIcon() {
  return (
    <svg
      width="24px"
      height="24px"
      className="w-full fill-current"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Docker icon</title>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
    </svg>
  );
}

function QuestionMarkCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mb-1 w-4 inline"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function VSCodeConfigIcon() {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 234 235.1"
      className="w-full fill-current"
      width="24"
      height="24"
    >
      <path d="M83.3 143.9l-58 45.2L0 176.5V58.7L25.2 46l57.6 45.3L174 0l60 23.9v186.9l-59.7 24.3-91-91.2zm88.9 15.9V75.3l-54.6 42.3 54.6 42.2zM27.3 144.6L56 118.5 27.3 89.9v54.7z" />
    </svg>
  );
}

function DoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full p-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function HelpTooltip() {
  return (
    <>
      <span className="w-4" data-tip="hello world">
        {" "}
        <QuestionMarkCircleIcon />
      </span>
      <ReactTooltip place="right" effect="solid" />
    </>
  );
}

// function InputField({ name, required, placeholder }) {
//   return <div></div>;
// }

function BaseImageStep({
  register,
  watch,
  formState: { errors },
}: FormManager) {
  watch("baseImage"); // TODO

  // https://stackoverflow.com/a/39672069
  const DOCKER_IMAGE_PATTERN = /^(?:(?=[^:\/]{1,253})(?!-)[a-zA-Z0-9-]{1,63}(?<!-)(?:\.(?!-)[a-zA-Z0-9-]{1,63}(?<!-))*(?::[0-9]{1,5})?\/)?((?![._-])(?:[a-z0-9._-]*)(?<![._-])(?:\/(?![._-])[a-z0-9._-]*(?<![._-]))*)(?::(?![.-])[a-zA-Z0-9_.-]{1,128})?$/;

  return (
    <>
      <h3 className="underline inline">Choose a Base Image</h3>

      <form className="p-3">
        <div>
          <label className="block" htmlFor="baseImage">
            Base Image
            <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="ubuntu:18.04"
            className={`rounded border focus:border-green-400 hover:border-green-200 outline-none p-1 ${
              errors.baseImage ? "border-red-400" : ""
            }`}
            {...register("baseImage", {
              required: true,
              pattern: DOCKER_IMAGE_PATTERN,
            })}
          />
        </div>
        <p className="text-red-500">
          {errors.baseImage
            ? `${errors.baseImage.type}${
                errors.baseImage.message ? `: ${errors.baseImage.message}` : ""
              }`
            : ""}
        </p>
      </form>
      <p className="text-gray-600 mb-2">
        Start by choosing a base image for your devcontainer. Choosing one you
        are most experienced with is recommended (eg, ubuntu).
      </p>
      <p className="text-gray-600">
        Don't worry about this image being too heavy for deployment; We'll be
        choosing a separate base for your production image later, using{" "}
        <a
          href="https://docs.docker.com/develop/develop-images/multistage-build/"
          target="_blank"
        >
          <LinkTextSpan>Docker build-stages</LinkTextSpan>
        </a>
      </p>
    </>
  );
}

type FormManager = UseFormReturn<AppState>;

type WizardStep = {
  text: string;
  icon: ComponentType;
  form: ComponentType<FormManager>;
};

type AppState = {
  baseImage: string;
};

const basicSteps: WizardStep[] = [
  { text: "Base Image", icon: BaseImageIcon, form: BaseImageStep },
  { text: "Docker Snippets", icon: DockerSnippetsIcon, form: BaseImageStep },
  { text: "VSCode Config", icon: VSCodeConfigIcon, form: BaseImageStep },
  { text: "Done", icon: DoneIcon, form: BaseImageStep },
];
const advancedSteps: WizardStep[] = basicSteps.concat([
  // starts at currentStepIdx=3 with showAdvancedSteps==true
  { text: "Docker-Compose", icon: DockerSnippetsIcon, form: BaseImageStep },
  {
    text: "Production Snippets",
    icon: DockerSnippetsIcon,
    form: BaseImageStep,
  },
  { text: "Test Snippets", icon: DockerSnippetsIcon, form: BaseImageStep },
]);

export default function DevContainerGeneratorPage() {
  const [cookies, setCookie] = useCookies();
  const customConfig = cookies["devcontainer-custom-config"];
  const [outputTabShown, setOutputTabShown] = useState<string>("Dockerfile");
  const [showAdvancedSteps, setShowAdvancedSteps] = useState<boolean>(false);
  const [currentStepIdx, _setCurrentStepIdx] = useState<number>(0);
  const [furthestStepIdx, setFurthestStepIdx] = useState<number>(0);
  const formManager = useForm<AppState>();
  console.log(
    "render",
    formManager.formState.errors,
    formManager.watch("baseImage")
  );
  const setCurrentStepIdx = (idx: number) => {
    if (idx > furthestStepIdx) {
      setFurthestStepIdx(idx);
    }
    _setCurrentStepIdx(idx);
  };

  const currentStep = advancedSteps[currentStepIdx];

  return (
    <MainLayout className="max-w-full">
      <h1 className="pb-5 text-center">Dev-Container Generator App</h1>
      <div className="flex">
        <Panel className="w-1/2 p-3 pb-6 ml-6 mr-3">
          <div className="flex mb-3">
            {(showAdvancedSteps ? advancedSteps : basicSteps).map(
              (step, idx) => {
                const clickable =
                  idx <= furthestStepIdx && idx !== currentStepIdx;

                return (
                  <div
                    className={`${
                      clickable ? "cursor-pointer group" : ""
                    } w-1/${showAdvancedSteps ? 6 : 3}`}
                    key={idx}
                    onClick={() => {
                      if (clickable) {
                        setCurrentStepIdx(idx);
                      }
                    }}
                  >
                    <div className="relative mb-2">
                      {idx == 0 ? null : (
                        <div
                          className="absolute flex align-center items-center align-middle content-center"
                          style={{
                            width: "calc(100% - 2.5rem - 1rem)",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                            <div
                              className="w-0 bg-green-300 py-1 rounded"
                              style={{
                                width:
                                  furthestStepIdx > idx - 1
                                    ? "100%"
                                    : furthestStepIdx == idx - 1
                                    ? "33%"
                                    : "0",
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                      <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center group-hover:shadow">
                        <span className="text-center text-white w-full">
                          <step.icon />
                        </span>
                      </div>
                    </div>

                    <div
                      className={`text-xs text-center group-hover:underline select-none ${
                        idx == currentStepIdx ? "font-bold" : ""
                      }`}
                    >
                      {step.text}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <div className="m-3 mt-6">
            <currentStep.form {...formManager} />
            <Button
              className="bg-green-400 text-white float-right m-3 disabled:bg-gray-200"
              onClick={() => {
                if (formManager.formState.isValid) {
                  setCurrentStepIdx(currentStepIdx + 1);
                } else {
                  formManager.trigger();
                  formManager.formState.isSubmitted = true;
                }
              }}
              disabled={
                Object.keys(formManager.formState.errors.baseImage ?? {})
                  .length > 0
              }
            >
              Next Step
            </Button>
          </div>
        </Panel>

        <div className="w-1/2 ml-3 mr-6 -mt-2">
          <div className="w-full pt-2 h-12">
            {/* <h2 className="inline-block pr-10">Output</h2> */}
            {["Dockerfile", "devcontainer.json"].map((tab) => {
              const chosen = tab == outputTabShown;
              return (
                <Button
                  key={tab}
                  className={`rounded-b-none ${
                    chosen ? "text-gray-200 cursor-default" : ""
                  } focus:outline-none`}
                  style={chosen ? { backgroundColor: "#2a2734" } : {}}
                  onClick={() => {
                    setOutputTabShown(tab);
                  }}
                >
                  {tab}
                </Button>
                // <button
                //   className={`inline-block px-5 py-2 mb-0 rounded-t z-0 transition bg-gray-200 ${

                //   }`}
                //   style={chosen ? { backgroundColor: "#2a2734" } : {}}
                //   onClick={() => {
                //     setOutputTabShown(tab);
                //   }}
                // >
                //   {tab}
                // </button>
              );
            })}
            {/* A mistake ? copy+paste seems easier here
            <Button className="float-right h-9">
              <DownloadFiles className="-mt-1 h-8" />
            </Button> */}
          </div>

          <CodeBlock language="json" className="z-50 rounded-tl-none">
            Hello World
          </CodeBlock>
        </div>
      </div>
    </MainLayout>
  );
}
