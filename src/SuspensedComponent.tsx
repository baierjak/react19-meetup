import { use, Suspense } from "react";

interface SuspensedComponentProps {
  promise: Promise<any>;
}

const SuspensedComponent = ({ promise }: SuspensedComponentProps) => {
  // if (something) {
  const res = use(promise);
  // }

  return <p>{res.value}</p>;
};

const SuspensedComponentWrapper = ({ promise }: SuspensedComponentProps) => (
  <Suspense fallback={<p>čekám na data...</p>}>
    <SuspensedComponent promise={promise} />
  </Suspense>
);

export default SuspensedComponentWrapper;
