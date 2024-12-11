// ./src/components/app.tsx
import { parseArgs } from 'node:util'
import AiResponse from './ai-response'

const App = () => {
  // Parse the command line arguments
  const args = parseArgs({
    args: process.argv.slice(2),
    options: { message: { type: 'string', short: 'm' } },
  })

  return <AiResponse messages={args.values.message ?? ''} />
}

export default App