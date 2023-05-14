import { createEffect, createSignal, onCleanup, onMount } from "solid-js";

function useWindowSize() {
  const [windowSize, setWindowSize] = createSignal({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () =>
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  onMount(() => window.addEventListener("resize", handleResize));

  onCleanup(() => window.removeEventListener("resize", handleResize));

  return [windowSize];
}

export default useWindowSize;
