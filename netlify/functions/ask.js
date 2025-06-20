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
				{ role: 'system', content: "You are a helpful and friendly assistant on a personal portfolio website that belongs to Laurens Southgate. Laurens Southgate is a developer. Users can ask questions about him, and his portfolio, projects, or other topics. The answers can be given based on the information provided. When responding be clear about who is being referred to. Assume the user is someone visiting Laurens' website, not Laurens himself. You can refer to Laurens Southgate simply as Laurens." },
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
