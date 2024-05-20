import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <label>
      Name
      <input ref={ref} type="text" name="name" {...props} />
    </label>
  );
});
