"use client";

import {
  Bot,
  Sparkles,
  Mic,
  SendHorizontal,
  X,
} from "lucide-react";

export default function AIAssistant() {
  return (
    <aside
      className="
        fixed
        right-0
        top-0
        z-50
        flex
        h-screen
        w-[340px]
        sm:w-[360px]
        lg:w-[380px]
        flex-col
        border-l
        border-yellow-200
        bg-white
        shadow-2xl
      "
    >
      {/* Header */}
      <div className="shrink-0 border-b border-yellow-200 bg-gradient-to-r from-[#f8b500] to-[#fceabb] p-5">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
              <Bot className="h-6 w-6 text-[#b77900]" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                CaterHUB AI
              </h2>

              <p className="text-sm text-gray-700">
                Catering Assistant
              </p>
            </div>

          </div>

          <button
            type="button"
            className="rounded-full p-2 text-gray-700 transition hover:bg-white/60"
          >
            <X size={20} />
          </button>

        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto bg-[#fffdf5] p-5">

        <div className="flex gap-3">

          <div className="mt-1 shrink-0">
            <Sparkles className="h-5 w-5 text-[#f8b500]" />
          </div>

          <div className="max-w-[280px] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-6 text-gray-700 shadow-sm">

            Hello! I'm your AI catering assistant.

            <br />
            <br />

            I can help you:

            <br />
            • Find the perfect menu
            <br />
            • Compare packages
            <br />
            • Recommend cuisines
            <br />
            • Generate instant quotations

          </div>

        </div>

      </div>

      {/* Input */}
      <div className="shrink-0 border-t border-yellow-100 bg-white p-4">

        <div className="flex items-center gap-2 rounded-full border border-yellow-200 bg-[#fffdf5] px-4 py-3">

          <input
            type="text"
            placeholder="Ask anything..."
            className="
              min-w-0
              flex-1
              bg-transparent
              text-sm
              text-gray-700
              outline-none
              placeholder:text-gray-400
            "
          />

          <button
            type="button"
            className="shrink-0 rounded-full p-2 transition hover:bg-yellow-100"
          >
            <Mic className="h-5 w-5 text-[#b77900]" />
          </button>

          <button
            type="button"
            className="
              shrink-0
              rounded-full
              bg-gradient-to-r
              from-[#f8b500]
              to-[#fceabb]
              p-2
              text-gray-900
              shadow-sm
              transition
              hover:scale-105
            "
          >
            <SendHorizontal className="h-5 w-5" />
          </button>

        </div>

      </div>

    </aside>
  );
}