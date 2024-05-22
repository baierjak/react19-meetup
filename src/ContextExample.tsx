import React, { createContext, use } from "react";

interface TestContextType {
  name: string;
}

const TestContext = createContext<TestContextType>({ name: "Testík" });

export const ContextExample = () => {
  return (
    <TestContext value={{ name: "Nejlepší react verze" }}>
      <ContextComponent />
    </TestContext>
  );
};

const ContextComponent = () => {
  const res = use(TestContext);

  return (
    <>
      <h2>Context example</h2>
      <p>Context data: {JSON.stringify(res)}</p>

      <title>{res.name}</title>
    </>
  );
};
