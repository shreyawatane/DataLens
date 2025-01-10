export class LangflowClient {
    constructor(private baseURL: string, private applicationToken: string) {}

    async post(endpoint: string, body: any, headers: Record<string, string> = {}) {
        const defaultHeaders = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.applicationToken}`
        };

        // Use the proxy server URL
        const url = `${this.baseURL}${endpoint}`;


        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { ...defaultHeaders, ...headers },
                body: JSON.stringify(body),
                credentials: 'omit'
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server response:', errorText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Request failed:', error);
            throw error;
        }
    }

    async initiateSession(flowId: string, langflowId: string, inputValue: string, inputType = 'chat', outputType = 'chat', stream = false, tweaks = {}) {
        const endpoint = `/run-flow`;
        const payload = {
            flowId,
            langflowId,
            message: inputValue,
            input_type: inputType,
            output_type: outputType,
            stream,
            tweaks
        };
        return this.post(endpoint, payload);
    }

    async runFlow(flowId: string, langflowId: string, inputValue: string) {
        const tweaks = {
            "ChatInput-2U1O0": {},
            "ChatOutput-9S57d": {},
            "AstraDB-Arq7d": {},
            "SplitText-d9jNS": {},
            "ParseData-wtZlo": {},
            "File-wP1aX": {},
            "Prompt-ifJyN": {},
            "AstraDB-hYFDA": {},
            "GroqModel-n6YSz": {}
        };

        const response = await this.initiateSession(flowId, langflowId, inputValue, 'chat', 'chat', false, tweaks);
        
        if (response && response.outputs) {
            const flowOutputs = response.outputs[0];
            const firstComponentOutputs = flowOutputs.outputs[0];
            return firstComponentOutputs.outputs?.message?.message?.text || 
                   firstComponentOutputs.outputs?.message || 
                   "No response received";
        }
        
        throw new Error("Invalid response format");
    }
}
