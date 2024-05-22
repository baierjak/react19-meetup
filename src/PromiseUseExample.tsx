import SuspensedComponent from "./SuspensedComponent";

const fetchData = async () => {
  "use server";

  const res = await fetch("https://api.chucknorris.io/jokes/random");
  await new Promise((r) => setTimeout(r, 5000));

  return res.json();
};

export const PromiseUseExample = () => {
  const requestPromise = fetchData();

  return <SuspensedComponent promise={requestPromise} />;
};
