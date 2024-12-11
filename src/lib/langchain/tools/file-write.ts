// ./src/lib/langchain/tools/file-write.ts
import { tool } from '@langchain/core/tools'
import { writeFile } from 'node:fs/promises'
import { z } from 'zod'

const FileWriteSchema = z.object({
  path: z.string(),
  content: z.string(),
})

const fileWriteTool = tool(
  async ({ path = process.cwd(), content }): Promise<boolean> => {
    await writeFile(path, content, { encoding: 'utf8' })

    return true
  },
  {
    name: 'file-write',
    description: 'Write a file',
    schema: FileWriteSchema,
  },
)

export default fileWriteTool