import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

export function useGetClientInfo() {
  const eventId = useRef(v4());
  const [ip, setIp] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const [locationHref, setLocationHref] = useState("");

  useEffect(() => {
    setUserAgent(navigator.userAgent);
    setLocationHref(location.href);

    (async () => {
      const data = await fetch(
        "https://get-my-ip.thecaselygroup.dev/api/get-my-ip"
      );
      const json = (await data.json()) as { ip: string };
      setIp(json.ip);
    })();
  }, []);

  return {
    eventId: eventId.current,
    ip,
    userAgent,
    locationHref,
  };
}

export type IClientInfo = ReturnType<typeof useGetClientInfo>;
