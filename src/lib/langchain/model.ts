// ./src/lib/langchain/model.ts
import { ChatOpenAI } from '@langchain/openai'

const model = new ChatOpenAI({ model: 'gpt-4o-mini' })

export default model