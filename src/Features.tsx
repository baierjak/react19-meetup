import { ActionButton } from "./ActionButton";
import { Form } from "./Form";
import { ContextExample } from "./ContextExample";
import { PromiseUseExample } from "./PromiseUseExample";
import OptimisticChat from "./OptimisticChat";

export const Features = () => {
  return (
    <>
      <Form />
      <ActionButton />

      <OptimisticChat />

      <PromiseUseExample />

      <ContextExample />
    </>
  );
};
