// ./src/components/ai-response.tsx
import { Text } from 'ink'
import { useEffect, useState } from 'react'
import { createReactAgent } from '@langchain/langgraph/prebuilt'
import { MemorySaver } from '@langchain/langgraph'
import model from '../lib/langchain/model'
import tools from '../lib/langchain/tools'

interface AiResponseProps {
  messages: string | string[]
}

const AiResponse = ({ messages }: AiResponseProps) => {
  const [responseMessage, setResponseMessage] = useState('')

  // This is a React hook that runs the code inside the function whenever the
  // `messages` prop changes.
  useEffect(() => {
    // We're going to define an async function that will process the messages
    const processResponse = async () => {
      // We're going to create an agent using the `createReactAgent` function.
      // The React being referred to here is not the React library, but the
      // [ReAct Agent architecture](https://arxiv.org/abs/2210.03629).
      const agent = createReactAgent({
        llm: model,
        tools,
        checkpointSaver: new MemorySaver(),
      })

      // We're going to invoke the agent with a system message and the user's
      // message. The `thread_id` is set to 42.
      const response = await agent.invoke(
        {
          messages: [
            {
              role: 'system',
              content:
                'This is K-Ink an AI CLI tool.',
            },
            ...(Array.isArray(messages) ? messages : [messages]).map(
              content => ({ role: 'user', content }),
            ),
          ],
        },
        { configurable: { thread_id: 42 } },
      )

      // We're going to the most recent message content from the response.
      const mostRecentMessageContent =
        response.messages[response.messages.length - 1].content

      // If the most recent message content is a string, we're going to set it.
      if (typeof mostRecentMessageContent === 'string') {
        setResponseMessage(mostRecentMessageContent)
      }
    }

    processResponse()
  }, [messages])

  // We're going to render the response message as a text.
  return <Text>{responseMessage}</Text>
}

export default AiResponse