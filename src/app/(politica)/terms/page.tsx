"use client";

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Termos de Serviço</h1>
      <p className="text-sm text-gray-500 mb-8">Última atualização: 03/09/2025 13:45</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Uso do site</h2>
        <p>
          Este site tem caráter informativo e religioso, com o objetivo de
          divulgar a biografia para a Causa de Beatificação do Padre Ramon e permitir que fiéis enviem seus relatos
          de graças e testemunhos. O envio de informações deve ser feito de
          forma respeitosa, sem ofensas, conteúdos ilícitos ou falsos.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Conteúdo enviado pelos usuários
        </h2>
        <p>
          Os relatos enviados (graças alcançadas, testemunhos, mensagens) são de
          responsabilidade de quem os envia.
        </p>
        <p className="mt-2">
          Ao enviar um relato, o usuário autoriza que ele seja armazenado pela
          administração do site, podendo ou não ser publicado, conforme análise
          e critério da equipe responsável.
        </p>
        <p className="mt-2">
          Informações pessoais como e-mail e WhatsApp não serão divulgadas
          publicamente.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Responsabilidade do site
        </h2>
        <p>
          O site se compromete a manter os dados fornecidos em segurança e
          confidencialidade.
        </p>
        <p className="mt-2">
          O site não se responsabiliza por informações incorretas ou incompletas
          enviadas pelos usuários.
        </p>
        <p className="mt-2">
          O site não presta aconselhamento profissional de nenhuma natureza
          (médica, psicológica, financeira etc.), sendo seu uso apenas para fins
          de fé e devoção.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Alterações nos Termos</h2>
        <p>
          Podemos atualizar estes Termos a qualquer momento, e a versão mais
          recente estará sempre disponível nesta página. O uso contínuo do site
          implica aceitação das mudanças.
        </p>
      </section>
    </div>
  );
}
