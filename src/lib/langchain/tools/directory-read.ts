// ./src/lib/langchain/tools/directory-read.ts
import { tool } from '@langchain/core/tools'
import { readdir } from 'node:fs/promises'
import { z } from 'zod'

const DirectoryReadSchema = z.object({
  path: z.string(),
})

const directoryReadTool = tool(
  async ({ path }): Promise<string[]> => {
    const files = await readdir(path, { encoding: 'utf8' })
    
    return files
  },
  {
    name: 'directory-read',
    description: 'Read the contents of a directory',
    schema: DirectoryReadSchema,
  },
)

export default directoryReadTool
