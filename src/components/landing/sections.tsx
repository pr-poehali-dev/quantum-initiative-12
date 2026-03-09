import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm tracking-widest uppercase">Старт открыт</Badge>,
    title: "Идея — это только начало.",
    content: "Превращаем замыслы в продукты, которые работают.",
    showButton: true,
    buttonText: 'Начать прямо сейчас'
  },
  {
    id: 'about',
    title: 'Зачем ждать завтра?',
    content: 'Каждый день без запуска — это упущенные клиенты. Мы помогаем быстро выйти на рынок: от первой идеи до готового продукта без лишних шагов.'
  },
  {
    id: 'features',
    title: 'Всё для вашего роста.',
    content: 'Экспертное сопровождение, современные инструменты и живое сообщество — всё, чтобы ваш проект взлетел быстро и уверенно.'
  },
  {
    id: 'testimonials',
    title: 'Результаты говорят сами.',
    content: 'Десятки проектов запущены. Сотни довольных клиентов. Участники находят свою аудиторию и масштабируют бизнес быстрее, чем ожидали.'
  },
  {
    id: 'join',
    title: 'Ваш момент — прямо сейчас.',
    content: 'Не откладывайте. Присоединяйтесь к тем, кто уже строит своё будущее — и сделайте первый шаг сегодня.',
    showButton: true,
    buttonText: 'Присоединиться'
  },
]
