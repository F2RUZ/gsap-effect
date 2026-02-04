export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">EUPHORIA GROUP</h3>
            <p className="text-sm opacity-90">Для здоровой и активной жизни выбирай Эйфорию</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80">О нас</a></li>
              <li><a href="#" className="hover:opacity-80">Карьера</a></li>
              <li><a href="#" className="hover:opacity-80">Пресса</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Продукты</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80">Каталог</a></li>
              <li><a href="#" className="hover:opacity-80">Новости</a></li>
              <li><a href="#" className="hover:opacity-80">Акции</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+998" className="hover:opacity-80">+998 (99) 123-45-67</a></li>
              <li><a href="mailto:info@euphoria.uz" className="hover:opacity-80">info@euphoria.uz</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p>© Phoenix Core Laboratory 2024</p>
          <p className="opacity-80 mt-2">Все права защищены</p>
        </div>
      </div>
    </footer>
  )
}
