const { Pool, Client } = require("pg");

const connectionString =
  "postgres://[USERNAME]:[PASSWORD]@postgres.polyscale.global:5432/[DATABASE]?application_name=[POLYSCALE_CACHE_ID]";

try {
  const client = new Client({
    connectionString,
  });

  client.connect();
  client.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
    client.end();
  });
} catch (e) {
  console.log(e);
}
