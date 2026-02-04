export function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Добро пожаловать в мир Euphoria Group!
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-foreground mb-8">
            Бизнес – это одна общая миссия: помогать людям вести здоровый образ жизни, работая вместе
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            О нас
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { year: '2017', description: 'Год основания компании. Штаб всего из 12 человек. Один небольшой офис.' },
            { year: '2020', description: 'Заметный рост. Открытие филиала в Казахстане. В штабе 100+ человек.' },
            { year: '2022', description: 'Уверенно заявляем о себе. Открытие филиала в Узбекистане. В штабе 250+ человек.' },
            { year: '2024', description: 'Филиалы в 3 странах. Выстроенная бизнес-экосистема, бесперебойная логистика, производство. В штабе 600+ человек' },
          ].map((milestone, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">{milestone.year}</h3>
              <p className="text-sm text-muted-foreground">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
