export function Quiz() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary/10 to-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Принимайте биодобавки осознанно
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Не уверены, с чего начать? Пройдите онлайн-опрос, чтобы подобрать идеальный набор
        </p>

        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Пройти опрос
        </button>
      </div>
    </section>
  )
}
