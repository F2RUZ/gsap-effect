export function Departments() {
  const departments = [
    {
      name: 'Маркетинг',
      description: 'Отдел маркетинга Euphoria отвечает за знакомство потребителей с нашими уникальными продуктами.',
      icon: '📢',
    },
    {
      name: 'Колл-центр',
      description: 'Отдел колл-центра Euphoria отвечает за консультацию клиентов по нашим продуктам.',
      icon: '☎️',
    },
    {
      name: 'Логистика',
      description: 'Наша логистика обеспечивает удобную доставку продуктов Euphoria прямо к вам домой.',
      icon: '📦',
    },
  ]

  return (
    <section id="logistics" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Наши отделы</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-background p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{dept.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{dept.name}</h3>
              <p className="text-muted-foreground mb-6">{dept.description}</p>
              <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                Узнать больше →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
