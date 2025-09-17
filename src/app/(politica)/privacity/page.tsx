"use client";

export default function PrivacityPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      <p className="text-sm text-gray-500 mb-8">Última atualização: 17/09/2025 12:59</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Informações que coletamos
        </h2>
        <p>
          Dados fornecidos voluntariamente: e-mail, número de WhatsApp e
          mensagem do testemunho/graça recebida.
        </p>
        <p className="mt-2">
          Não coletamos informações sensíveis além das que o próprio usuário
          fornece.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Como usamos suas informações
        </h2>
        <p>
          Para entrar em contato, caso necessário, em relação ao testemunho
          enviado.
        </p>
        <p className="mt-2">Para organizar e manter um registro dos relatos.</p>
        <p className="mt-2">
          Para eventual publicação (somente com autorização ou de forma
          anônima).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Compartilhamento de informações
        </h2>
        <p>
          Não vendemos, alugamos ou compartilhamos suas informações pessoais com
          terceiros.
        </p>
        <p className="mt-2">
          Somente pessoas responsáveis pela administração do site terão acesso
          aos dados.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Segurança dos dados</h2>
        <p>
          Tomamos medidas razoáveis para proteger as informações contra acesso
          não autorizado, alteração ou divulgação indevida.
        </p>
        <p className="mt-2">
          O usuário deve estar ciente de que nenhum sistema é 100% seguro na
          internet.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Direitos do usuário</h2>
        <p>
          Você pode solicitar a exclusão ou alteração dos seus dados a qualquer
          momento, entrando em contato conosco pelo e-mail disponibilizado no
          site.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Alterações na Política de Privacidade
        </h2>
        <p>
          Podemos atualizar esta Política periodicamente. A versão atualizada
          estará sempre disponível nesta página.
        </p>
      </section>
    </div>
  );
}
