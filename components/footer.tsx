const Footer = () => {
    return (
      <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 
                            text-transparent bg-clip-text">IMS</h4>
              <p className="text-gray-400">Revolutionizing inventory management with AI-powered solutions</p>
            </div>
            {['Products', 'Company', 'Resources', 'Legal'].map((section) => (
              <div key={section}>
                <h5 className="text-white font-semibold mb-4">{section}</h5>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {section} Link {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            © 2025 IMS. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  