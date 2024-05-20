import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending, data } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      Update
    </button>
  );
};
