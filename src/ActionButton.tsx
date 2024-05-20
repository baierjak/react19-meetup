import { useState, useTransition } from "react";
import { formSubmit } from "./actions";

export const ActionButton = () => {
  const [name, setName] = useState("old name kubík");
  const [err, setError] = useState<string | undefined>(undefined);

  const [isPending, startTransition] = useTransition();

  const submitAction = async () => {
    startTransition(async () => {
      const newName = "new name jožo";
      const res: { error?: string } | undefined = await formSubmit(newName);
      await new Promise((r) => setTimeout(r, 3000));

      if (res?.error) {
        setError(res?.error);
      } else {
        setName(newName);
      }
    });
  };

  return (
    <>
      <h3>{name}</h3>

      <button onClick={submitAction} disabled={isPending}>
        {isPending ? "Submitting" : "Submit action"}
      </button>

      {err && JSON.stringify(err)}
    </>
  );
};
