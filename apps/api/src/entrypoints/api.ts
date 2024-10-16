import { app } from '../app';
import { env } from '../lib/env';

(async () => {
  try {
    app.listen(env.PORT, ({ hostname, port }) => {
      console.log(`\x1b[32m✔\x1b[0m Server is running at ${hostname}:${port}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
