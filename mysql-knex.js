"use strict";

const db = require("knex")({
  client: "mysql2",
  connection: {
    host: "mysql.polyscale.global",
    port: 3306,
    user: "[POLYSCALE_CACHE_ID]-[DATABASE_USER]",
    password: "[PASSWORD]",
    database: "[DATABASE]",
  },
});

const sleep = async (ms = 500) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const main = async () => {
  for (let i = 0; i < 30; i++) {
    let t1 = Date.now();

    const out = await db.raw(
      `select count(*) as f, avg(salary) from salaries;`
    );

    console.log(`Query executed in: ${Date.now() - t1}ms`);
  }
  console.log(`Done`);
};

main();
