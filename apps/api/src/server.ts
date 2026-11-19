import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/health", async () => {
  return { status: "ok" };
});

const start = async (): Promise<void> => {
  try {
    await app.listen({ host: "127.0.0.1", port: 3000 });
  } catch (error) {
    app.log.error(error);
    process.exitCode = 1;
  }
};

void start();
