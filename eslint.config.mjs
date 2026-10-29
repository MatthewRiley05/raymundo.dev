import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        // Vendored animate-ui hook. Upstream syncs external state through an effect,
        // which trips react-hooks/set-state-in-effect. Not our code to restructure.
        "hooks/use-controlled-state.tsx",
    ]),
]);

export default eslintConfig;
