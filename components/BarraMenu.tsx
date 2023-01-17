interface BarraMenuProps {
  descricao: string;
}

export default function BarraMenu(props: BarraMenuProps) {
  return (
    <div className="bg-slate-200 mt-3">
      <>
        <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div className="flex justify-center">
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Biografia
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Processo de Canonização
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Documentos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}
