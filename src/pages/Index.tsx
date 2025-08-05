import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} className="text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">AssistPro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#program" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Программа</a>
              <a href="#teachers" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Преподаватели</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Стоимость</a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Записаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Станьте востребованным
              <span className="text-blue-600 block">бизнес-ассистентом</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Профессия будущего с зарплатой от 80 000 ₽. Освойте навыки управления бизнес-процессами 
              и станьте незаменимым помощником руководителя
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Записаться на курс
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Рынок труда бизнес-ассистентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Актуальные данные о вакансиях и зарплатах из hh.ru</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 border-blue-100">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">2,847</div>
                <p className="text-gray-600">активных вакансий на hh.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-blue-100">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">120,000₽</div>
                <p className="text-gray-600">средняя зарплата в Москве</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-blue-100">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">+34%</div>
                <p className="text-gray-600">рост спроса за год</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Кто ищет бизнес-ассистентов</h3>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Icon name="Building2" size={48} className="text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">IT-компании</h4>
                <p className="text-sm text-gray-600">45% вакансий</p>
              </div>
              <div className="text-center">
                <Icon name="TrendingUp" size={48} className="text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Консалтинг</h4>
                <p className="text-sm text-gray-600">28% вакансий</p>
              </div>
              <div className="text-center">
                <Icon name="Briefcase" size={48} className="text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Финансы</h4>
                <p className="text-sm text-gray-600">18% вакансий</p>
              </div>
              <div className="text-center">
                <Icon name="Users" size={48} className="text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Стартапы</h4>
                <p className="text-sm text-gray-600">9% вакансий</p>
              </div>
            </div>
            
            {/* Salary Chart */}
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Зарплатная вилка по городам</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 w-20">Москва</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-3 relative">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 w-24 text-right">80-150k ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 w-20">СПб</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-3 relative">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 w-24 text-right">60-120k ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 w-20">Екб</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-3 relative">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 w-24 text-right">50-90k ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 w-20">Нск</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-3 relative">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 w-24 text-right">45-80k ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Для кого этот курс</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Курс подойдет как новичкам, так и специалистам, желающим развиваться</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="pt-6">
                <Icon name="User" size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Новички без опыта</h3>
                <p className="text-gray-600">Хотите освоить востребованную профессию с нуля и получить стабильный доход</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="pt-6">
                <Icon name="RefreshCw" size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Смена профессии</h3>
                <p className="text-gray-600">Работаете в другой сфере, но хотите перейти в перспективную область</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white border-0 shadow-sm">
              <CardContent className="pt-6">
                <Icon name="TrendingUp" size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Рост в карьере</h3>
                <p className="text-gray-600">Уже работаете помощником и хотите систематизировать знания</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Чему вы научитесь</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Практические навыки, которые сразу применимы в работе</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Calendar", title: "Планирование и организация", desc: "Управление календарем, встречами и задачами руководителя" },
              { icon: "Mail", title: "Деловая переписка", desc: "Ведение корреспонденции, составление писем и документов" },
              { icon: "Phone", title: "Коммуникации", desc: "Работа с клиентами, партнерами и внутренними командами" },
              { icon: "FileText", title: "Документооборот", desc: "Создание, обработка и систематизация документов" },
              { icon: "BarChart", title: "Аналитика", desc: "Сбор данных, подготовка отчетов и презентаций" },
              { icon: "Globe", title: "Цифровые инструменты", desc: "CRM-системы, планировщики, онлайн-сервисы" }
            ].map((skill, index) => (
              <Card key={index} className="p-6 border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={skill.icon} size={40} className="text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Программа обучения</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">8 модулей, 64 часа практики, 3 месяца интенсива</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { 
                  title: "Модуль 1: Введение в профессию", 
                  duration: "8 часов",
                  content: "Роль бизнес-ассистента, основные функции, этика и конфиденциальность, построение отношений с руководителем" 
                },
                { 
                  title: "Модуль 2: Организация рабочего времени", 
                  duration: "8 часов",
                  content: "Планирование встреч, управление календарем, приоритизация задач, тайм-менеджмент" 
                },
                { 
                  title: "Модуль 3: Деловые коммуникации", 
                  duration: "8 часов",
                  content: "Телефонные переговоры, электронная переписка, работа с входящими запросами, протоколирование встреч" 
                },
                { 
                  title: "Модуль 4: Документооборот", 
                  duration: "8 часов",
                  content: "Создание и оформление документов, ведение архива, работа с договорами, подготовка отчетов" 
                },
                { 
                  title: "Модуль 5: Цифровые инструменты", 
                  duration: "8 часов",
                  content: "CRM-системы, планировщики задач, Google Workspace, Microsoft Office, автоматизация процессов" 
                },
                { 
                  title: "Модуль 6: Организация мероприятий", 
                  duration: "8 часов",
                  content: "Планирование деловых встреч, конференций, корпоративных мероприятий, работа с подрядчиками" 
                },
                { 
                  title: "Модуль 7: Финансовое планирование", 
                  duration: "8 часов",
                  content: "Ведение бюджетов, контроль расходов, работа с финансовыми документами, отчетность" 
                },
                { 
                  title: "Модуль 8: Карьерное развитие", 
                  duration: "8 часов",
                  content: "Построение карьеры, поиск работы, прохождение собеседований, развитие профессиональных навыков" 
                }
              ].map((module, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-blue-100 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center justify-between w-full text-left">
                      <span className="font-semibold">{module.title}</span>
                      <span className="text-sm text-blue-600 mr-4">{module.duration}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600">{module.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Преподаватели</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Эксперты-практики с многолетним опытом работы</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                position: "Бизнес-ассистент CEO Yandex",
                experience: "12 лет опыта",
                description: "Эксперт по организации рабочих процессов и управлению временем топ-менеджеров",
                image: "/img/58d2030b-e56b-4482-929e-43a57b9ea791.jpg"
              },
              {
                name: "Мария Сидорова", 
                position: "Руководитель административного отдела Сбербанк",
                experience: "8 лет опыта",
                description: "Специалист по документообороту и деловым коммуникациям в крупных компаниях",
                image: "/img/8528330b-d635-4d2b-a8c4-c11418d638ce.jpg"
              },
              {
                name: "Елена Козлова",
                position: "Senior Executive Assistant",
                experience: "15 лет опыта", 
                description: "Международный опыт работы с зарубежными компаниями и мультикультурными командами",
                image: "/img/c6059649-da22-44e8-8cea-45f3a55f85c5.jpg"
              }
            ].map((teacher, index) => (
              <Card key={index} className="p-6 border-blue-100 text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{teacher.position}</p>
                  <p className="text-sm text-gray-500 mb-3">{teacher.experience}</p>
                  <p className="text-gray-600 text-sm">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold mb-2">Запишитесь на консультацию</CardTitle>
                <CardDescription className="text-lg">
                  Узнайте подробности о курсе и получите индивидуальный план обучения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">89,000₽</h3>
                    <p className="text-gray-600">Полная стоимость курса</p>
                    <p className="text-sm text-gray-500 mt-2">Можно оплатить в рассрочку</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Бесплатно</h3>
                    <p className="text-gray-600">Консультация и пробный урок</p>
                    <p className="text-sm text-gray-500 mt-2">Без обязательств</p>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Вопросы о курсе (необязательно)</Label>
                    <Textarea id="message" placeholder="Что бы вы хотели узнать о курсе?" className="mt-1" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                    Записаться на консультацию
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ответы на самые популярные вопросы о курсе</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Подойдет ли курс новичкам без опыта?",
                  answer: "Да, курс специально разработан для людей без опыта работы бизнес-ассистентом. Мы начинаем с базовых понятий и постепенно переходим к более сложным темам."
                },
                {
                  question: "Сколько времени нужно уделять учебе?",
                  answer: "Рекомендуем заниматься 8-10 часов в неделю. Это включает просмотр лекций, выполнение практических заданий и участие в вебинарах."
                },
                {
                  question: "Выдается ли сертификат после окончания?",
                  answer: "Да, после успешного завершения всех модулей и выполнения итогового проекта вы получите сертификат о прохождении курса."
                },
                {
                  question: "Есть ли поддержка трудоустройства?",
                  answer: "Мы помогаем с составлением резюме, подготовкой к собеседованиям и рекомендуем лучших выпускников нашим партнерам-работодателям."
                },
                {
                  question: "Можно ли учиться в рассрочку?",
                  answer: "Да, доступна рассрочка на 6 или 12 месяцев без переплат. Также можно воспользоваться образовательным кредитом от наших партнеров."
                },
                {
                  question: "Что если курс не подойдет?",
                  answer: "В течение первых 14 дней после начала обучения вы можете вернуть полную стоимость курса, если он вам не подойдет."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={32} className="text-blue-400" />
                <h3 className="text-xl font-bold">AssistPro</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Ведущая онлайн-школа по подготовке бизнес-ассистентов. 
                Помогаем освоить востребованную профессию за 3 месяца.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Бизнес-ассистент</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Executive Assistant</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Персональный помощник</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@assistpro.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Тверская, 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 AssistPro. Все права защищены. | Политика конфиденциальности | Пользовательское соглашение</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;