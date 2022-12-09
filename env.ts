/// <reference types="@cloudflare/workers-types" />

declare global {
  interface Env {
    SOLID: KVNamespace;
    // DO_WEBSOCKET: DurableObjectNamespace;
  }
}

export {};
