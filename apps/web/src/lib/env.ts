import { type Plugin, loadEnv } from 'vite';
import { z } from 'zod';

const envSchema = z.object({
  VITE_BASE_API_URL: z.string().min(1),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnvPluginVite(): Plugin {
  return {
    name: 'validate-env',
    config: (_, { mode }) => {
      const env = loadEnv(mode, process.cwd());
      const result = envSchema.safeParse(env);

      if (!result.success) {
        console.log(result.error);
        console.error(
          'Invalid environment variables:',
          result.error.flatten().fieldErrors,
        );
        throw new Error('Invalid environment variables');
      }
    },
  };
}
