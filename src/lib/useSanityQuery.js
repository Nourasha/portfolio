import { useEffect, useRef, useState } from "react";
import sanityClient from "./client";

export default function useSanityQuery(query) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(query)
      .then((result) => {
        if (mountedRef.current) setData(result);
      })
      .catch(() => {
        if (mountedRef.current) setError(true);
      });

    return () => {
      mountedRef.current = false;
    };
  }, [query]);

  return { data, error };
}
