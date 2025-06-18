import fetch from 'node-fetch'

export async function handler(event) {
	const { question, context } = JSON.parse(event.body || '{}')

	const apiKey = process.env.OPENAI_API_KEY

	if (!apiKey) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'API key missing' })
		}
	}

	try {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: 'gpt-3.5-turbo',
				temperature: 0.5,
				messages: [
					{ role: 'system', content: 'You are a helpful assistant answering based only on provided content.' }
					{ role: 'user', content: `Page content:\n${content}` }
					{ role: 'user', content: `Question: ${question}` }
				]
			})
		})

		const data = await response.json()

		return {
			statusCode: 200,
			body: JSON.stringify({ answer: data.choices?.[0]?.message?.content || 'No response' })
		}
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: err.message })
		}
	}
}
