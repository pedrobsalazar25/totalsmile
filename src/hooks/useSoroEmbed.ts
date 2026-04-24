import { useEffect } from "react";

const SORO_SRC =
  "https://app.trysoro.com/api/embed/07804d90-9cab-4971-b047-4f28ca7e483f";

// Module-level guard so HMR / re-mounts don't re-inject the script.
let injected = false;

export const useSoroEmbed = () => {
  useEffect(() => {
    if (injected) return;
    if (document.querySelector<HTMLScriptElement>(`script[src="${SORO_SRC}"]`)) {
      injected = true;
      return;
    }
    const script = document.createElement("script");
    script.src = SORO_SRC;
    script.defer = true;
    document.body.appendChild(script);
    injected = true;
  }, []);
};
