export default async (req, res) => {
	const { question, context } = await req.json()

	const apiKey = process.env.OPENAI_API_KEY
	const response = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [
				{ role: 'system', content: 'Answer the question based on the page context.' },
				{ role: 'user', content: `${question}\n\nContext:\n${context}` }
			]
		}),
	})

	const data = await response.json()
	return new Response(JSON.stringify({ answer: data.choices?.[0]?.message?.content || 'No response' }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
