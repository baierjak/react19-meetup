import { use, Suspense } from "react";

interface SuspensedComponentProps {
  promise: Promise<any>;
}

const SuspensedComponent = ({ promise }: SuspensedComponentProps) => {
  let res;

  if (Math.random() < 0.5) {
    res = use(promise);
  }

  return <p>{JSON.stringify(res)}</p>;
};

const SuspensedComponentWrapper = ({ promise }: SuspensedComponentProps) => (
  <Suspense fallback={<p>waiting for data...</p>}>
    <SuspensedComponent promise={promise} />
  </Suspense>
);

export default SuspensedComponentWrapper;
