import React, { useEffect, useRef, useState, useContext } from 'react';
import chatIcon from '../../assets/svg/chat.svg'
import { ContentContext } from '../../context/ContentContext';
import './ChatBot.css'

type Message = {
	sender: 'user' | 'ai'
	text: string
}

const ChatBot = () => {
	const [messages, setMessages] = useState<Message[]>([])
	const [chatWindowOpen, setChatWindowOpen] = useState<boolean>(false)
	const [input, setInput] = useState('')
	const [pageContent, setPageContent] = useState('')
	const messagesEndRef = useRef<HTMLDivElement | null>(null)
	const { content } = useContext(ContentContext)


	useEffect(() => {
		const extractContent = () => {
			const tags = ['h1', 'h2', 'h3', 'p', 'li', 'span', 'small']
			const blacklist = ['nav', 'footer', 'aside', 'form']

			const isVisible = (el: HTMLElement) => {
				const style = window.getComputedStyle(el)
				return el.offsetParent !== null && style.display !== 'none' && style.visibility !== 'hidden'
			}

			const isRelevant = (el: HTMLElement) => {
				return !blacklist.some(tag => el.closest(tag))
			}
		
			const output: string[] = []
			tags.forEach(tag => {
				document.querySelectorAll(tag).forEach(el => {
					const htmlEl = el as HTMLElement
					if (isVisible(htmlEl) && isRelevant(htmlEl)) {
						const text = htmlEl.innerText.trim()
						if (text.length > 0) {
							output.push(`[${tag.toUpperCase()}] ${text}`)
						}
					}
				})
			})

			return output.join('\n\n')
		}

		setPageContent(extractContent())
	}, [content])

	const askQuestion = async (question: string) => {
		const userMessage: Message = { sender: 'user', text: question }
		setMessages(prev => [...prev, userMessage])

		const thinkingMessage: Message = { sender: 'ai', text: 'Thinking...' }
		setMessages(prev => [...prev, thinkingMessage])

		try {
			const res = await fetch('/.netlify/functions/ask', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ question, context: pageContent })
			})

			const data = await res.json();
			setMessages(prev => [...prev.slice(0, -1), { sender: 'ai', text: data.answer }])
		} catch (err: any) {
			setMessages(prev => [...prev.slice(0, -1), { sender: 'ai', text: `Error: ${err.message}` }])
		}
	}

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!input.trim()) return
		askQuestion(input)
		setInput('')
	}

	return (
		<div className="chat-bot">
			{
				chatWindowOpen &&
				<div className='chat-popup'>
					<div className="chat-window">
						{
							messages.map((msg, i) => (
								<div key={ i } className={ msg.sender === 'user' ? 'user-msg' : 'ai-msg' } >
									<div className="msg">
										{ msg.text }
									</div>
								</div>
							))
						}
						<div ref={ messagesEndRef } />
					</div>
					<form onSubmit={ handleSubmit } className="chat-form">
						<input
							type="text"
							className="chat-input"
							placeholder="Ask me something..."
							value={ input }
							onChange={ e => setInput(e.target.value) }
						/>
						<button type="submit" className="chat-send-btn">
							Send
						</button>
					</form>
				</div>

			}

			<button className="chat-toggle" onClick={ () => setChatWindowOpen(!chatWindowOpen) }>
				<img src={ chatIcon } width={ 36 } alt="Start a chat with the assistant" />
			</button>
		</div>
	)
}

export default ChatBot
