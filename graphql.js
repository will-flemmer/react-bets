const graphql = require("graphql");
const fs = require("fs");

const createSchema = async () => {
  const res = await fetch('http://localhost:8080/generate-schema')
  const json = await res.json()
  const clientSchema = graphql.buildClientSchema(json);
  const schemaString = graphql.printSchema(clientSchema);
  fs.writeFileSync('schema.graphql',schemaString);
}

createSchema()
