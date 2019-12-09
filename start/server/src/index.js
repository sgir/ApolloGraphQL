const { ApolloServer } = require('apollo-server'); //require the  apollo-server for building the graph
const typeDefs = require('./schema'); //import the schema
const server = new ApolloServer({ typeDefs }); //pass the schema to the  instance of apollo server.

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
