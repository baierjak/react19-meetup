// @ts-nocheck

import { useOptimistic, useState, useRef } from "react";
import { deliverMessage } from "./actions";

type Message = { text: string; sending: boolean; key: number; error: null };

export default function OptimisticChat() {
  const [messages, setMessages] = useState([
    { text: "First message!", sending: false, key: 1, error: null },
  ]);

  async function sendMessage(formData: FormData) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages: Message[]) => [
      ...messages,
      {
        text: sentMessage.message ?? formData.get("message"),
        error: sentMessage.error,
      },
    ]);
  }

  return <Thread messages={messages} sendMessage={sendMessage} />;
}

function Thread({ messages, sendMessage }) {
  const formRef = useRef<HTMLFormElement>(null);

  async function formAction(formData: FormData) {
    addOptimisticMessage(formData.get("message"));
    formRef?.current?.reset();
    await sendMessage(formData);
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <>
      {optimisticMessages.map((message: Message, index: number) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
          {!!message.error && <small> ({message.error})</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="type message..." />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
