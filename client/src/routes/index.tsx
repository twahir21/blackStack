import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const showDocs = useSignal(false);
  return (
  <>
    {/* 1. DEFINING TITLE  */}
    <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6">
      <h1 class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-bounce">
        👋 Welcome to <span class="drop-shadow-lg">blackStack</span> ⚡
      </h1>

      {/* 2. DEFINING TECHNOLOGIES  */}
      <p class="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-2xl leading-relaxed">
        Your modern fullstack playground — <br class="hidden md:block"/> 
        <span class="text-green-400">QwikCity - SSR</span> + <span class="text-blue-400">Elysia.js API</span> + <span class="text-yellow-400">Drizzle-ORM (PostgreSQL) </span> + <span class="text-pink-400">TailwindCSS</span> + <span class="text-red-400">Redis for caching</span> 🛠️
      </p>

      {/* 3. GITHUB REPO AND QWIK DOCUMENTATION  */}
      <div class="mt-8 flex gap-4 relative">
        {/* 🚀 Get Started Button */}
        <a
          href="https://github.com/blackcoder/blackstack"
          class="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          🚀 Get Started
        </a>

        {/* 📖 Docs Button (toggle) */}
        <button
          onClick$={() => (showDocs.value = !showDocs.value)}
          class="px-6 py-3 rounded-2xl bg-gray-800 border border-gray-700 font-semibold shadow-md hover:bg-gray-700 transition-colors"
        >
          📖 Docs
        </button>

        {/* Dropdown Menu */}
        <div
          class={[
            'absolute top-15 right-0 flex flex-col gap-2 transition-all duration-300',
            showDocs.value
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-3 pointer-events-none',
          ]}
        >
          <a
            href="https://qwik.builder.io/"
            target="_blank"
            class="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white border-2 border-black shadow-lg transition-transform hover:scale-105"
          >
            ⚡ Qwik Docs
          </a>
          <a
            href="https://elysiajs.com/"
            target="_blank"
            class="px-5 py-2 rounded-xl bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 text-white shadow-lg transition-transform hover:scale-105 border-2 border-black"
          >
            🦊 Elysia Docs
          </a>
        </div>
      </div>

      {/* 4. FOOTER AND DEVELOPER'S NICKNAME OF THE PROJECT  */}
      <footer class="mt-12 text-gray-500 text-sm">
        Built with ❤️ by <span class="text-purple-400">blackCoder</span>
      </footer>
    </div>
  </>
  );
});

export const head: DocumentHead = {
  title: 'blackStack',
  meta: [
    {
      name: 'description',
      content: 'Your modern fullstack playground',
    },
  ],
};
