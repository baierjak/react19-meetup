import { use, Suspense } from "react";

interface SuspensedComponentProps {
  promise: Promise<any>;
}

const SuspensedComponent = ({ promise }: SuspensedComponentProps) => {
  let res;

  // if (Math.random() < 0.5) {
  res = use(promise);
  // }

  return <p>{res.value}</p>;
};

const SuspensedComponentWrapper = ({ promise }: SuspensedComponentProps) => (
  <Suspense fallback={<p>čekám na vtípek...</p>}>
    <SuspensedComponent promise={promise} />
  </Suspense>
);

export default SuspensedComponentWrapper;
