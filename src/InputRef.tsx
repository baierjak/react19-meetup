import { Ref } from "react";

interface InputRefProps {
  ref: Ref<HTMLInputElement> | undefined;
}

export const InputRef = ({ ref, ...rest }: InputRefProps) => {
  return (
    <label>
      Name
      <input ref={ref} type="text" name="name" {...rest} />
    </label>
  );
};
