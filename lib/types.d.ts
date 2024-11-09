declare module "gemini-ai" {
  export default class Gemini {
    constructor(apiKey: string);
    request(options: {
      model: string;
      prompt: string;
      maxTokens: number;
      temperature: number;
    }): Promise<{ choices: { text: string }[] }>;
  }
}
