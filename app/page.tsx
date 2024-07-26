"use client";

import { useChat } from "ai/react";
import Markdown from "react-markdown";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full mx-2 stretch mb-24">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          <Markdown>{m.content}</Markdown>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="fixed bottom-0 w-full max-w-md py-2 px-4 mb-8 mx-auto border border-gray-300 rounded-full"
          placeholder="메시지를 입력하세요."
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
