


function Footer() {

    const sections = [
        {
            title: 'Comprar e Saber Mais',
            links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comprar modelos', 'Acessórios']
        },
        {
            title: 'Especificações',
            links: ['Características técnicas', 'Câmera', 'Bateria', 'Display']
        },
        {
            title: 'Suporte',
            links: ['Suporte ao iPhone', 'AppleCare+', 'iOS26', 'Contato']
        },
        {
            title: 'Apple',
            links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']
        }
    ];

    const buttonLinks = ['Política de Privacidade', 'Termos de Uso', 'Vendas'];

    return (
        <footer className='bg-gray-900 border-t border-gray-800'>
            <div className="max-w-7xl mx-auto py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index} className='mb-8'>
                            <h4 className='font-semibold mb-4'>{section.title}</h4>
                            <ul className='space-y-2 text-sm text-gray-400'>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className='text-gray-400 hover:text-gray-200 transition-colors duration-300 cursor-pointer'>
                                        <a href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-md">Copyright &copy; 2026 Apple Inc. Todos os direitos reservados.</p>
                        <div className="flex gap-6">
                            {buttonLinks.map((link, index) => (
                                <a href="#" key={index} className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">{link}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;