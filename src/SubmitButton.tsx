import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Upravuju..." : "Upravit jméno"}
    </button>
  );
};
