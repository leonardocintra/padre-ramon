import Link from "next/link";
import { BookHeart, Sparkles } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8 max-w-4xl mx-auto px-4">
      {/* Card de Registro de Visita */}
      <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>

        <div className="relative p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <BookHeart className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Visitei o Túmulo
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Registre sua visita ao túmulo e suas orações em memória do Padre
                Ramon
              </p>
            </div>
          </div>

          <Link
            href="/registro-visita"
            className="block w-full px-4 py-3 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 active:scale-98 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Registrar Visita
          </Link>
        </div>
      </div>

      {/* Card de Graça Alcançada */}
      <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-50"></div>

        <div className="relative p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Graça Alcançada
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Compartilhe seu testemunho de graça recebida através da
                intercessão do Padre Ramon
              </p>
            </div>
          </div>

          <Link
            href="/registro-graca"
            className="block w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 active:scale-98 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Informar Graça Alcançada
          </Link>

          <p className="mt-3 text-xs text-gray-500 italic text-center">
            Testemunhos serão enviados a Roma
          </p>
        </div>
      </div>
    </div>
  );
}
