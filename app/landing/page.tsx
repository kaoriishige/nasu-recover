
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 px-6 py-12 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-10 text-center">
        <img
          src="/hero-smile-woman.jpg"
          alt="笑顔の女性"
          className="mx-auto w-full max-w-md rounded-lg shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600">みんなの那須アプリ</h1>
        <p className="text-xl font-semibold text-blue-700">
          🎉 まずは7日間無料でお試し使い放題！
        </p>
        <p className="text-lg">
          特売情報・今日の運勢・相性診断・地域情報アプリ、あなたに役立つ55選、ぜんぶ入り使い放題！
        </p>
        <a href="/subscribe" className="inline-block mt-6 px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-pink-600 transition">
          📱 今すぐ無料で始める
        </a>
      </div>
    </div>
  );
}
