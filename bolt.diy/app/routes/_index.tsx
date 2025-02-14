import { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Bolt.DIY - ようこそ' },
    { name: 'description', content: 'Bolt.DIYへようこそ。あなたのDIYプロジェクトをサポートします。' },
  ]
}

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bolt.DIY
          <span className="block text-xl text-gray-600 mt-2">
            あなたのDIYプロジェクトをサポート
          </span>
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            プロジェクトを始めましょう
          </h2>
          <p className="text-gray-600 mb-6">
            Bolt.DIYは、あなたのDIYプロジェクトをより簡単に、より楽しくするためのプラットフォームです。
            プロジェクトの計画から実行まで、すべてのステップをサポートします。
          </p>
          <button className="btn">
            プロジェクトを作成
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">簡単な計画</h3>
            <p className="text-gray-600">
              直感的なインターフェースで、プロジェクトの計画を立てることができます。
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">ステップ管理</h3>
            <p className="text-gray-600">
              プロジェクトを小さなステップに分割し、進捗を管理できます。
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">コミュニティ</h3>
            <p className="text-gray-600">
              他のDIY愛好家と知識や経験を共有できます。
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
