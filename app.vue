<script lang="ts" setup>
const faq = [
  {
    label: 'Как происходит процесс участия в общем пуле?',
    content:
      'Участие в пуле начинается с резервирования места через администратора, после чего формируется список участников. За один час до начала токенсейла создается отдельный чат, куда добавляются все участники пула. Затем за 15-20 минут до начала запускается трансляция, которая позволяет каждому участнику наблюдать за процессом клейминга (приобретения) токенов и последующей их продажей на этапе листинга.',
  },
  {
    label: 'Когда я получу прибыль?',
    content:
      'Как быстро мы получаем прибыль?<br><br>В большинстве случаев, мы участвовуем в IDO проектах со 100% разлоками (токены не замораживаются и их можно сразу продать на бирже), в этом случае вы получаете прибыль в течение нескольких часов после продажи токена на бирже.<br>(перед участием, по разлокам уточняйте у  администратора)',
  },
  {
    label: 'Что такое BNB и как его купить?',
    content:
      'BNB — это криптовалюта, которая является одним из самых популярных токенов в мире занимая 4 место после Bitcoin, Ethereum и USDT. Большинство сейлов, в которых мы принимаем участие, находятся в сети Binance Smart Chain, поэтому вход осуществляется в валюте BNB.<br><br>Для покупки BNB, вам необходимо зарегистрироваться на любой бирже и пополнить ее, через систему P2P (с помощью банковской карты, либо любым другим способом).<br><br>Видео инструкция по регистрации популярной биржи Bybit – <a href="https://youtu.be/1LmmNL6xHZE" target="_blank">https://youtu.be/1LmmNL6xHZE</a><br><br>Видео инструкция по пополнению биржи Bybit, через P2P – <a href="https://youtu.be/ctnBB3BC43A" target="_blank">https://youtu.be/ctnBB3BC43A</a>',
  },
  {
    label: 'Какие гарантии мы предоставляем?',
    content:
      'От себя мы даем гарантию участия в том или ином сейле, гарантий 100% прибыли мы не даем, что логично. С подробными отчетами по каждому пулу можете ознакомиться в нашей телеграмм группе, в закрепленных сообщениях (там есть история выплат, с хешами транзакций и общая информация по каждому проекту).',
  },
]

useSeoMeta({
  title: ' Launch Pool - заработок на перспективных криптовалютных проектах',
  description:
    ' Launch Pool - это современные пулы для приобретения токенов на децентрализованных биржах (DEX)',
})
</script>

<template>
  <div>
    <AppHeader />
    <main class="flex flex-col">
      <section class="py-6 sm:py-20">
        <Container>
          <div class="grid items-center gap-x-5 gap-y-[60px] lg:grid-cols-12">
            <div
              class="mx-auto flex flex-col items-center gap-y-10 text-center sm:gap-y-[60px] lg:col-span-4 lg:items-stretch lg:text-left"
            >
              <div
                class="flex max-w-[280px] flex-col gap-y-10 sm:max-w-lg sm:gap-y-[60px]"
              >
                <h1 class="text-4xl font-semibold sm:text-6xl lg:text-8xl">
                  <span class="text-primary">Launch </span>Pool
                </h1>
                <p class="sm:text-xl lg:text-2xl">
                  Заработок на
                  <span class="text-primary">перспективных</span> криптовалютных
                  проектах
                </p>
              </div>
              <div class="flex flex-col gap-5 sm:flex-row lg:flex-col">
                <LandingButton variant="outline" to="/#kak-eto-rabotaet">
                  Как это работает?
                </LandingButton>
                <LandingButton to="https://t.me/artem_tudorin" target="_blank">
                  Принять участие
                </LandingButton>
              </div>
            </div>
            <div
              class="pointer-events-none relative mx-auto flex w-[90%] select-none sm:w-[70%] lg:col-span-8 lg:mx-0 lg:w-auto lg:justify-self-end"
            >
              <div
                class="bg-primary/40 absolute left-[30%] top-[-2%] h-0 w-[70%] animate-pulse rounded-full pb-[70%] blur-3xl"
              ></div>
              <NuxtImg
                class="relative"
                src="/static/images/landing/hero.png"
                alt=" Launch Pool"
                width="710"
                height="599"
                loading="lazy"
                fit="inside"
              />
            </div>
          </div>
        </Container>
      </section>
      <section class="overflow-hidden pb-14 pt-12" id="chto-takoe-ido">
        <Container class="relative">
          <div
            class="bg-primary/20 absolute left-0 top-[12rem] h-[18rem] w-[18rem] rounded-full blur-3xl"
          ></div>
          <div
            class="relative flex flex-col gap-y-10 sm:gap-y-[60px] lg:gap-y-24"
          >
            <div>
              <span
                class="select-none whitespace-nowrap text-7xl font-semibold text-[#2e2e2e] sm:text-8xl"
              >
                Что такое IDO
              </span>
              <h2
                class="-mt-10 text-3xl font-semibold leading-tight sm:-mt-12 sm:text-4xl"
              >
                <span class="text-primary">Что такое</span> IDO
              </h2>
            </div>
            <div class="flex flex-col gap-y-20">
              <div class="grid items-center gap-x-5 gap-y-20 md:grid-cols-12">
                <div class="flex flex-col gap-y-8 md:[grid-area:1/1/2/7]">
                  <p class="font-semibold sm:text-xl lg:text-2xl">
                    <span class="text-primary">IDO</span> - это процесс ранней
                    продажи токенов новых криптопроектов на децентралиованных
                    биржах (DEX)
                  </p>
                  <p class="sm:text-lg lg:text-xl">
                    Этот метод позволяет купить токен во время запуска проекта,
                    что открывает хорошие перспективы для заработка. Это похоже
                    на первичное размещение акций (IPO), только в сфере
                    криптовалют.
                  </p>
                  <p class="sm:text-lg lg:text-xl">
                    Многие компании, которые хотят масштабироваться, используют
                    метод Initial DEX Offering (IDO). Разработчики проекта
                    заключают сделку с площадками (лаунчпадами), которые
                    проводят публичную продажу их токена. Если IDO проходит
                    успешно, токен проекта начинает расти, и инвесторы
                    зарабатывают на этом.
                  </p>
                </div>
                <div
                  class="pointer-events-none relative mx-auto w-[60%] select-none md:w-auto md:justify-self-end md:[grid-area:1/8/2/13] lg:mx-0"
                >
                  <div
                    class="bg-primary/40 absolute top-[-10%] h-0 w-full animate-pulse rounded-full pb-[100%] blur-3xl"
                  ></div>
                  <NuxtImg
                    class="relative"
                    src="/static/images/landing/clock.png"
                    alt="Что такое IDO"
                    width="412"
                    height="411"
                    loading="lazy"
                    fit="inside"
                  />
                </div>
              </div>
              <div
                class="border-primary rounded-[30px] border-2 bg-[#2e2e2e] p-8 text-center sm:px-16 sm:text-lg lg:px-24 lg:py-12 lg:text-xl"
              >
                Например, токен SOLANA был продан на IDO по цене 0.22$. Однако
                через некоторое время его стоимость выросла в 1100 раз и его
                можно было продать по цене 250$. Таким образом, вложив 1000$,
                можно было заработать более 1 млн$.
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section class="overflow-hidden pb-14 pt-12">
        <Container class="relative">
          <div
            class="bg-primary/30 absolute left-[-6rem] top-[12rem] h-[20rem] w-[20rem] rounded-full blur-3xl"
          ></div>
          <div
            class="relative flex flex-col gap-y-10 sm:gap-y-[60px] lg:gap-y-24"
          >
            <div>
              <span
                class="select-none whitespace-nowrap text-7xl font-semibold text-[#2e2e2e] sm:text-8xl"
              >
                Наша задача
              </span>
              <h2
                class="-mt-10 text-3xl font-semibold leading-tight sm:-mt-12 sm:text-4xl"
              >
                Наша <span class="text-primary">задача</span>
              </h2>
            </div>
            <div class="grid items-center gap-x-5 gap-y-20 md:grid-cols-12">
              <div class="flex flex-col gap-y-[60px] md:col-span-7">
                <div class="flex flex-col gap-y-8">
                  <p
                    class="text-lg font-semibold leading-snug sm:text-2xl lg:text-3xl"
                  >
                    <span class="text-primary">
                      Поиск наиболее перспективных токенсейлов, которые могут
                      принести высокую прибыль
                    </span>
                    для участников наших пулов
                  </p>
                  <p class="max-w-[534px] sm:text-xl lg:text-2xl">
                    Для этого мы анализируем сотни проектов ежемесячно и
                    выбираем самые лучшие из них
                  </p>
                </div>
                <div class="flex flex-col gap-y-8">
                  <p
                    class="text-lg font-semibold leading-snug sm:text-2xl lg:text-3xl"
                  >
                    <span class="text-primary">
                      Мы не покупаем неизвестные или непроверенные токены
                    </span>
                  </p>
                  <p class="max-w-[534px] sm:text-xl lg:text-2xl">
                    Все проекты проходят детальный анализ и проверку
                  </p>
                </div>
              </div>
              <div
                class="pointer-events-none relative mx-auto w-[60%] select-none md:col-span-5 md:w-auto md:justify-self-end lg:mx-0"
              >
                <div
                  class="bg-primary/40 absolute left-[5%] top-[-10%] h-0 w-[90%] animate-pulse rounded-full pb-[90%] blur-3xl"
                ></div>
                <NuxtImg
                  class="relative"
                  src="/static/images/landing/list.png"
                  alt="Наша задача"
                  width="396"
                  height="407"
                  loading="lazy"
                  fit="inside"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section class="overflow-hidden pb-14 pt-12" id="kak-eto-rabotaet">
        <Container class="relative">
          <div
            class="bg-primary/10 absolute bottom-[10%] left-[40%] h-0 w-[30%] -translate-x-1/2 rounded-full pb-[30%] blur-3xl"
          ></div>
          <div
            class="relative flex flex-col gap-y-10 sm:gap-y-[60px] lg:gap-y-24"
          >
            <div>
              <span
                class="select-none whitespace-nowrap text-7xl font-semibold text-[#2e2e2e] sm:text-8xl"
              >
                Как это работает
              </span>
              <h2
                class="-mt-10 text-3xl font-semibold leading-tight sm:-mt-12 sm:text-4xl"
              >
                <span class="text-primary">Как это</span> работает
              </h2>
            </div>
            <div class="grid gap-5 lg:grid-cols-2">
              <div
                class="flex gap-x-6 rounded-[30px] bg-[#2e2e2e] p-6 sm:gap-x-8 sm:p-8"
              >
                <div>
                  <div
                    class="bg-primary flex h-10 w-10 items-center justify-center rounded-[10px] text-xl font-semibold text-[#242424]"
                  >
                    1
                  </div>
                </div>
                <p class="sm:text-lg lg:text-xl">
                  Допустим, аллокация проекта, выделенная для нашего сообщества,
                  составляет 50 BNB (~15000$). Мы привлекаем участников, которые
                  вносят в общий пул от 0.5 BNB до 1 BNB.
                </p>
              </div>
              <div
                class="flex gap-x-6 rounded-[30px] bg-[#2e2e2e] p-6 sm:gap-x-8 sm:p-8"
              >
                <div>
                  <div
                    class="bg-primary flex h-10 w-10 items-center justify-center rounded-[10px] text-xl font-semibold text-[#242424]"
                  >
                    2
                  </div>
                </div>
                <p class="sm:text-lg lg:text-xl">
                  Таким образом, у каждого из них открывается возможность
                  поучаствовать в проверенном и перспективном токенсейле, при
                  этом соблюсти риск-менеджмент.
                </p>
              </div>
              <div
                class="flex gap-x-6 rounded-[30px] bg-[#2e2e2e] p-6 sm:gap-x-8 sm:p-8"
              >
                <div>
                  <div
                    class="bg-primary flex h-10 w-10 items-center justify-center rounded-[10px] text-xl font-semibold text-[#242424]"
                  >
                    3
                  </div>
                </div>
                <p class="sm:text-lg lg:text-xl">
                  После успешного проведения IDO, токен проекта начинает расти,
                  в этот момент мы продаем его и фиксируем основную прибыль.
                </p>
              </div>
              <div
                class="flex gap-x-6 rounded-[30px] bg-[#2e2e2e] p-6 sm:gap-x-8 sm:p-8"
              >
                <div>
                  <div
                    class="bg-primary flex h-10 w-10 items-center justify-center rounded-[10px] text-xl font-semibold text-[#242424]"
                  >
                    4
                  </div>
                </div>
                <p class="sm:text-lg lg:text-xl">
                  Итоговая прибыль делится между всеми участниками пула
                  пропорционально их вложениям.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section
        class="overflow-hidden pb-14 pt-12"
        id="pochemu-sobirayutsya-puly"
      >
        <Container class="relative">
          <div
            class="bg-primary/30 absolute left-[-10rem] top-[28rem] h-[20rem] w-[20rem] rounded-full blur-3xl"
          ></div>
          <div
            class="relative flex flex-col gap-y-10 sm:gap-y-[60px] lg:gap-y-24"
          >
            <div>
              <span
                class="select-none whitespace-nowrap text-7xl font-semibold text-[#2e2e2e] sm:text-8xl"
              >
                Для чего собираются пулы
              </span>
              <h2
                class="-mt-10 text-3xl font-semibold leading-tight sm:-mt-12 sm:text-4xl"
              >
                <span class="text-primary">Для чего</span> собираются пулы
              </h2>
            </div>
            <div class="flex flex-col gap-y-20">
              <div class="grid items-center gap-x-5 gap-y-20 md:grid-cols-12">
                <div class="flex flex-col gap-y-8 md:[grid-area:1/1/2/7]">
                  <p class="sm:text-lg lg:text-xl">
                    <span class="text-primary font-semibold">
                      Для того, чтобы участвовать в IDO проекта необходимо
                      получить аллокацию (так называемый White List)</span
                    >, которая позволяет приобрести токены этого проекта по
                    самой низкой стоимости. Однако, сделать это может быть
                    достаточно трудно, так как для этого нужно выполнить
                    различные задания, направленные на улучшение проекта и
                    увеличение интереса к нему. Кроме того, количество мест в
                    White List ограничено, что создает конкуренцию среди
                    участников.
                  </p>
                  <p class="sm:text-lg lg:text-xl">
                    Именно по этой причине создаются пулы, которые позволяют вам
                    приобретать токены проекта вместе с другими участниками. При
                    этом, для каждого пула мы получаем выделенную аллокацию,
                    напрямую от разработчиков, поэтому для участия не
                    обязательно иметь свой собственный White List.
                  </p>
                </div>
                <div
                  class="pointer-events-none relative mx-auto w-[60%] select-none md:w-auto md:justify-self-end md:[grid-area:1/8/2/13] lg:mx-0"
                >
                  <div
                    class="bg-primary/40 absolute left-[15%] top-[-10%] h-0 w-[80%] animate-pulse rounded-full pb-[80%] blur-3xl"
                  ></div>
                  <NuxtImg
                    class="relative"
                    src="/static/images/landing/chest.png"
                    alt="Почему собираются пулы"
                    width="480"
                    height="368"
                    loading="lazy"
                    fit="inside"
                  />
                </div>
              </div>
              <div
                class="border-primary rounded-[30px] border-2 bg-[#2e2e2e] p-8 text-center sm:px-16 sm:text-lg lg:px-24 lg:py-12 lg:text-xl"
              >
                Основным преимуществом участия в пуле является распределение
                рисков между всеми участниками, что позволяет соблюдать
                риск-менеджмент. Если проект окажется убыточным, то участники
                пула разделят этот риск, и потери для каждого из них будут не
                такими значительными, как если бы они инвестировали в проект
                самостоятельно.
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section class="overflow-hidden pb-14 pt-12">
        <Container class="relative">
          <div
            class="bg-primary/20 absolute left-[13%] top-[20%] h-0 w-[25%] rounded-full pb-[25%] blur-3xl"
          ></div>
          <div
            class="bg-primary/20 absolute bottom-[5%] right-[-3%] h-0 w-[25%] rounded-full pb-[25%] blur-3xl"
          ></div>
          <div class="relative flex flex-col gap-y-10 sm:gap-y-[60px]">
            <div class="grid gap-y-5 xl:grid-cols-12">
              <h2
                class="text-3xl font-semibold leading-tight sm:text-4xl xl:-my-2 xl:[grid-area:1/1/2/7]"
              >
                <span class="text-primary">Пример расчета прибыли</span>
                между участниками пула
              </h2>
              <p class="xl:text-right xl:[grid-area:1/8/2/13]">
                Каждый участник получается прибыль
                <br />
                пропорционально своей доле.
                <span class="text-primary">
                  Прибыль рассчитана с учетом нашей комиссии - 10%
                </span>
              </p>
            </div>
            <div class="grid gap-x-5 gap-y-10 xl:grid-cols-12">
              <div
                class="flex flex-col gap-5 lg:flex-row xl:col-span-4 xl:flex-col"
              >
                <div class="grid w-full gap-x-5 xl:w-auto xl:grid-cols-4">
                  <div
                    class="flex items-center justify-center gap-x-8 rounded-[30px] bg-[#2e2e2e] px-5 py-8 xl:col-span-3 xl:justify-start"
                  >
                    <svg
                      width="44"
                      height="50"
                      viewBox="0 0 44 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42 47.5C42 40.5964 33.0457 35 22 35C10.9543 35 2 40.5964 2 47.5M22 27.5C15.0964 27.5 9.5 21.9036 9.5 15C9.5 8.09644 15.0964 2.5 22 2.5C28.9036 2.5 34.5 8.09644 34.5 15C34.5 21.9036 28.9036 27.5 22 27.5Z"
                        stroke="#348F4D"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p class="font-semibold sm:text-lg">
                      Участник 1
                      <br />
                      вносит <span class="text-primary">0.5 BNB</span>
                    </p>
                  </div>
                  <div
                    class="col-span-1 hidden items-center justify-center xl:flex"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 12L16 7M21 12L16 17M21 12H3"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div class="grid w-full gap-x-5 xl:w-auto xl:grid-cols-4">
                  <div
                    class="flex items-center justify-center gap-x-8 rounded-[30px] bg-[#2e2e2e] px-5 py-8 xl:col-span-3 xl:justify-start"
                  >
                    <svg
                      width="44"
                      height="50"
                      viewBox="0 0 44 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42 47.5C42 40.5964 33.0457 35 22 35C10.9543 35 2 40.5964 2 47.5M22 27.5C15.0964 27.5 9.5 21.9036 9.5 15C9.5 8.09644 15.0964 2.5 22 2.5C28.9036 2.5 34.5 8.09644 34.5 15C34.5 21.9036 28.9036 27.5 22 27.5Z"
                        stroke="#348F4D"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p class="font-semibold sm:text-lg">
                      Участник 2<br />вносит
                      <span class="text-primary">1 BNB</span>
                    </p>
                  </div>
                  <div
                    class="col-span-1 hidden items-center justify-center xl:flex"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 12L16 7M21 12L16 17M21 12H3"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div class="grid w-full gap-x-5 xl:w-auto xl:grid-cols-4">
                  <div
                    class="flex items-center justify-center gap-x-8 rounded-[30px] bg-[#2e2e2e] px-5 py-8 xl:col-span-3 xl:justify-start"
                  >
                    <svg
                      width="44"
                      height="50"
                      viewBox="0 0 44 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42 47.5C42 40.5964 33.0457 35 22 35C10.9543 35 2 40.5964 2 47.5M22 27.5C15.0964 27.5 9.5 21.9036 9.5 15C9.5 8.09644 15.0964 2.5 22 2.5C28.9036 2.5 34.5 8.09644 34.5 15C34.5 21.9036 28.9036 27.5 22 27.5Z"
                        stroke="#348F4D"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p class="font-semibold sm:text-lg">
                      Участник 3<br />вносит
                      <span class="text-primary">0.85 BNB</span>
                    </p>
                  </div>
                  <div
                    class="col-span-1 hidden items-center justify-center xl:flex"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 12L16 7M21 12L16 17M21 12H3"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <svg
                class="mx-auto rotate-90 xl:hidden"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12L16 7M21 12L16 17M21 12H3"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="grid gap-x-5 xl:col-span-3 xl:grid-cols-3">
                <div
                  class="col-span-2 flex flex-col items-center justify-center gap-y-5 rounded-[30px] bg-[#2e2e2e] px-6 py-8"
                >
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.5 50C42.5 45.8579 36.9036 42.5 30 42.5C23.0964 42.5 17.5 45.8579 17.5 50M52.5 42.5009C52.5 39.4255 49.4148 36.7823 45 35.625M7.5 42.5009C7.5 39.4255 10.5852 36.7823 15 35.625M45 25.5903C46.5344 24.217 47.5 22.2212 47.5 20C47.5 15.8579 44.1421 12.5 40 12.5C38.0791 12.5 36.3269 13.2221 35 14.4097M15 25.5903C13.4656 24.217 12.5 22.2212 12.5 20C12.5 15.8579 15.8579 12.5 20 12.5C21.9209 12.5 23.6731 13.2221 25 14.4097M30 35C25.8579 35 22.5 31.6421 22.5 27.5C22.5 23.3579 25.8579 20 30 20C34.1421 20 37.5 23.3579 37.5 27.5C37.5 31.6421 34.1421 35 30 35Z"
                      stroke="#348F4D"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-center font-semibold sm:text-lg">
                    Общий взнос в пул<br />
                    <span class="text-primary text-lg sm:text-xl lg:text-2xl">
                      2.35 BNB
                    </span>
                  </p>
                </div>
                <div
                  class="col-span-1 hidden items-center justify-center xl:flex"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 12L16 7M21 12L16 17M21 12H3"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <svg
                class="mx-auto rotate-90 xl:hidden"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12L16 7M21 12L16 17M21 12H3"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div
                class="flex flex-col items-center gap-y-12 rounded-[30px] bg-[#2e2e2e] px-5 py-8 xl:col-span-5 xl:items-stretch"
              >
                <div
                  class="flex flex-col gap-y-5 text-center sm:text-lg xl:text-left"
                >
                  <p>
                    <span class="text-primary font-semibold">Прибыль</span> с
                    продажи токенов:
                    <span class="text-primary font-semibold">х3.6 (360%)</span>
                  </p>
                  <p>
                    <span class="text-primary font-semibold">Пул</span> после
                    продажи токена:
                    <span class="text-primary font-semibold">8.46 BNB</span>
                  </p>
                </div>
                <div
                  class="flex h-full flex-col justify-between gap-y-10 xl:gap-y-0"
                >
                  <div class="flex items-center gap-x-5">
                    <svg
                      class="shrink-0"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3327 35C33.3327 30.3976 27.3631 26.6667 19.9993 26.6667C12.6356 26.6667 6.66602 30.3976 6.66602 35M19.9993 21.6667C15.397 21.6667 11.666 17.9357 11.666 13.3333C11.666 8.73096 15.397 5 19.9993 5C24.6017 5 28.3327 8.73096 28.3327 13.3333C28.3327 17.9357 24.6017 21.6667 19.9993 21.6667Z"
                        stroke="#348F4D"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex flex-col !leading-tight sm:text-lg">
                      <p class="font-semibold">Участник 1</p>
                      <p>
                        Доля участия 21.28%.
                        <span class="text-primary font-semibold">
                          Прибыль 1.67 BNB
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-x-5">
                    <svg
                      class="shrink-0"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3327 35C33.3327 30.3976 27.3631 26.6667 19.9993 26.6667C12.6356 26.6667 6.66602 30.3976 6.66602 35M19.9993 21.6667C15.397 21.6667 11.666 17.9357 11.666 13.3333C11.666 8.73096 15.397 5 19.9993 5C24.6017 5 28.3327 8.73096 28.3327 13.3333C28.3327 17.9357 24.6017 21.6667 19.9993 21.6667Z"
                        stroke="#348F4D"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex flex-col !leading-tight sm:text-lg">
                      <p class="font-semibold">Участник 2</p>
                      <p>
                        Доля участия 42.55%.
                        <span class="text-primary font-semibold">
                          Прибыль 3.34 BNB
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-x-5">
                    <svg
                      class="shrink-0"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3327 35C33.3327 30.3976 27.3631 26.6667 19.9993 26.6667C12.6356 26.6667 6.66602 30.3976 6.66602 35M19.9993 21.6667C15.397 21.6667 11.666 17.9357 11.666 13.3333C11.666 8.73096 15.397 5 19.9993 5C24.6017 5 28.3327 8.73096 28.3327 13.3333C28.3327 17.9357 24.6017 21.6667 19.9993 21.6667Z"
                        stroke="#348F4D"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex flex-col !leading-tight sm:text-lg">
                      <p class="font-semibold">Участник 3</p>
                      <p>
                        Доля участия 36.17%.
                        <span class="text-primary font-semibold">
                          Прибыль 2.84 BNB
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section class="overflow-hidden pb-14 pt-12" id="nasha-komanda">
        <Container class="relative">
          <div
            class="bg-primary/40 absolute bottom-[20%] left-[-3%] h-0 w-[30%] rounded-full pb-[30%] blur-3xl"
          ></div>
          <div
            class="bg-primary/40 absolute right-[-7%] top-[20%] h-0 w-[30%] animate-pulse rounded-full pb-[30%] blur-3xl"
          ></div>
          <div
            class="relative flex flex-col gap-y-10 sm:gap-y-[60px] lg:gap-y-24"
          >
            <div>
              <span
                class="select-none whitespace-nowrap text-7xl font-semibold text-[#2e2e2e] sm:text-8xl"
              >
                Наша команда
              </span>
              <h2
                class="-mt-10 text-3xl font-semibold leading-tight sm:-mt-12 sm:text-4xl"
              >
                Наша <span class="text-primary">команда</span>
              </h2>
            </div>
            <div class="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div
                  class="h-0 w-full images overflow-hidden rounded-[30px] pb-[100%] lg:h-auto lg:w-auto lg:pb-0"
                >
                  <img
                    class="min-h-full w-full "
                    src="/static/images/landing/team/man.png"
                    alt="Артём"
                    width="380"
                    height="420"
                    loading="lazy"
                  />
                </div>
                <div class="mt-6 leading-tight lg:mt-8">
                  <div class="text-lg font-semibold sm:text-2xl lg:text-3xl">
                    Артём Тудоров
                  </div>
                  <div
                    class="text-primary font-semibold sm:text-xl lg:text-2xl"
                  >
                    Founder
                  </div>
                </div>
                <p class="mt-6 sm:text-lg lg:mt-10 lg:text-xl">
                  Основатель  Launch Pool
                  <br />
                  Эксперт в области токенсейлов в различных областях, включая
                  финансы, медиа и блокчейн-технологии
                </p>
              </div>
              <div>
                <div
                  class="h-0 w-full overflow-hidden rounded-[30px] pb-[100%] lg:h-auto lg:w-auto lg:pb-0"
                >
                  <img
                    class="min-h-full w-full"
                    src="/static/images/landing/team/2.png"
                    alt="Денис"
                    width="380"
                    height="420"
                    loading="lazy"
                  />
                </div>
                <div class="mt-6 leading-tight lg:mt-8">
                  <div class="text-lg font-semibold sm:text-2xl lg:text-3xl">
                    Денис Поляков
                  </div>
                  <div
                    class="text-primary font-semibold sm:text-xl lg:text-2xl"
                  >
                    Co-founder
                  </div>
                </div>
                <p class="mt-6 sm:text-lg lg:mt-10 lg:text-xl">
                  Консультант по вопросам привлечения частных (крупных)
                  инвестиций
                </p>
              </div>
              <div>
                <div
                  class="h-0 w-full overflow-hidden rounded-[30px] pb-[100%] lg:h-auto lg:w-auto lg:pb-0"
                >
                  <img
                    class="min-h-full w-full"
                    src="/static/images/landing/team/3.png"
                    alt="Марат"
                    width="380"
                    height="420"
                    loading="lazy"
                  />
                </div>
                <div class="mt-6 leading-tight lg:mt-8">
                  <div class="text-lg font-semibold sm:text-2xl lg:text-3xl">
                    Марат Алачев
                  </div>
                  <div
                    class="text-primary font-semibold sm:text-xl lg:text-2xl"
                  >
                    CEO
                  </div>
                </div>
                <p class="mt-6 sm:text-lg lg:mt-10 lg:text-xl">
                  Предварительная аналитическая проверка и оценка
                  персепективности проектов
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section class="pb-14 pt-12">
        <Container class="flex flex-col gap-y-10 sm:gap-y-[60px]">
          <h2 class="text-3xl font-semibold leading-tight sm:text-4xl">
            <span class="text-primary">Как пополнить</span> баланс
          </h2>
          <div class="grid gap-x-5 gap-y-8 lg:grid-cols-12">
            <div class="flex flex-col gap-y-8 lg:[grid-area:1/1/2/5]">
              <p class="sm:text-lg lg:text-xl">
                BNB — это криптовалюта, которая является одним из самых
                популярных токенов в мире занимая 4 место после Bitcoin,
                Ethereum и USDT. Большинство сейлов, в которых мы принимаем
                участие, находятся в сети Binance Smart Chain, поэтому вход
                осуществляется в валюте BNB.
              </p>
              <p class="sm:text-lg lg:text-xl">
                Для покупки BNB, вам необходимо зарегистрироваться на любой
                бирже и пополнить ее, через систему P2P (с помощью банковской
                карты, либо любым другим способом).
              </p>
              <p class="sm:text-lg lg:text-xl">
                Видео инструкция по регистрации популярной биржи Bybit –
                <a
                  class="font-semibold transition-opacity hover:opacity-70"
                  href="https://youtu.be/1LmmNL6xHZE"
                  target="_blank"
                >
                  https://youtu.be/1LmmNL6xHZE
                </a>
              </p>
              <p class="sm:text-lg lg:hidden lg:text-xl">
                Видео инструкция по пополнению биржи Bybit, через P2P –
                <a
                  class="font-semibold transition-opacity hover:opacity-70"
                  href="https://youtu.be/ctnBB3BC43A"
                  target="_blank"
                >
                  https://youtu.be/ctnBB3BC43A
                </a>
              </p>
            </div>
            <div class="flex flex-col gap-y-8 lg:[grid-area:1/6/2/13]">
              <ClientOnly>
                <iframe
                  class="h-96 w-full rounded-[30px] lg:h-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/1LmmNL6xHZE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </ClientOnly>
              <LandingButton
                class="w-full"
                to="https://youtu.be/ctnBB3BC43A"
                target="_blank"
              >
                Видео инструкция
                <span class="hidden sm:inline">&nbsp;по пополнению биржи</span>
              </LandingButton>
            </div>
          </div>
        </Container>
      </section>
      <section class="overflow-hidden pb-14 pt-12">
        <Container class="flex flex-col gap-y-10 sm:gap-y-[60px]">
          <div>
            <span
              class="select-none whitespace-nowrap text-7xl font-semibold text-[#2e2e2e] sm:text-8xl"
            >
              Частые вопросы
            </span>
            <h2
              class="-mt-10 text-3xl font-semibold leading-tight sm:-mt-12 sm:text-4xl"
            >
              Частые <span class="text-primary">вопросы</span>
            </h2>
          </div>
          <div
            class="last:border-b [&>*]:border-t [&>*]:border-white [&>*]:py-6"
          >
            <UAccordion
              v-for="item of faq"
              :key="item.label"
              :ui="{
                item: {
                  size: 'leading-tight sm:text-lg lg:text-xl',
                  color: 'dark:text-white',
                  padding: 'pb-0 pt-8',
                },
              }"
              multiple
              default-open
              :items="[item]"
            >
              <template #default="{ item, open }">
                <button
                  class="flex items-center justify-between gap-x-5 truncate text-lg font-semibold transition-opacity hover:opacity-70 sm:text-xl lg:text-2xl"
                >
                  <span class="truncate">{{ item.label }}</span>
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#2e2e2e]"
                  >
                    <svg
                      class="transition-transform"
                      :class="{ 'rotate-180': !open }"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L12 8L19 15"
                        stroke="#348F4D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </template>
              <template #item="{ item }">
                <p
                  class="[&>a]:font-semibold [&>a]:transition-opacity hover:[&>a]:opacity-70"
                  v-html="item.content"
                ></p>
              </template>
            </UAccordion>
          </div>
        </Container>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
