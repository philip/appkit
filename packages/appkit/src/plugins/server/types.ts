import type { BasePluginConfig } from "shared";
import type { Plugin } from "../../plugin";
import type { SecurityConfig } from "./security/types";

export type { SecurityConfig } from "./security/types";

export interface ServerConfig extends BasePluginConfig {
  port?: number;
  plugins?: Record<string, Plugin>;
  staticPath?: string;
  autoStart?: boolean;
  host?: string;
  /** Request body size limit for JSON parsing. Default: "100kb". */
  bodyLimit?: string;
  /** Security configuration. Secure defaults applied when omitted. */
  security?: SecurityConfig;
}
