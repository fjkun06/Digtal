export const PauseIcon = ({ state,handler }) => {
  return (
    <>
      {state === "playing" && (
        <span onClick={handler}>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="8" height="19" fill="none" />
            <rect x="11" width="8" height="19" fill="none" />
          </svg>
        </span>
      )}
    </>
  );
};
