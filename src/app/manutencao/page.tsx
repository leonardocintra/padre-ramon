export default function ManutencaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 rounded-4xl shadow-2xl">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Ícone de manutenção */}
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Voltamos já!</h1>

        {/* Descrição */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Estamos fazendo algumas melhorias no site da{" "}
          <span className="font-semibold text-[#0A3274]">
            Causa Padre Ramon.
          </span>
        </p>

        {/* Animação de loading */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        {/* Links de contato */}
        <div className="text-sm text-gray-500">
          <p>Dúvidas? Entre em contato:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="mailto:causadepadreramon@gmail.com"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              📧 Email
            </a>
            <a
              href="https://wa.me/5516991961997"
              className="text-green-600 hover:text-green-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
