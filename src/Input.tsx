import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <label>
      Jméno
      <input
        ref={ref}
        type="text"
        name="name"
        placeholder="Zadejte jméno"
        {...props}
      />
    </label>
  );
});
