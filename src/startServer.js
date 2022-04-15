import { ApolloServer } from 'apollo-server'
import { PubSub } from 'graphql-subscriptions'
import mongoose from 'mongoose'

function startServer({ typeDefs, resolvers }) {
  mongoose.connect('mongodb+srv://apollo-gql:IEwYaaSKeghjOZNg@gql.bcjyd.mongodb.net/graphql?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err) => {
    if (err) {
      console.log(err.message)
      return
    }
    console.log('Connected to MongoDB')
  } )

  const pubsub = new PubSub()
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: {
      pubsub
    }
  })

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
}

export default startServer
