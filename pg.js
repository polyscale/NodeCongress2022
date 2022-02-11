const { Client } = require("pg");

(async () => {
  const client = new Client({
    user: "postgres",
    host: "postgres.polyscale.global",
    database: "[DATABASE]",
    password: "[PASSWORD]",
    port: 5432,
    application_name: "[POLYSCALE_CACHE_ID]",
  });

  console.log("Connecting...");

  await client.connect();

  const res = await client.query("SELECT $1::text as message", [
    "Hello world!",
  ]);

  console.log(res.rows[0].message);

  console.log("Done.");

  await client.end();
})().catch((err) => {
  console.error(err);
});
