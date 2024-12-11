// ./src/lib/langchain/tools/index.ts
import fileRead from './file-read'
import fileWrite from './file-write'
import directoryRead from './directory-read'

const tools = [fileRead, fileWrite, directoryRead]

export default tools
