(() => {
  "use strict";

  const DATA_URL = "./data.enc";
  const LANGUAGE_KEY = "vpp_lang";
  const REMEMBERED_ACCESS_KEY = "vpp_remembered_access";
  const TIMEZONE = "Asia/Yerevan";
  const AUTO_REFRESH_MS = 15 * 60 * 1000;
  const SVG_NS = "http://www.w3.org/2000/svg";
  const HY_MONTHS = [
    "հունվարի", "փետրվարի", "մարտի", "ապրիլի", "մայիսի", "հունիսի",
    "հուլիսի", "օգոստոսի", "սեպտեմբերի", "հոկտեմբերի", "նոյեմբերի", "դեկտեմբերի"
  ];

  const I18N = {
    ru: {
      documentTitle: "Пульс Парка Победы",
      skipToContent: "К дашборду",
      languageLabel: "Язык интерфейса",
      gateEyebrow: "ЗАЩИЩЁННЫЙ ДОСТУП",
      siteTitle: "Пульс Парка Победы",
      siteSubtitle: "Ереван · оперативный дашборд",
      gateSubtitle: "Введите отдельный пароль этого дашборда",
      passwordLabel: "Пароль",
      passwordPlaceholder: "Пароль",
      unlock: "Открыть дашборд",
      unlocking: "Проверяем…",
      rememberLogin: "Запомнить меня на этом устройстве",
      gateSecurity: "AES-256-GCM · пароль сохраняется только по вашему выбору",
      wrongPassword: "Пароль не подошёл. Попробуйте ещё раз.",
      rememberedAccessRejected: "Сохранённый пароль больше не подходит. Введите его снова.",
      networkGate: "Не удалось загрузить данные. Проверьте подключение к интернету.",
      invalidData: "Не удалось открыть обновлённые данные. Повторите загрузку через минуту.",
      refresh: "Обновить",
      refreshing: "Обновляем…",
      logout: "Выйти",
      refreshFailed: "Не удалось обновить данные. Показан последний успешно открытый снимок.",
      todayNet: "Чистая выручка сегодня",
      grossRevenue: "Валовая",
      returns: "Возвраты",
      netRevenue: "Чистая",
      revenueStructure: "Чистая выручка равна валовой выручке за вычетом возвратов",
      yerevanCutoff: "к {time} по Еревану",
      vsNorm: "К норме",
      sourceReconciled: "Источник сверен · чистая = валовая − возвраты",
      sourceUnverified: "Сверка источника недоступна",
      referencesTitle: "Темп к тому же времени",
      referencesSubtitle: "Сравнение одинакового отрезка дня",
      yesterday: "Вчера",
      days7: "−7 дней",
      days14: "−14 дней",
      days21: "−21 день",
      anomalyNote: "⚑ Аномальный опорный день отмечен; в ряду −7/−14/−21 день он исключается из нормы.",
      chartEyebrow: "ВНУТРИ ДНЯ",
      chartTitle: "Ход дня",
      chartSubtitle: "Накопленная чистая выручка · одинаковое время",
      chartAria: "График накопленной чистой выручки сегодня и в опорные дни",
      today: "Сегодня",
      normalRange: "Диапазон −7/−14/−21",
      normalMedian: "Медиана нормы",
      now: "Сейчас",
      metricsTitle: "Операционные метрики",
      weeklyTitle: "Выручка по неделям",
      weeklySubtitle: "Текущая неделя показана частично",
      weeklyAria: "Выручка Парка Победы по неделям",
      partial: "неполная",
      sameElapsed: "к тем же {days} дн. и времени прошлой недели",
      weeklyComparisonMissing: "Нет полного сопоставимого отрезка прошлой недели",
      attractionsEyebrow: "ПО АТТРАКЦИОНАМ",
      attractionsTitle: "Списания по аттракционам",
      attractionsSubtitle: "Текущая неделя и шесть предыдущих — одинаковые дни и время",
      attractionsGrossDisclosure: "Валовые списания Lime до возвратов услуг. Это не кассовая выручка. Бонусы показаны отдельно.",
      attractionsTableAria: "Сравнение списаний по аттракционам за семь недель",
      attraction: "Аттракцион",
      currentWeek: "Текущая",
      deltaPrevious: "к пред.",
      attractionsTotal: "Итого",
      attractionsBonus: "бонусы {amount}",
      attractionsCutoff: "{days} дн. · до {time}",
      attractionsFootnote: "Каждая неделя ограничена теми же днями и тем же временем текущего дня.",
      attractionsUnmapped: "В Lime появились новые позиции: они включены в «Прочее», справочник требует проверки.",
      attractionsMappingDrift: "Справочник аттракционов не полностью совпал с Lime: спорные позиции включены в «Прочее» и требуют проверки.",
      attractionsUnverified: "Сверка аттракционных списаний не завершена.",
      attractionsOther: "Прочее",
      categoryChildren: "Детские",
      categoryFamily: "Семейные",
      categoryExtreme: "Экстрим",
      categoryGames: "Игры",
      categoryOther: "Прочее",
      averageCheck: "Средний чек",
      averageCheckFormula: "Чистая выручка / чеки продаж",
      salesChecks: "{count} чеков продаж сегодня",
      salesChecksOne: "{count} чек продаж сегодня",
      salesChecksFew: "{count} чека продаж сегодня",
      salesChecksMany: "{count} чеков продаж сегодня",
      averageTopup: "Среднее валовое пополнение",
      averageTopupFormula: "Положительные валовые пополнения / уникальные пополненные карты",
      toppedCards: "{count} пополненных карт сегодня · не гости",
      toppedCardsOne: "{count} пополненная карта сегодня · не гость",
      toppedCardsFew: "{count} пополненные карты сегодня · не гости",
      toppedCardsMany: "{count} пополненных карт сегодня · не гости",
      yearComparison: "ГОД К ГОДУ",
      yoyTitle: "Динамика к прошлому году",
      yoySubtitle: "Завершённые даты в одинаковых календарных окнах · по {date}",
      vsYear: "к {year}",
      yoyTableAria: "Изменение метрик относительно прошлого года",
      period: "Период",
      day: "День",
      week: "Нед.",
      month: "Мес.",
      ytd: "Год",
      revenue: "Выручка",
      check: "Чек",
      topupShort: "Пополн.",
      topupYoyDisclosure: "Среднее пополнение YoY: валовые пополнения / активный карто-день; это не число гостей.",
      weatherEyebrow: "КОНТЕКСТ",
      weatherTitle: "Погода сегодня",
      weatherCaveat: "Контекст, а не доказанная причина изменения выручки.",
      weatherUnavailable: "Данные о погоде недоступны",
      weatherClear: "ясно",
      weatherCloudy: "облачно",
      weatherRain: "дождь",
      weatherUnknown: "условия не определены",
      precipitation: "осадки",
      wind: "ветер",
      comfortable: "комфортно",
      neutral: "нейтрально",
      uncomfortable: "некомфортно",
      comfortIndex: "{label} · {index}/100",
      methodEyebrow: "МЕТОДИКА",
      methodTitle: "Как читать данные",
      methodTime: "Все суммы — AMD. День считается по календарным границам Asia/Yerevan, а опорные дни — к тому же времени.",
      methodRevenue: "Выручка чистая, после возвратов. Знаменатель среднего чека — чеки продаж; среднего пополнения — уникальные пополненные карты.",
      methodStates: "Карты не считаются гостями. Состояния «до открытия», «закрыто», «нет продаж» и «данные недоступны» различаются.",
      footerSchedule: "Обновляется каждые 15 минут · ночная пауза 01:00–08:00 по Еревану",
      footerSnapshot: "снимок {date}",
      fresh: "Свежие данные",
      delayed: "Данные задерживаются",
      offline: "Нет связи",
      night: "Ночная пауза",
      dataError: "Данные недоступны",
      freshDetail: "Свежий снимок · {age}",
      delayedDetail: "Обновление задерживается · снимок {age}",
      fallbackDetail: "Показан резервный снимок · {age}",
      offlineDetail: "Нет подключения · показан снимок {age}",
      nightDetail: "Обновления приостановлены 01:00–08:00 · снимок {age}",
      errorDetail: "Время свежести снимка отсутствует",
      justNow: "только что",
      minutesAgo: "{count} мин назад",
      hoursAgo: "{count} ч назад",
      daysAgo: "{count} дн назад",
      operatingActive: "День активен",
      operatingPreopen: "До открытия",
      operatingNoSales: "Продаж пока нет",
      operatingClosed: "Сегодня закрыто",
      operatingError: "Данные недоступны",
      noData: "н/д",
      million: "млн",
      thousand: "тыс.",
      degreeC: "°C",
      millimetres: "мм",
      metresPerSecond: "м/с"
    },
    hy: {
      documentTitle: "«Հաղթանակ» զբոսայգու զարկերակ",
      skipToContent: "Անցնել վահանակին",
      languageLabel: "Միջերեսի լեզու",
      gateEyebrow: "ՊԱՇՏՊԱՆՎԱԾ ՄՈՒՏՔ",
      siteTitle: "«Հաղթանակ» զբոսայգու զարկերակ",
      siteSubtitle: "Երևան · օպերատիվ վահանակ",
      gateSubtitle: "Մուտքագրեք այս վահանակի առանձին գաղտնաբառը",
      passwordLabel: "Գաղտնաբառ",
      passwordPlaceholder: "Գաղտնաբառ",
      unlock: "Բացել վահանակը",
      unlocking: "Ստուգվում է…",
      rememberLogin: "Հիշել ինձ այս սարքում",
      gateSecurity: "AES-256-GCM · գաղտնաբառը պահպանվում է միայն ձեր ընտրությամբ",
      wrongPassword: "Գաղտնաբառը սխալ է։ Փորձեք կրկին։",
      rememberedAccessRejected: "Պահպանված գաղտնաբառն այլևս չի համապատասխանում։ Մուտքագրեք այն կրկին։",
      networkGate: "Չհաջողվեց բեռնել տվյալները։ Ստուգեք ինտերնետ կապը։",
      invalidData: "Չհաջողվեց բացել թարմացված տվյալները։ Կրկին փորձեք մեկ րոպեից։",
      refresh: "Թարմացնել",
      refreshing: "Թարմացվում է…",
      logout: "Դուրս գալ",
      refreshFailed: "Չհաջողվեց թարմացնել։ Ցուցադրվում է վերջին հաջողությամբ բացված պատկերը։",
      todayNet: "Այսօրվա զուտ հասույթը",
      grossRevenue: "Համախառն",
      returns: "Վերադարձներ",
      netRevenue: "Զուտ",
      revenueStructure: "Զուտ հասույթը հավասար է համախառն հասույթին՝ հանած վերադարձները",
      yerevanCutoff: "Երևանի ժամանակով՝ {time}-ի դրությամբ",
      vsNorm: "Նորմայի համեմատ",
      sourceReconciled: "Աղբյուրը համադրված է · զուտ = համախառն − վերադարձներ",
      sourceUnverified: "Աղբյուրի համադրումն անհասանելի է",
      referencesTitle: "Տեմպը՝ նույն ժամի համեմատ",
      referencesSubtitle: "Օրվա նույն ժամանակահատվածի համեմատություն",
      yesterday: "Երեկ",
      days7: "−7 օր",
      days14: "−14 օր",
      days21: "−21 օր",
      anomalyNote: "⚑ Անոմալ հենակետային օրը նշված է․ −7/−14/−21 շարքում այն հանվում է նորմայից։",
      chartEyebrow: "ՕՐՎԱ ԸՆԹԱՑՔՈՒՄ",
      chartTitle: "Օրվա ընթացքը",
      chartSubtitle: "Կուտակային զուտ հասույթ · նույն ժամանակը",
      chartAria: "Այսօրվա և հենակետային օրերի կուտակային զուտ հասույթի գրաֆիկ",
      today: "Այսօր",
      normalRange: "−7/−14/−21 միջակայք",
      normalMedian: "Նորմայի մեդիան",
      now: "Այժմ",
      metricsTitle: "Օպերատիվ ցուցանիշներ",
      weeklyTitle: "Հասույթն ըստ շաբաթների",
      weeklySubtitle: "Ընթացիկ շաբաթը ներկայացված է մասնակի",
      weeklyAria: "«Հաղթանակ» զբոսայգու հասույթն ըստ շաբաթների",
      partial: "մասնակի",
      sameElapsed: "անցած շաբաթվա նույն {days} օրվա և ժամի համեմատ",
      weeklyComparisonMissing: "Անցած շաբաթվա ամբողջական համադրելի հատված չկա",
      attractionsEyebrow: "ԸՍՏ ԱՏՐԱԿՑԻՈՆՆԵՐԻ",
      attractionsTitle: "Գանձումներն ըստ ատրակցիոնների",
      attractionsSubtitle: "Ընթացիկ շաբաթը և նախորդ վեցը՝ նույն օրերի ու ժամի կտրվածքով",
      attractionsGrossDisclosure: "Lime-ի համախառն գանձումներ՝ մինչև ծառայությունների վերադարձները։ Սա դրամարկղային հասույթ չէ։ Բոնուսները ցուցադրված են առանձին։",
      attractionsTableAria: "Ատրակցիոնների գանձումների յոթշաբաթյա համեմատություն",
      attraction: "Ատրակցիոն",
      currentWeek: "Ընթացիկ",
      deltaPrevious: "նախորդի համեմատ",
      attractionsTotal: "Ընդամենը",
      attractionsBonus: "բոնուս՝ {amount}",
      attractionsCutoff: "{days} օր · մինչև {time}",
      attractionsFootnote: "Յուրաքանչյուր շաբաթ սահմանափակված է նույն օրերով և ընթացիկ օրվա նույն ժամով։",
      attractionsUnmapped: "Lime-ում կան նոր դիրքեր․ դրանք ներառված են «Այլ»-ում, տեղեկատուն պահանջում է ստուգում։",
      attractionsMappingDrift: "Ատրակցիոնների տեղեկատուն ամբողջությամբ չի համընկել Lime-ի հետ․ վիճելի դիրքերը ներառված են «Այլ»-ում և պահանջում են ստուգում։",
      attractionsUnverified: "Ատրակցիոնների գանձումների համադրումը ավարտված չէ։",
      attractionsOther: "Այլ",
      categoryChildren: "Մանկական",
      categoryFamily: "Ընտանեկան",
      categoryExtreme: "Էքստրիմ",
      categoryGames: "Խաղեր",
      categoryOther: "Այլ",
      averageCheck: "Միջին չեկ",
      averageCheckFormula: "Զուտ հասույթ / վաճառքի չեկեր",
      salesChecks: "այսօր՝ {count} վաճառքի չեկ",
      salesChecksOne: "այսօր՝ {count} վաճառքի չեկ",
      salesChecksFew: "այսօր՝ {count} վաճառքի չեկ",
      salesChecksMany: "այսօր՝ {count} վաճառքի չեկ",
      averageTopup: "Միջին համախառն լիցքավորում",
      averageTopupFormula: "Դրական համախառն լիցքավորումներ / լիցքավորված եզակի քարտեր",
      toppedCards: "այսօր՝ {count} լիցքավորված քարտ · ոչ այցելուներ",
      toppedCardsOne: "այսօր՝ {count} լիցքավորված քարտ · ոչ այցելու",
      toppedCardsFew: "այսօր՝ {count} լիցքավորված քարտ · ոչ այցելուներ",
      toppedCardsMany: "այսօր՝ {count} լիցքավորված քարտ · ոչ այցելուներ",
      yearComparison: "ՏԱՐԵՑՏԱՐԻ",
      yoyTitle: "Դինամիկան՝ նախորդ տարվա համեմատ",
      yoySubtitle: "Ավարտված օրեր՝ նույն օրացուցային պատուհաններով · մինչև {date}",
      vsYear: "{year} թ. համեմատ",
      yoyTableAria: "Ցուցանիշների փոփոխությունը նախորդ տարվա համեմատ",
      period: "Շրջան",
      day: "Օր",
      week: "Շաբ.",
      month: "Ամիս",
      ytd: "Տարի",
      revenue: "Հասույթ",
      check: "Չեկ",
      topupShort: "Լիցք.",
      topupYoyDisclosure: "Տարեցտարի միջին լիցքավորումը՝ համախառն լիցքավորումներ / ակտիվ քարտ-օր․ սա այցելուների թիվ չէ։",
      weatherEyebrow: "ՀԱՄԱՏԵՔՍՏ",
      weatherTitle: "Եղանակն այսօր",
      weatherCaveat: "Համատեքստ է, ոչ թե հասույթի փոփոխության ապացուցված պատճառ։",
      weatherUnavailable: "Եղանակի տվյալներն անհասանելի են",
      weatherClear: "պարզ",
      weatherCloudy: "ամպամած",
      weatherRain: "անձրև",
      weatherUnknown: "պայմանները որոշված չեն",
      precipitation: "տեղումներ",
      wind: "քամի",
      comfortable: "հարմարավետ",
      neutral: "չեզոք",
      uncomfortable: "անհարմար",
      comfortIndex: "{label} · {index}/100",
      methodEyebrow: "ՄԵԹՈԴԱԲԱՆՈՒԹՅՈՒՆ",
      methodTitle: "Ինչպես կարդալ տվյալները",
      methodTime: "Բոլոր գումարները AMD-ով են։ Օրը հաշվվում է Asia/Yerevan օրացուցային սահմաններով, իսկ հենակետային օրերը՝ նույն ժամի դրությամբ։",
      methodRevenue: "Հասույթը զուտ է՝ վերադարձներից հետո։ Միջին չեկի հիմքը վաճառքի չեկերն են, իսկ միջին լիցքավորմանը՝ լիցքավորված եզակի քարտերը։",
      methodStates: "Քարտերը չեն համարվում այցելուներ։ «Մինչև բացվելը», «փակ է», «վաճառք չկա» և «տվյալներն անհասանելի են» կարգավիճակները տարբեր են։",
      footerSchedule: "Թարմացվում է 15 րոպեն մեկ · գիշերային դադար՝ 01:00–08:00 Երևանի ժամանակով",
      footerSnapshot: "պատկեր՝ {date}",
      fresh: "Թարմ տվյալներ",
      delayed: "Տվյալներն ուշանում են",
      offline: "Ցանցից դուրս",
      night: "Գիշերային դադար",
      dataError: "Տվյալներն անհասանելի են",
      freshDetail: "Թարմ պատկեր · {age}",
      delayedDetail: "Թարմացումն ուշանում է · պատկերը {age}",
      fallbackDetail: "Ցուցադրվում է պահուստային պատկերը · {age}",
      offlineDetail: "Կապ չկա · ցուցադրվող պատկերը {age}",
      nightDetail: "Թարմացումները դադարեցված են 01:00–08:00 · պատկերը {age}",
      errorDetail: "Պատկերի թարմության ժամանակը բացակայում է",
      justNow: "հենց նոր",
      minutesAgo: "{count} րոպե առաջ",
      hoursAgo: "{count} ժամ առաջ",
      daysAgo: "{count} օր առաջ",
      operatingActive: "Օրը ակտիվ է",
      operatingPreopen: "Մինչև բացվելը",
      operatingNoSales: "Վաճառք դեռ չկա",
      operatingClosed: "Այսօր փակ է",
      operatingError: "Տվյալներն անհասանելի են",
      noData: "տ/չ",
      million: "մլն",
      thousand: "հզ.",
      degreeC: "°C",
      millimetres: "մմ",
      metresPerSecond: "մ/վ"
    }
  };

  let language = readLanguage();
  let passphrase = null;
  let currentPayload = null;
  let refreshTimer = null;
  let refreshFailed = false;
  let refreshFailureCode = null;

  const byId = (id) => document.getElementById(id);
  const tr = (key, variables = {}) => {
    const template = I18N[language][key] ?? I18N.ru[key] ?? key;
    return Object.entries(variables).reduce(
      (value, [name, replacement]) => value.replaceAll(`{${name}}`, String(replacement)),
      template
    );
  };

  function readLanguage() {
    try {
      return localStorage.getItem(LANGUAGE_KEY) === "hy" ? "hy" : "ru";
    } catch (_error) {
      return "ru";
    }
  }

  function persistLanguage(nextLanguage) {
    try {
      localStorage.setItem(LANGUAGE_KEY, nextLanguage);
    } catch (_error) {
      // Language persistence is optional; no sensitive value is stored.
    }
  }

  function readRememberedAccess() {
    try {
      const value = localStorage.getItem(REMEMBERED_ACCESS_KEY);
      return typeof value === "string" && value.length > 0 ? value : null;
    } catch (_error) {
      return null;
    }
  }

  function persistRememberedAccess(candidate) {
    try {
      localStorage.setItem(REMEMBERED_ACCESS_KEY, candidate);
    } catch (_error) {
      // Storage can be unavailable in private or restricted browser contexts.
    }
  }

  function clearRememberedAccess() {
    try {
      localStorage.removeItem(REMEMBERED_ACCESS_KEY);
    } catch (_error) {
      // A blocked storage API also means there is no readable saved access value.
    }
  }

  function applyTranslations() {
    document.documentElement.lang = language;
    document.title = tr("documentTitle");
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = tr(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", tr(node.dataset.i18nPlaceholder));
    });
    document.querySelectorAll(".language-switch").forEach((node) => {
      node.setAttribute("aria-label", tr("languageLabel"));
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    document.querySelector(".revenue-ledger")?.setAttribute("aria-label", tr("revenueStructure"));
  }

  function setLanguage(nextLanguage) {
    if (nextLanguage !== "ru" && nextLanguage !== "hy") return;
    language = nextLanguage;
    persistLanguage(nextLanguage);
    applyTranslations();
    if (currentPayload) renderPayload(currentPayload);
    if (refreshFailed && !byId("runtimeNotice").classList.contains("is-hidden")) {
      byId("runtimeNotice").textContent = tr("refreshFailed");
    }
  }

  function locale() {
    return language === "hy" ? "hy-AM" : "ru-RU";
  }

  function finite(value) {
    return typeof value === "number" && Number.isFinite(value);
  }

  function number(value, maximumFractionDigits = 0) {
    return new Intl.NumberFormat(locale(), { maximumFractionDigits }).format(value);
  }

  function countedText(baseKey, value) {
    const rendered = finite(value) ? number(value) : tr("noData");
    if (language !== "ru" || !finite(value)) return tr(baseKey, { count: rendered });
    const absolute = Math.abs(Math.trunc(value));
    const mod10 = absolute % 10;
    const mod100 = absolute % 100;
    const form = mod10 === 1 && mod100 !== 11
      ? "One"
      : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)
        ? "Few"
        : "Many";
    return tr(`${baseKey}${form}`, { count: rendered });
  }

  function money(value) {
    return finite(value) ? `${number(Math.round(value))}\u00a0֏` : tr("noData");
  }

  function compactMoney(value) {
    if (!finite(value)) return tr("noData");
    const absolute = Math.abs(value);
    if (absolute >= 1_000_000) return `${number(value / 1_000_000, 1)} ${tr("million")}\u00a0֏`;
    if (absolute >= 1_000) return `${number(value / 1_000, 0)} ${tr("thousand")}\u00a0֏`;
    return money(value);
  }

  function weeklyMoney(valueInMillions) {
    return finite(valueInMillions) ? `${number(valueInMillions, 2)} ${tr("million")}\u00a0֏` : tr("noData");
  }

  function percent(value) {
    if (!finite(value)) return tr("noData");
    const rounded = Math.round(value);
    if (rounded === 0) return "0%";
    return `${rounded > 0 ? "+" : "−"}${Math.abs(rounded)}%`;
  }

  function direction(value) {
    if (!finite(value) || Math.abs(value) < 0.5) return "flat";
    return value > 0 ? "up" : "down";
  }

  function setDelta(node, value) {
    node.textContent = percent(value);
    node.dataset.direction = direction(value);
  }

  function parseDateOnly(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const [year, month, day] = value.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day, 12));
  }

  function formatDateOnly(value) {
    const date = parseDateOnly(value);
    if (!date || Number.isNaN(date.getTime())) return tr("noData");
    if (language === "hy") {
      const [year, month, day] = value.split("-").map(Number);
      return `${day} ${HY_MONTHS[month - 1]} ${year} թ.`;
    }
    return new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(date);
  }

  function formatSnapshot(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return tr("noData");
    if (language === "hy") {
      const parts = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: TIMEZONE
      }).formatToParts(date);
      const part = (type) => parts.find((item) => item.type === type)?.value;
      const day = Number(part("day"));
      const month = Number(part("month"));
      const hour = part("hour");
      const minute = part("minute");
      if (!day || !month || !hour || !minute) return tr("noData");
      return `${day} ${HY_MONTHS[month - 1]}, ${hour}:${minute}`;
    }
    return new Intl.DateTimeFormat(locale(), {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: TIMEZONE
    }).format(date);
  }

  function formatTime(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    return new Intl.DateTimeFormat(locale(), {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: TIMEZONE
    }).format(date);
  }

  function clockFromMinutes(minutes) {
    if (!finite(minutes)) return "—";
    const safe = Math.max(0, Math.min(1439, Math.round(minutes)));
    return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
  }

  function ageMinutes(value) {
    const time = Date.parse(value);
    if (!Number.isFinite(time)) return null;
    return Math.max(0, Math.floor((Date.now() - time) / 60_000));
  }

  function relativeAge(value) {
    const minutes = ageMinutes(value);
    if (minutes === null) return tr("noData");
    if (minutes < 1) return tr("justNow");
    if (minutes < 60) return tr("minutesAgo", { count: minutes });
    if (minutes < 1440) return tr("hoursAgo", { count: Math.floor(minutes / 60) });
    return tr("daysAgo", { count: Math.floor(minutes / 1440) });
  }

  function yerevanHour() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      hour12: false,
      timeZone: TIMEZONE
    }).formatToParts(new Date());
    return Number(parts.find((part) => part.type === "hour")?.value ?? 12);
  }

  function create(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function svg(tag, attributes = {}) {
    const node = document.createElementNS(SVG_NS, tag);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, String(value)));
    return node;
  }

  function pathFor(values, x, y) {
    return values.map((value, index) => `${index === 0 ? "M" : "L"}${x(index).toFixed(2)} ${y(value).toFixed(2)}`).join(" ");
  }

  function validAttractionValue(value) {
    return value && [value.money, value.bonus, value.rides].every(
      (item) => Number.isInteger(item) && item >= 0
    );
  }

  function validateAttractions(attractions) {
    if (!attractions || typeof attractions !== "object") throw new AppError("invalid");
    const metadata = attractions.metadata;
    if (
      !metadata ||
      metadata.source !== "ServiceSellDetailedReport" ||
      metadata.metric !== "gross_before_service_returns" ||
      metadata.identity_field !== "serviceId" ||
      metadata.time_field !== "installationTime" ||
      metadata.timezone !== TIMEZONE ||
      metadata.currency !== "AMD" ||
      metadata.money_right_type_id !== 2 ||
      metadata.bonus_right_type_id !== 4 ||
      metadata.returns_included !== false ||
      metadata.rides_policy !== "sum_abs_count_no_dedup" ||
      typeof metadata.mapping_version !== "string" ||
      !metadata.mapping_version
    ) throw new AppError("invalid");

    const cutoff = attractions.cutoff;
    if (
      !cutoff ||
      !parseDateOnly(cutoff.local_date) ||
      !Number.isInteger(cutoff.minute) ||
      cutoff.minute < 0 ||
      cutoff.minute > 1439 ||
      !Number.isInteger(cutoff.completed_days) ||
      cutoff.completed_days < 0 ||
      cutoff.completed_days > 6 ||
      !Number.isInteger(cutoff.included_days) ||
      cutoff.included_days !== cutoff.completed_days + 1
    ) throw new AppError("invalid");

    const weeks = attractions.weeks;
    if (!Array.isArray(weeks) || weeks.length !== 7) throw new AppError("invalid");
    const weekKeys = new Set();
    weeks.forEach((week) => {
      if (
        !week ||
        typeof week.key !== "string" ||
        !week.key ||
        typeof week.label !== "string" ||
        !week.label ||
        !parseDateOnly(week.start) ||
        !parseDateOnly(week.through) ||
        typeof week.partial !== "boolean" ||
        week.cutoff_minute !== cutoff.minute ||
        week.included_days !== cutoff.included_days
      ) throw new AppError("invalid");
      weekKeys.add(week.key);
    });
    if (weekKeys.size !== 7) throw new AppError("invalid");

    const rows = attractions.rows;
    const totals = attractions.totals;
    if (!Array.isArray(rows) || !Array.isArray(totals) || totals.length !== 7 || !totals.every(validAttractionValue)) {
      throw new AppError("invalid");
    }
    const rowIds = new Set();
    const categories = new Set(["children", "family", "extreme", "games", "other"]);
    rows.forEach((row) => {
      const rowId = String(row?.service_id ?? "");
      if (
        !rowId ||
        rowIds.has(rowId) ||
        typeof row.display_name !== "string" ||
        !row.display_name.trim() ||
        !categories.has(row.category) ||
        !Array.isArray(row.values) ||
        row.values.length !== 7 ||
        !row.values.every(validAttractionValue)
      ) throw new AppError("invalid");
      const previousMoney = row.values[1].money;
      const exactWow = previousMoney > 0
        ? ((row.values[0].money - previousMoney) / previousMoney) * 100
        : null;
      const wowHasOneDecimal = finite(row.wow_pct) &&
        Math.abs(row.wow_pct * 10 - Math.round(row.wow_pct * 10)) <= 0.000001;
      if (
        (exactWow === null && row.wow_pct !== null) ||
        (exactWow !== null && (!wowHasOneDecimal || Math.abs(row.wow_pct - exactWow) > 0.0500001))
      ) throw new AppError("invalid");
      rowIds.add(rowId);
    });
    for (let index = 0; index < 7; index += 1) {
      ["money", "bonus", "rides"].forEach((metric) => {
        const sum = rows.reduce((total, row) => total + row.values[index][metric], 0);
        if (sum !== totals[index][metric]) throw new AppError("invalid");
      });
    }

    const other = attractions.other;
    const quality = attractions.quality;
    if (
      !other ||
      !Array.isArray(other.service_ids) ||
      !Array.isArray(other.source_names) ||
      !quality ||
      typeof quality.schema_drift !== "boolean" ||
      !Array.isArray(quality.unmapped_service_ids) ||
      !Array.isArray(quality.unmapped_source_names) ||
      !Array.isArray(quality.name_mismatches) ||
      !Array.isArray(quality.reconciliation) ||
      quality.reconciliation.length !== 7 ||
      !["reconciled", "reconciled_with_schema_drift"].includes(quality.status) ||
      (quality.status === "reconciled_with_schema_drift") !== quality.schema_drift ||
      !quality.reconciliation.every((item, index) => {
        if (
          item?.ok !== true ||
          item.week_key !== weeks[index].key ||
          !validAttractionValue(item.raw) ||
          !validAttractionValue(item.included) ||
          !validAttractionValue(item.excluded) ||
          !validAttractionValue(item.difference)
        ) return false;
        return ["money", "bonus", "rides"].every((metric) =>
          item.included[metric] === totals[index][metric] &&
          item.raw[metric] === item.included[metric] + item.excluded[metric] &&
          item.difference[metric] === 0
        );
      })
    ) throw new AppError("invalid");
  }

  function validatePayload(payload) {
    if (!payload || payload.schema_version !== 1 || typeof payload.park !== "object" || payload.park === null) {
      throw new AppError("invalid");
    }
    const park = payload.park;
    if (
      park.id !== "victory" ||
      park.currency !== "AMD" ||
      park.currency_symbol !== "֏" ||
      park.timezone !== TIMEZONE ||
      park.calendar_policy !== "calendar_day"
    ) throw new AppError("invalid");
    if (!park.data_as_of || !Number.isFinite(Date.parse(park.data_as_of))) throw new AppError("invalid");
    if (!finite(park.today_end)) throw new AppError("invalid");
    if (![park.today_gross, park.today_returns].every((value) => finite(value) && value >= 0)) throw new AppError("invalid");
    if (!["active", "preopen", "no_sales", "closed"].includes(park.operating_state)) throw new AppError("invalid");
    const identityTolerance = Math.max(2, Math.abs(park.today_end) * 0.000001);
    if (Math.abs((park.today_gross - park.today_returns) - park.today_end) > identityTolerance) throw new AppError("invalid");
    const refs = park.refs;
    if (!refs || !["d1", "d7", "d14", "d21"].every((key) => finite(refs[key]))) throw new AppError("invalid");
    const series = park.series;
    const keys = ["grid", "today", "d1", "lo", "hi", "med"];
    if (!series || !keys.every((key) => Array.isArray(series[key]) && series[key].length > 0 && series[key].every(finite))) {
      throw new AppError("invalid");
    }
    const lengths = new Set(keys.map((key) => series[key].length));
    if (lengths.size !== 1 || series.grid.length > 2000) throw new AppError("invalid");
    if (series.grid.some((value, index) => index > 0 && value <= series.grid[index - 1])) throw new AppError("invalid");
    if (Math.abs(series.today.at(-1) - park.today_end) > identityTolerance) throw new AppError("invalid");
    if (!park.stale && park.source_quality?.reconciliation?.ok !== true) throw new AppError("invalid");
    validateAttractions(park.attractions);
    return payload;
  }

  class AppError extends Error {
    constructor(code) {
      super(code);
      this.code = code;
    }
  }

  function base64Bytes(value) {
    if (typeof value !== "string") throw new AppError("invalid");
    let decoded;
    try {
      decoded = atob(value);
    } catch (_error) {
      throw new AppError("invalid");
    }
    return Uint8Array.from(decoded, (character) => character.charCodeAt(0));
  }

  async function decryptEnvelope(envelope, candidate) {
    if (
      !envelope ||
      envelope.v !== 1 ||
      envelope.kdf !== "PBKDF2-SHA256" ||
      envelope.cipher !== "AES-256-GCM" ||
      !Number.isInteger(envelope.iterations) ||
      envelope.iterations < 100_000 ||
      envelope.iterations > 2_000_000
    ) {
      throw new AppError("invalid");
    }
    const salt = base64Bytes(envelope.salt);
    const iv = base64Bytes(envelope.iv);
    const encrypted = base64Bytes(envelope.ct);
    if (salt.length < 16 || iv.length !== 12 || encrypted.length <= 16) throw new AppError("invalid");
    try {
      const material = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(candidate),
        "PBKDF2",
        false,
        ["deriveKey"]
      );
      const key = await crypto.subtle.deriveKey(
        { name: "PBKDF2", salt, iterations: envelope.iterations, hash: "SHA-256" },
        material,
        { name: "AES-GCM", length: 256 },
        false,
        ["decrypt"]
      );
      const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv, tagLength: 128 }, key, encrypted);
      const decoded = new TextDecoder("utf-8", { fatal: true }).decode(plaintext);
      return JSON.parse(decoded);
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError("password");
    }
  }

  async function fetchPayload(candidate) {
    let response;
    try {
      response = await fetch(`${DATA_URL}?t=${Date.now()}`, { cache: "no-store", credentials: "same-origin" });
    } catch (_error) {
      throw new AppError("network");
    }
    if (!response.ok) throw new AppError("network");
    let envelope;
    try {
      envelope = await response.json();
    } catch (_error) {
      throw new AppError("invalid");
    }
    return validatePayload(await decryptEnvelope(envelope, candidate));
  }

  function renderPayload(payload) {
    const park = payload.park;
    renderHero(park);
    renderReferences(park);
    renderIntraday(park);
    renderMetrics(park);
    renderAttractions(park.attractions, park.now_min);
    renderYoy(park, payload.comparison_year);
    renderWeather(park.weather);
    renderStatus();
    byId("footerSnapshot").textContent = tr("footerSnapshot", { date: formatSnapshot(park.data_as_of) });
  }

  function renderHero(park) {
    byId("heroTitle").textContent = money(park.today_end);
    byId("heroTime").textContent = tr("yerevanCutoff", { time: clockFromMinutes(park.now_min) });
    byId("grossRevenue").textContent = money(park.today_gross);
    byId("returnsRevenue").textContent = money(park.today_returns);
    byId("netRevenue").textContent = money(park.today_end);
    const normDelta = finite(park.norm) && park.norm > 0 ? ((park.today_end - park.norm) / park.norm) * 100 : null;
    setDelta(byId("normDelta"), normDelta);
    const reconciled = park.source_quality?.status === "reconciled" && park.source_quality?.reconciliation?.ok === true;
    byId("sourceQuality").textContent = tr(reconciled ? "sourceReconciled" : "sourceUnverified");
    const state = ["active", "preopen", "no_sales", "closed"].includes(park.operating_state) ? park.operating_state : "error";
    const labels = {
      active: "operatingActive",
      preopen: "operatingPreopen",
      no_sales: "operatingNoSales",
      closed: "operatingClosed",
      error: "operatingError"
    };
    const pill = byId("operatingPill");
    pill.dataset.state = state;
    pill.textContent = tr(labels[state]);
  }

  function renderReferences(park) {
    const specs = [
      ["d1", "yesterday"],
      ["d7", "days7"],
      ["d14", "days14"],
      ["d21", "days21"]
    ];
    const container = byId("referenceGrid");
    container.replaceChildren();
    let hasAnomaly = false;
    specs.forEach(([key, labelKey]) => {
      const isAnomaly = Boolean(park.refs_anom?.[key]);
      hasAnomaly ||= isAnomaly;
      const card = create("div", `reference-card${isAnomaly ? " is-anomaly" : ""}`);
      const label = create("div", "reference-label");
      label.append(create("span", "", tr(labelKey)));
      if (isAnomaly) label.append(create("span", "anomaly-flag", "⚑"));
      const value = create("strong", "reference-value", compactMoney(park.refs[key]));
      const comparison = park.refs[key] > 0 ? ((park.today_end - park.refs[key]) / park.refs[key]) * 100 : null;
      const delta = create("span", "reference-delta", percent(comparison));
      delta.dataset.direction = direction(comparison);
      card.append(label, value, delta);
      container.append(card);
    });
    byId("anomalyNote").classList.toggle("is-hidden", !hasAnomaly);
  }

  function renderIntraday(park) {
    const series = park.series;
    const width = 720;
    const height = 250;
    const left = 53;
    const right = 12;
    const top = 12;
    const bottom = 31;
    const plotWidth = width - left - right;
    const plotHeight = height - top - bottom;
    const allValues = [...series.today, ...series.d1, ...series.lo, ...series.hi, ...series.med];
    let minValue = Math.min(0, ...allValues);
    let maxValue = Math.max(1, ...allValues);
    const range = Math.max(1, maxValue - minValue);
    minValue -= range * 0.04;
    maxValue += range * 0.08;
    const x = (index) => left + (series.grid.length === 1 ? plotWidth / 2 : (index / (series.grid.length - 1)) * plotWidth);
    const y = (value) => top + ((maxValue - value) / (maxValue - minValue)) * plotHeight;
    const chart = svg("svg", {
      viewBox: `0 0 ${width} ${height}`,
      role: "img",
      "aria-label": tr("chartAria"),
      preserveAspectRatio: "xMidYMid meet"
    });
    const title = svg("title");
    title.textContent = tr("chartAria");
    chart.append(title);

    [0, 0.5, 1].forEach((fraction) => {
      const value = minValue + (maxValue - minValue) * fraction;
      const py = y(value);
      chart.append(svg("line", { x1: left, y1: py, x2: width - right, y2: py, class: Math.abs(value) < range * 0.02 ? "chart-zero-line" : "chart-grid-line" }));
      const label = svg("text", { x: left - 7, y: py + 3, "text-anchor": "end", class: "chart-axis-label" });
      label.textContent = compactMoney(value);
      chart.append(label);
    });

    const bandForward = series.hi.map((value, index) => `${index === 0 ? "M" : "L"}${x(index).toFixed(2)} ${y(value).toFixed(2)}`).join(" ");
    const bandBack = series.lo.map((value, index) => [value, index]).reverse().map(([value, index]) => `L${x(index).toFixed(2)} ${y(value).toFixed(2)}`).join(" ");
    chart.append(svg("path", { d: `${bandForward} ${bandBack} Z`, class: "chart-band" }));
    chart.append(svg("path", { d: pathFor(series.med, x, y), class: "chart-median" }));
    chart.append(svg("path", { d: pathFor(series.d1, x, y), class: "chart-yesterday" }));
    chart.append(svg("path", { d: pathFor(series.today, x, y), class: "chart-today" }));
    const lastIndex = series.today.length - 1;
    chart.append(svg("circle", { cx: x(lastIndex), cy: y(series.today[lastIndex]), r: 5, class: "chart-endpoint" }));

    const timeLabels = series.grid.length === 1
      ? [[0, `${tr("now")} ${clockFromMinutes(park.now_min)}`, "middle"]]
      : [
          [0, clockFromMinutes(series.grid[0]), "start"],
          [lastIndex, `${tr("now")} ${clockFromMinutes(park.now_min)}`, "end"]
        ];
    timeLabels.forEach(([index, text, anchor]) => {
      const label = svg("text", { x: x(index), y: height - 6, "text-anchor": anchor, class: "chart-axis-label" });
      label.textContent = text;
      chart.append(label);
    });
    byId("intradayChart").replaceChildren(chart);

    const legend = byId("chartLegend");
    legend.replaceChildren();
    [["", "today"], ["band", "normalRange"], ["median", "normalMedian"], ["yesterday", "yesterday"]].forEach(([style, key]) => {
      const item = create("span", "legend-item");
      item.append(create("span", `legend-key${style ? ` ${style}` : ""}`), create("span", "", tr(key)));
      legend.append(item);
    });
  }

  function renderMetrics(park) {
    const weekly = park.weekly;
    const values = Array.isArray(weekly?.values) ? weekly.values.filter(finite) : [];
    const currentValue = values.length ? values[values.length - 1] : null;
    byId("weeklyValue").textContent = weeklyMoney(currentValue);
    const comparable = Boolean(weekly?.comparison_complete) && weekly?.comparison_scope === "same_intraday_cutoff";
    setDelta(byId("weeklyDelta"), comparable ? weekly.wow : null);
    byId("weeklyPartial").classList.toggle("is-hidden", !weekly?.partial);
    byId("weeklyFootnote").textContent = comparable
      ? tr("sameElapsed", { days: weekly.elapsed_days })
      : tr("weeklyComparisonMissing");
    renderWeeklyChart(values, Array.isArray(weekly?.week_labels) ? weekly.week_labels : [], Boolean(weekly?.partial));

    byId("averageCheck").textContent = money(park.check);
    byId("checkDenominator").textContent = countedText("salesChecks", park.today_checks);
    byId("averageTopup").textContent = money(park.topup);
    byId("topupDenominator").textContent = countedText("toppedCards", park.today_topup_cards);
  }

  function renderWeeklyChart(values, labels, partial) {
    const container = byId("weeklyChart");
    if (!values.length) {
      container.replaceChildren(create("span", "metric-footnote", tr("noData")));
      return;
    }
    const width = 420;
    const height = 110;
    const top = 7;
    const bottom = 23;
    const baseline = height - bottom;
    const maximum = Math.max(0.01, ...values);
    const gap = 6;
    const barWidth = (width - gap * (values.length - 1)) / values.length;
    const chart = svg("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": tr("weeklyAria"), preserveAspectRatio: "none" });
    const title = svg("title");
    title.textContent = tr("weeklyAria");
    chart.append(title, svg("line", { x1: 0, y1: baseline, x2: width, y2: baseline, class: "weekly-baseline" }));
    values.forEach((value, index) => {
      const barHeight = Math.max(2, (value / maximum) * (baseline - top));
      const x = index * (barWidth + gap);
      const isCurrent = index === values.length - 1;
      chart.append(svg("rect", {
        x: x.toFixed(2),
        y: (baseline - barHeight).toFixed(2),
        width: barWidth.toFixed(2),
        height: barHeight.toFixed(2),
        rx: 3,
        class: `weekly-bar${isCurrent ? " current" : ""}`,
        opacity: isCurrent && partial ? 0.72 : 1
      }));
      const text = svg("text", { x: (x + barWidth / 2).toFixed(2), y: height - 6, "text-anchor": "middle", class: "weekly-axis-label" });
      text.textContent = typeof labels[index] === "string" ? labels[index] : `W${index + 1}`;
      chart.append(text);
    });
    container.replaceChildren(chart);
  }

  function attractionCategoryLabel(category) {
    const keys = {
      children: "categoryChildren",
      family: "categoryFamily",
      extreme: "categoryExtreme",
      games: "categoryGames",
      other: "categoryOther"
    };
    return tr(keys[category] ?? "categoryOther");
  }

  function attractionWeekLabel(week, index) {
    if (typeof week?.label === "string" && week.label.trim()) return week.label.trim();
    if (typeof week?.key === "string" && week.key.trim()) return week.key.trim();
    return index === 0 ? tr("currentWeek") : `W−${index}`;
  }

  function attractionValueCell(value, className = "") {
    const cell = create("td", `attraction-value-cell${className ? ` ${className}` : ""}`);
    cell.append(
      create("strong", "attraction-money", compactMoney(value?.money)),
      create("span", "attraction-bonus", tr("attractionsBonus", { amount: compactMoney(value?.bonus) }))
    );
    if (finite(value?.rides)) cell.dataset.rides = String(Math.round(value.rides));
    return cell;
  }

  function renderAttractions(attractions, fallbackCutoffMinutes) {
    const weeks = attractions.weeks;
    const rows = attractions.rows;
    const totals = attractions.totals;
    const cutoff = attractions.cutoff ?? {};
    const quality = attractions.quality ?? {};
    const table = create("table", "attractions-table");
    table.append(create("caption", "sr-only", tr("attractionsTableAria")));

    const thead = create("thead");
    const headerRow = create("tr");
    const attractionHeader = create("th", "attraction-name-column", tr("attraction"));
    attractionHeader.setAttribute("scope", "col");
    const currentHeader = create("th", "attraction-current-column");
    currentHeader.setAttribute("scope", "col");
    currentHeader.append(
      create("span", "attraction-week-kind", tr("currentWeek")),
      create("span", "attraction-week-label", attractionWeekLabel(weeks[0], 0))
    );
    const deltaHeader = create("th", "attraction-delta-column", tr("deltaPrevious"));
    deltaHeader.setAttribute("scope", "col");
    headerRow.append(attractionHeader, currentHeader, deltaHeader);
    weeks.slice(1).forEach((week, index) => {
      const header = create("th", "attraction-history-column", attractionWeekLabel(week, index + 1));
      header.setAttribute("scope", "col");
      headerRow.append(header);
    });
    thead.append(headerRow);

    const tbody = create("tbody");
    rows.forEach((item) => {
      const row = create("tr", item.category === "other" ? "is-other" : "");
      const rowHeader = create("th", "attraction-name-column");
      rowHeader.setAttribute("scope", "row");
      const label = item.category === "other" ? tr("attractionsOther") : item.display_name;
      const name = create("span", "attraction-name", label);
      const category = create("span", `attraction-category category-${item.category}`, attractionCategoryLabel(item.category));
      rowHeader.append(name, category);
      row.append(rowHeader, attractionValueCell(item.values[0], "attraction-current-column"));
      const delta = create("td", "attraction-delta-column", percent(item.wow_pct));
      delta.dataset.direction = direction(item.wow_pct);
      row.append(delta);
      item.values.slice(1).forEach((value) => row.append(attractionValueCell(value, "attraction-history-column")));
      tbody.append(row);
    });

    const tfoot = create("tfoot");
    const totalRow = create("tr");
    const totalHeader = create("th", "attraction-name-column", tr("attractionsTotal"));
    totalHeader.setAttribute("scope", "row");
    totalRow.append(totalHeader, attractionValueCell(totals[0], "attraction-current-column"));
    const totalWow = totals[1]?.money > 0
      ? ((totals[0].money - totals[1].money) / totals[1].money) * 100
      : null;
    const totalDelta = create("td", "attraction-delta-column", percent(totalWow));
    totalDelta.dataset.direction = direction(totalWow);
    totalRow.append(totalDelta);
    totals.slice(1).forEach((value) => totalRow.append(attractionValueCell(value, "attraction-history-column")));
    tfoot.append(totalRow);
    table.append(thead, tbody, tfoot);
    byId("attractionsTable").replaceChildren(table);

    const cutoffMinutes = finite(cutoff.minute) ? cutoff.minute : fallbackCutoffMinutes;
    const elapsedDays = Number.isInteger(cutoff.included_days)
      ? cutoff.included_days
      : finite(cutoff.completed_days)
        ? cutoff.completed_days + 1
        : weeks[0]?.included_days?.length;
    byId("attractionsCutoff").textContent = tr("attractionsCutoff", {
      days: finite(elapsedDays) ? number(elapsedDays) : tr("noData"),
      time: clockFromMinutes(cutoffMinutes)
    });
    byId("attractionsFootnote").textContent = tr("attractionsFootnote");

    const unmapped = Array.isArray(quality.unmapped_service_ids) ? quality.unmapped_service_ids.length : 0;
    const hasDrift = quality.schema_drift === true ||
      unmapped > 0 ||
      (Array.isArray(quality.unmapped_source_names) && quality.unmapped_source_names.length > 0) ||
      (Array.isArray(quality.name_mismatches) && quality.name_mismatches.length > 0);
    const reconciliation = Array.isArray(quality.reconciliation) ? quality.reconciliation : [];
    const reconciled = reconciliation.length === 7 && reconciliation.every((item) => item?.ok === true);
    const qualityNode = byId("attractionsQuality");
    qualityNode.textContent = tr(unmapped > 0 ? "attractionsUnmapped" : hasDrift ? "attractionsMappingDrift" : "attractionsUnverified");
    qualityNode.classList.toggle("is-hidden", reconciled && !hasDrift);
  }

  function renderYoy(park, fallbackComparisonYear) {
    const yoy = park.yoy;
    const comparisonYear = yoy?.base_year ?? fallbackComparisonYear;
    byId("comparisonYear").textContent = finite(comparisonYear) ? tr("vsYear", { year: Math.round(comparisonYear) }) : tr("noData");
    byId("yoySubtitle").textContent = tr("yoySubtitle", { date: yoy?.through ? formatDateOnly(yoy.through) : tr("noData") });
    const table = create("table", "yoy-table");
    const caption = create("caption", "sr-only", tr("yoyTableAria"));
    const thead = create("thead");
    const headerRow = create("tr");
    [["period", null], ["day", "day"], ["week", "week"], ["month", "month"], ["ytd", "ytd"]].forEach(([key]) => {
      headerRow.append(create("th", "", tr(key)));
    });
    thead.append(headerRow);
    const tbody = create("tbody");
    const rows = [["revenue", "revenue"], ["check", "check"], ["topup", "topupShort"]];
    const periods = ["day", "week", "month", "ytd"];
    rows.forEach(([metric, label]) => {
      const row = create("tr");
      const rowHeader = create("th", "", tr(label));
      rowHeader.setAttribute("scope", "row");
      row.append(rowHeader);
      periods.forEach((period) => {
        const covered = yoy?.coverage_by_metric?.[metric]?.[period] === true;
        const value = covered && finite(yoy?.[metric]?.[period]) ? yoy[metric][period] : null;
        const cell = create("td", "yoy-value", percent(value));
        cell.dataset.direction = direction(value);
        cell.dataset.coverage = covered ? "complete" : "missing";
        row.append(cell);
      });
      tbody.append(row);
    });
    table.append(caption, thead, tbody);
    byId("yoyTable").replaceChildren(table);
  }

  function renderWeather(weather) {
    const icon = byId("weatherIcon");
    const summary = byId("weatherSummary");
    const badge = byId("comfortBadge");
    if (!weather || typeof weather !== "object") {
      icon.textContent = "—";
      summary.textContent = tr("weatherUnavailable");
      badge.textContent = tr("noData");
      badge.dataset.comfort = "neutral";
      return;
    }
    const conditionKeys = { clear: "weatherClear", cloudy: "weatherCloudy", rain: "weatherRain" };
    const comfortKeys = { comfortable: "comfortable", neutral: "neutral", uncomfortable: "uncomfortable" };
    const condition = tr(conditionKeys[weather.condition_key] ?? "weatherUnknown");
    icon.textContent = typeof weather.icon === "string" && weather.icon.length <= 8 ? weather.icon : "⛅";
    const parts = [condition];
    if (finite(weather.temp_c)) parts.push(`${number(weather.temp_c)} ${tr("degreeC")}`);
    if (finite(weather.precip_mm)) parts.push(`${tr("precipitation")} ${number(weather.precip_mm, 1)} ${tr("millimetres")}`);
    if (finite(weather.wind_mps)) parts.push(`${tr("wind")} ${number(weather.wind_mps)} ${tr("metresPerSecond")}`);
    summary.textContent = parts.join(" · ");
    const comfort = comfortKeys[weather.comfort_key] ? weather.comfort_key : "neutral";
    const index = finite(weather.comfort_index) ? Math.max(0, Math.min(100, Math.round(weather.comfort_index))) : tr("noData");
    badge.dataset.comfort = comfort;
    badge.textContent = tr("comfortIndex", { label: tr(comfortKeys[comfort]), index });
  }

  function statusState() {
    const park = currentPayload?.park;
    if (!park || park.error) return "error";
    if (!navigator.onLine) return "offline";
    const age = ageMinutes(park.data_as_of);
    if (age === null) return "error";
    if (refreshFailed && refreshFailureCode === "network") return "offline";
    if (park.stale || refreshFailed) return "delayed";
    const hour = yerevanHour();
    if (hour >= 1 && hour < 8) return "night";
    return age > 30 ? "delayed" : "fresh";
  }

  function renderStatus() {
    const status = statusState();
    const park = currentPayload?.park;
    const age = park?.data_as_of ? relativeAge(park.data_as_of) : tr("noData");
    const labels = { fresh: "fresh", delayed: "delayed", offline: "offline", night: "night", error: "dataError" };
    let detailKey = "errorDetail";
    if (status === "fresh") detailKey = "freshDetail";
    if (status === "delayed") detailKey = park?.stale ? "fallbackDetail" : "delayedDetail";
    if (status === "offline") detailKey = "offlineDetail";
    if (status === "night") detailKey = "nightDetail";
    byId("statusStrip").dataset.status = status;
    byId("statusLabel").textContent = tr(labels[status]);
    byId("statusDetail").textContent = tr(detailKey, { age });
  }

  function gateMessage(error) {
    if (error instanceof AppError && error.code === "network") return tr("networkGate");
    if (error instanceof AppError && error.code === "invalid") return tr("invalidData");
    return tr("wrongPassword");
  }

  function setUnlockBusy(isBusy) {
    const button = byId("unlockButton");
    button.disabled = isBusy;
    byId("passwordInput").disabled = isBusy;
    byId("rememberLogin").disabled = isBusy;
    button.querySelector("[data-i18n]").textContent = tr(isBusy ? "unlocking" : "unlock");
  }

  function setRefreshBusy(isBusy) {
    const button = byId("refreshButton");
    button.disabled = isBusy;
    button.querySelector("[data-i18n]").textContent = tr(isBusy ? "refreshing" : "refresh");
    button.querySelector(".refresh-icon").classList.toggle("is-spinning", isBusy);
  }

  function showDashboard(payload, candidate) {
    passphrase = candidate;
    currentPayload = payload;
    refreshFailed = false;
    refreshFailureCode = null;
    byId("accessGate").classList.add("is-hidden");
    byId("accessGate").setAttribute("aria-hidden", "true");
    byId("appShell").classList.remove("is-hidden");
    byId("appShell").setAttribute("aria-hidden", "false");
    byId("runtimeNotice").classList.add("is-hidden");
    renderPayload(payload);
    startAutoRefresh();
    byId("dashboard").focus({ preventScroll: true });
  }

  async function unlockCandidate(candidate, { remember, automatic }) {
    byId("gateError").textContent = "";
    let shouldFocusInput = false;
    setUnlockBusy(true);
    try {
      const payload = await fetchPayload(candidate);
      if (remember) persistRememberedAccess(candidate);
      else clearRememberedAccess();
      showDashboard(payload, candidate);
    } catch (error) {
      const rejectedRememberedAccess = automatic && error instanceof AppError && error.code === "password";
      if (rejectedRememberedAccess) {
        clearRememberedAccess();
        byId("rememberLogin").checked = false;
      }
      byId("gateError").textContent = rejectedRememberedAccess
        ? tr("rememberedAccessRejected")
        : gateMessage(error);
      shouldFocusInput = true;
    } finally {
      setUnlockBusy(false);
      if (shouldFocusInput) byId("passwordInput").focus();
    }
  }

  async function unlock(event) {
    event.preventDefault();
    const input = byId("passwordInput");
    const candidate = input.value;
    const remember = byId("rememberLogin").checked;
    input.value = "";
    if (!candidate) {
      byId("gateError").textContent = tr("wrongPassword");
      input.focus();
      return;
    }
    await unlockCandidate(candidate, { remember, automatic: false });
  }

  async function autoUnlockRemembered() {
    const candidate = readRememberedAccess();
    if (!candidate) return;
    byId("rememberLogin").checked = true;
    await unlockCandidate(candidate, { remember: true, automatic: true });
  }

  async function refreshData() {
    if (!passphrase) return;
    setRefreshBusy(true);
    try {
      const payload = await fetchPayload(passphrase);
      currentPayload = payload;
      refreshFailed = false;
      refreshFailureCode = null;
      byId("runtimeNotice").classList.add("is-hidden");
      renderPayload(payload);
    } catch (error) {
      refreshFailed = true;
      refreshFailureCode = error instanceof AppError ? error.code : "network";
      const notice = byId("runtimeNotice");
      notice.textContent = tr("refreshFailed");
      notice.classList.remove("is-hidden");
      renderStatus();
    } finally {
      setRefreshBusy(false);
    }
  }

  function startAutoRefresh() {
    if (refreshTimer !== null) window.clearInterval(refreshTimer);
    // Refreshing never changes the authentication state or starts a session-expiry timer.
    refreshTimer = window.setInterval(refreshData, AUTO_REFRESH_MS);
  }

  function logout() {
    clearRememberedAccess();
    if (refreshTimer !== null) window.clearInterval(refreshTimer);
    refreshTimer = null;
    passphrase = null;
    currentPayload = null;
    refreshFailed = false;
    refreshFailureCode = null;
    window.location.reload();
  }

  function bindEvents() {
    byId("accessForm").addEventListener("submit", unlock);
    byId("refreshButton").addEventListener("click", refreshData);
    byId("logoutButton").addEventListener("click", logout);
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-language]");
      if (button) setLanguage(button.dataset.language);
    });
    window.addEventListener("online", renderStatus);
    window.addEventListener("offline", renderStatus);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && currentPayload) renderStatus();
    });
  }

  applyTranslations();
  bindEvents();
  void autoUnlockRemembered();
})();
