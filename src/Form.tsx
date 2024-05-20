import { useActionState, useEffect, useRef } from "react";
import { SubmitButton } from "./SubmitButton";
import { updateName } from "./actions";
// import { Input } from "./Input";
import { InputRef } from "./InputRef";
import { Input } from "./Input";

export const Form = () => {
  const [error, submitAction] = useActionState(updateName, null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form action={submitAction}>
      <Input ref={inputRef} />
      {/* <InputRef ref={inputRef} /> */}

      <SubmitButton />
      {/* {error && <p>{JSON.stringify(error)}</p>} */}
      {error && <p>{JSON.stringify(error)}</p>}
    </form>
  );
};
