/**
 * Deepseekクライアントの型定義
 */
interface DeepseekOptions {
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
}

interface DeepseekConfig {
  apiKey: string;
  options: DeepseekOptions;
}

class DeepseekClient {
  private config: DeepseekConfig;

  constructor(config: DeepseekConfig) {
    this.config = config;
  }

  async sendMessage(prompt: string): Promise<string> {
    // 実際のDeepseek APIの実装はここに追加
    // 現在はモックレスポンスを返す
    return `[AI応答] ${prompt}に対する応答です。`;
  }

  async *streamMessage(prompt: string): AsyncGenerator<string> {
    // 実際のストリーミング実装はここに追加
    // 現在はモックストリームを返す
    const chunks = [
      `[AI応答] ${prompt}に対する`,
      'ストリーミング',
      '応答です。'
    ];

    for (const chunk of chunks) {
      yield chunk;
      // ストリーミングをシミュレート
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
}

/**
 * Deepseekサービスのインスタンス
 */
let deepseekService: DeepseekClient | null = null;

/**
 * Deepseekサービスのシングルトンインスタンスを取得
 */
export function getDeepseekService(): DeepseekClient {
  if (!deepseekService) {
    if (!import.meta.env.DEEPSEEK_API_KEY) {
      throw new Error('DEEPSEEK_API_KEY環境変数が設定されていません');
    }

    deepseekService = new DeepseekClient({
      apiKey: import.meta.env.DEEPSEEK_API_KEY,
      options: {
        temperature: 0.7,
        maxTokens: 2000,
        topP: 0.95,
        frequencyPenalty: 0,
        presencePenalty: 0,
      }
    });
  }

  return deepseekService;
}

/**
 * エラーメッセージの型定義
 */
export interface AIError {
  message: string;
  code: string;
  details?: unknown;
}

/**
 * AIレスポンスの型定義
 */
export interface AIResponse {
  content: string;
  error?: AIError;
}

/**
 * AIメッセージの送信とエラーハンドリング
 */
export async function sendAIMessage(prompt: string): Promise<AIResponse> {
  try {
    const service = getDeepseekService();
    const response = await service.sendMessage(prompt);
    return {
      content: response,
    };
  } catch (error) {
    console.error('AI通信エラー:', error);
    return {
      content: '',
      error: {
        message: 'AIとの通信中にエラーが発生しました',
        code: 'AI_COMMUNICATION_ERROR',
        details: error
      }
    };
  }
}

/**
 * AIストリームレスポンスの型定義
 */
export interface AIStreamResponse {
  content: string;
  isComplete: boolean;
  error?: AIError;
}

/**
 * AIメッセージのストリーミング送信
 */
export async function* streamAIMessage(prompt: string): AsyncGenerator<AIStreamResponse> {
  try {
    const service = getDeepseekService();
    const stream = service.streamMessage(prompt);

    for await (const chunk of stream) {
      yield {
        content: chunk,
        isComplete: false
      };
    }

    yield {
      content: '',
      isComplete: true
    };
  } catch (error) {
    console.error('AIストリーミングエラー:', error);
    yield {
      content: '',
      isComplete: true,
      error: {
        message: 'AIとのストリーミング中にエラーが発生しました',
        code: 'AI_STREAMING_ERROR',
        details: error
      }
    };
  }
}
