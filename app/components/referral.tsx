export function Referral() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Получите все привилегии Эйфории
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Реферальная платформа создана для того что бы каждый мог зарабатывать на том на чем он будет зарабатывать.
          Станьте частью реферальной программы Euphoria: приглашайте друзей, получайте бонусы и увеличивайте свой доход
          с каждым новым участником. Делитесь успехом и наслаждайтесь привилегиями!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Реферральная программа
          </button>
          <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors">
            Подробнее
          </button>
        </div>
      </div>
    </section>
  )
}
