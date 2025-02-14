/**
 * AIプロンプトテンプレート
 * 各機能に対応するプロンプトテンプレートを定義します
 */
export const PROMPT_TEMPLATES = {
  CODE_REVIEW: `以下のコードをレビューして改善点を提案してください:

コード:
{code}

特に以下の点に注目してレビューをお願いします:
- コードの品質(可読性、保守性)
- パフォーマンスの最適化
- セキュリティの考慮事項
- TypeScriptのベストプラクティス
- エラーハンドリング
- テスト容易性`,

  CODE_EXPLAIN: `以下のコードの動作を詳しく説明してください:

コード:
{code}

以下の点について説明をお願いします:
- コードの全体的な目的と機能
- 主要なロジックの説明
- 使用されているテクニックや設計パターン
- 重要な変数やメソッドの役割
- データの流れ
- エラーハンドリングの方法`,

  CODE_SUGGEST: `以下の要件に基づいてコードの提案をお願いします:

要件:
{requirements}

以下の点を考慮したコードを提案してください:
- TypeScriptの型安全性
- モダンなReactの機能(Hooks, Context等)
- エラーハンドリング
- パフォーマンスの最適化
- テスト容易性
- コードの再利用性
- セキュリティのベストプラクティス`
};

/**
 * プロンプトテンプレートの型定義
 */
export type PromptTemplate = keyof typeof PROMPT_TEMPLATES;

/**
 * プロンプトテンプレートを適用する関数
 */
export function applyTemplate(template: PromptTemplate, params: Record<string, string>): string {
  let prompt = PROMPT_TEMPLATES[template];
  Object.entries(params).forEach(([key, value]) => {
    prompt = prompt.replace(`{${key}}`, value);
  });
  return prompt;
}
