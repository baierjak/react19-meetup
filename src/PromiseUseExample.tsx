import { useCallback, useEffect, useMemo } from "react";
import SuspensedComponent from "./SuspensedComponent";

const fetchData = async () => {
  "use server";

  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

export const PromiseUseExample = () => {
  const requestPromise = useMemo(fetchData, []);

  return <SuspensedComponent promise={requestPromise} />;
};
