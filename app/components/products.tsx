import Image from 'next/image'

export function Products() {
  const products = [
    {
      name: 'SlimFit',
      description: 'Пропила курс SlimFit результаты не заставили себя ждать, уже через месяц ушли объемы в талии и бедрах.',
      image: '/product-slimfit.jpg',
    },
    {
      name: 'Anfa Oku Vital',
      description: 'После 3 месяцев использования Anfa Oku Vital, глаза после длительного рабочего дня совсем не устают.',
      image: '/product-vital.jpg',
    },
    {
      name: 'Sustaflex',
      description: 'Начала пить «Сустафлекс» ещё в начале мая, через неделю применения чувствуется, что колени уже не ноют.',
      image: '/product-sustaflex.jpg',
    },
  ]

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 text-primary">Рекомендуемые продукты</h2>
          <p className="text-lg text-muted-foreground">Наши новые предложения!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Посмотреть всё
          </button>
        </div>
      </div>
    </section>
  )
}
