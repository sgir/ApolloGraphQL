
const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
  # returns an array of launches, which will never be null. Since all types in GraphQL are nullable by default, we need to add the ! to indicate that our query will always return data
    # Queries for the current user
    me: User
    launches: [Launch]! 
    launch(id: ID!): Launch
}

type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
}

type User {
    id: ID!
    email: String!
    trips: [Launch]!
}

type Mission {
    name: String
    missionPatch(size: PatchSize): String
}

type Rocket {
    id: ID!
    name: String
    type: String
}

enum PatchSize {
    SMALL
    LARGE
}

type Mutation {
    # if false, booking trips failed -- check errors
    bookTrips(launchIds: [ID]!): TripUpdateResponse!

    # if false, cancellation failed -- check errors
    cancelTrip(launchId: ID!): TripUpdateResponse!

    login(email: String): String # login token
}
    
type TripUpdateResponse {
    success: Boolean!
    launches: [Launch]!
    message: String!
}
    
    
`;

module.exports = typeDefs;
