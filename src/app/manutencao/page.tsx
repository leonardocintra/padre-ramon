"use client";

import ActionButtons from "@/components/ActionButtons";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function ManutencaoPage() {
  return (
    <section className="text-gray-600 body-font py-8">
      <div className="container px-5 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-6">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <CldImage
                  src="padre-ramon-principal"
                  alt="Padre Ramon"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Padre Ramon
                </h2>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Aguardem a divulgação oficial da nova data de lançamento do
                site!
              </p>
              <div className="flex flex-col items-center text-center justify-center space-y-5">
                <div className="my-4 text-indigo-800 font-semibold">
                  Divulgação prevista para ocorrer no Tempo do Advento!
                </div>

                {/* Animação de loading */}
                <div className="flex justify-center sm:justify-start items-center mb-6">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Links de contato */}
              <div className="text-sm text-gray-500">
                <p className="mb-2">Dúvidas? Entre em contato:</p>
                <div className="flex justify-center sm:justify-start space-x-4">
                  <Link
                    href="mailto:causadepadreramon@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    📧 Email
                  </Link>
                  <Link
                    href="https://wa.me/5516991961997"
                    className="text-green-600 hover:text-green-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📱 WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ActionButtons />
        </div>
      </div>
    </section>
  );
}
