import { useState, useTransition } from "react";
import { formSubmit } from "./actions";

export const ActionButton = () => {
  const [name, setName] = useState("Kubík");
  const [err, setError] = useState<string | undefined>(undefined);

  const [isPending, startTransition] = useTransition();

  const submitAction = async () => {
    startTransition(async () => {
      const newName = "Jožo";
      const res: { error?: string } | undefined = await formSubmit(newName);

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
        {isPending ? "Načítám..." : "Změnit jméno"}
      </button>

      {err && <pre style={{ fontSize: 14 }}>{err}</pre>}
    </>
  );
};
