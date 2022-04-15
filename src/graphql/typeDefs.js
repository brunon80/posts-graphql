const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')
import path from 'path'

const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypeDefs(typesArray)

export default typeDefs