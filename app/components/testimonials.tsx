export function Testimonials() {
  const testimonials = [
    {
      name: 'Артур Гиясов',
      text: 'Благодарен Euphoria за их слаженную и быструю работу, логистика на высшем уровне, все очень оперативно доставили!',
    },
    {
      name: 'Одина Исломова',
      text: 'Пропила курс SlimFit результаты не заставили себя ждать, уже через месяц ушли объемы в талии и бедрах. Хорошие показатели и на весах.',
    },
    {
      name: 'Шерзод Махмудов',
      text: 'Хочу сказать спасибо команде специалистов, которые грамотно и доходчиво проконсультировали. Очень вежливые и внимательные операторы в call-center.',
    },
    {
      name: 'Андрей Исаев',
      text: 'Редко пишу отзывы, но после 3 месяцев использования Anfa Oku Vital, глаза после длительного рабочего дня совсем не устают, нет красноты и сухости.',
    },
    {
      name: 'Людмила Прохорова',
      text: 'Начала пить «Сустафлекс» ещё в начале мая, через неделю применения чувствуется, что колени уже не ноют на погоду, и вечерние прогулки даются легче.',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Что говорят наши клиенты
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <p className="text-muted-foreground mb-4">{testimonial.text}</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
