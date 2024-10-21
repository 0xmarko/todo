/// <reference types="vite/client" />

type Env = import('./src/lib/env').Env;

interface ImportMetaEnv extends Env {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
