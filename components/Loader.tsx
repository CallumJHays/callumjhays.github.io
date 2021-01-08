export default function Loader({ loaded, children, dim = true }) {
  return (
    <div className="relative">
      {loaded ? null : (
        <div
          className={
            "w-full h-full z-20 absolute flex flex-col justify-center" +
            (dim ? " bg-black bg-opacity-30" : "")
          }
        >
          <img
            className="animate-spin h-20"
            src={require("assets/Spinner.svg").default}
          />
        </div>
      )}
      {children}
    </div>
  );
}
