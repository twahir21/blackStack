import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

console.log(`
  🚀 BlackStack Server initialized: 🦊 Elysia is running ... at http://${app.server?.hostname}:${app.server?.port}
  `);