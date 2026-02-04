export function WhyUs() {
  const reasons = [
    { title: 'Надежность', icon: '✓' },
    { title: 'Состав', icon: '🧪' },
    { title: 'Эстетика', icon: '✨' },
    { title: 'Помощь', icon: '🤝' },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Почему мы?</h2>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-background p-12 rounded-xl">
          <h3 className="text-2xl font-bold text-primary mb-6">Наше преимущество - состав</h3>
          <p className="text-muted-foreground leading-relaxed">
            Мы черпаем вдохновение в природе, создавая продукт с использованием передовых технологий. Наши решения основаны на создании биодоступных форм нутриентов, которые обеспечивают максимальное усвоение и поддержку организма. Продукт разрабатывается для долговременного и безопасного воздействия на здоровье. Мы объединяем науку и природу для достижения устойчивых результатов.
          </p>
        </div>
      </div>
    </section>
  )
}
