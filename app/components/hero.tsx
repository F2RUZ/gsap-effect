import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.jpg"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pretty">
          Для здоровой и активной жизни выбирай Эйфорию.
        </h1>
        <p className="text-lg md:text-xl mb-8 text-balance">
          Только природные компоненты. Все средства безопасны для здоровья
        </p>
        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Наша продукция
        </button>
      </div>
    </section>
  )
}
