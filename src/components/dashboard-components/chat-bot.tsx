import { useState, useEffect, useRef } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { LangflowClient } from "@/utils/langflow-client";
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from "framer-motion";

interface Message {
	id: number;
	text: string;
	isBot: boolean;
	timestamp: Date;
}

const MessageBubble = ({ message }: { message: Message }) => {
	const formattedTime = message.timestamp.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit'
	});

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
		>
			<div className={`flex ${message.isBot ? 'flex-row' : 'flex-row-reverse'} max-w-[80%] items-start gap-2`}>
				<div className={`w-8 h-8 rounded-full flex items-center justify-center ${
					message.isBot ? 'bg-green-100' : 'bg-green-600'
				}`}>
					{message.isBot ?
						<Bot className="w-5 h-5 text-green-600" /> :
						<User className="w-5 h-5 text-white" />
					}
				</div>
				<div className={`flex flex-col ${message.isBot ? 'items-start' : 'items-end'}`}>
					<div
						className={`p-3 rounded-lg ${
							message.isBot
								? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
								: 'bg-green-600 text-white'
						}`}
					>
						{message.isBot ? (
							<ReactMarkdown
								className="prose dark:prose-invert max-w-none"
								components={{
									p: ({ children }) => <p className="m-0">{children}</p>,
									pre: ({ children }) => (
										<pre className="bg-gray-800 text-gray-100 rounded p-2 my-2 overflow-x-auto">
											{children}
										</pre>
									),
									code: ({ children }) => (
										<code className="bg-gray-800 text-gray-100 rounded px-1">
											{children}
										</code>
									),
								}}
							>
								{message.text}
							</ReactMarkdown>
						) : (
							<p className="m-0">{message.text}</p>
						)}
					</div>
					<span className="text-xs text-gray-500 mt-1">{formattedTime}</span>
				</div>
			</div>
		</motion.div>
	);
};

export const Chatbot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([]);
	const [inputText, setInputText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const langflowClient = new LangflowClient(
		import.meta.env.VITE_API_BASE_URL,
		import.meta.env.VITE_API_AUTH_TOKEN
	);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const toggleChatbot = () => {
		setIsOpen(!isOpen);
		setError("");
	};

	const sendMessage = async () => {
		if (!inputText.trim()) return;

		const newMessage: Message = {
			id: Date.now(),
			text: inputText,
			isBot: false,
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, newMessage]);
		setInputText("");
		setIsLoading(true);
		setError("");

		try {
			const botResponse = await langflowClient.runFlow(
				import.meta.env.VITE_FLOW_ID,
				import.meta.env.VITE_LANGFLOW_ID,
				inputText
			);

			setMessages((prev) => [...prev, {
				id: Date.now(),
				text: botResponse,
				isBot: true,
				timestamp: new Date(),
			}]);
		} catch (err) {
			setError(`Failed to send message: ${err instanceof Error ? err.message : 'Unknown error'}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<button
				onClick={toggleChatbot}
				className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200 z-50"
			>
				<span className="font-semibold">Chat</span>
			</button>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					className="fixed bottom-0 right-0 w-full md:w-[32rem] h-[85vh] md:h-auto md:bottom-16 md:right-4 bg-white rounded-t-lg md:rounded-lg shadow-2xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50"
				>
					<div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
						<h2 className="text-xl font-bold text-green-600 dark:text-green-400">Assistant</h2>
						<button onClick={toggleChatbot} className="hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded">
							<X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
						</button>
					</div>
					<div className="p-2 md:p-4">
						<div className="h-[calc(85vh-12rem)] md:h-96 overflow-y-auto">
							<AnimatePresence>
								{messages.map((message) => (
									<MessageBubble key={message.id} message={message} />
								))}
							</AnimatePresence>
							{isLoading && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="flex items-center gap-2 text-left mb-4"
								>
									<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
										<Bot className="w-5 h-5 text-green-600" />
									</div>
									<div className="typing-indicator p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
										<span className="animate-pulse">●</span>
										<span className="animate-pulse delay-75">●</span>
										<span className="animate-pulse delay-150">●</span>
									</div>
								</motion.div>
							)}
							{error && (
								<div className="text-center text-red-500 text-sm mb-2">
									{error}
								</div>
							)}
							<div ref={messagesEndRef} />
						</div>
						<div className="mt-2 md:mt-4 flex">
							<input
								type="text"
								value={inputText}
								onChange={(e) => setInputText(e.target.value)}
								onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
								className="flex-1 p-3 border border-gray-300 rounded-l-lg dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-green-500"
								placeholder="Type a message..."
							/>
							<button
								onClick={sendMessage}
								disabled={isLoading}
								className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-r-lg transition-colors duration-200 flex items-center"
							>
								<Send className="w-5 h-5" />
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
};