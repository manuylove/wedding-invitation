export interface TimelineItem {
  time: string
  title: string
  description: string
  handwritten?: string
}

export interface WeddingContent {
  hero: {
    firstName: string
    ampersand: string
    secondName: string
    subtitle: string
    handwritten: string
    actionLabel: string
    date: {
      day: string
      month: string
      year: string
    }
    city: string
    greetingFallback: string
    imageAlt: string
  }
  personalMessage: {
    body: string
    handwritten: string
  }
  tenYears: {
    intro: string
    years: string
    caption: string
    handwritten: string
  }
  timeline: {
    title: string
    items: TimelineItem[]
  }
  venue: {
    title: string
    name: string
    address: string
    travelTime: string
    description: {
      intro: string
      details: string
    }
    handwritten: string
    mapLabel: string
  }
  transfer: {
    title: string
    description: {
      intro: string
      details: string
      note: string
    }
    route: {
      from: string
      via: string
      to: string
    }
    handwritten: string
  }
  dressCode: {
    title: string
    description: string
    note: string
    palette: string[]
  }
  gifts: {
    title: string
    description: string
    handwritten: string
  }
  rsvp: {
    title: string
    description: string
    attendanceLabel: string
    transferLabel: string
    alcoholLabel: string
    dietaryRestrictionsLabel: string
    dietaryRestrictionsPlaceholder: string
    additionalInfoLabel: string
    additionalInfoPlaceholder: string
    submitLabel: string
  }
  success: {
    attending: {
      title: string
      description: string
    }
    declined: {
      title: string
      description: string
    }
    handwritten: string
  }
  footer: {
    siteName: string
    couple: string
    date: string
    city: string
    project: string
    status: string
    version: string
    madeWith: string
    frontend: string
    analyst: string
  }
}

export const weddingContent = {
  hero: {
    firstName: 'Егор',
    ampersand: '&',
    secondName: 'Полина',
    subtitle: 'приглашают разделить с ними день, в который они станут семьёй',
    handwritten: 'наконец-то этот день настал',
    actionLabel: 'Открыть приглашение',
    date: {
      day: '03',
      month: 'октября',
      year: '2026',
    },
    city: 'Томск',
    greetingFallback: 'Привет ❤️',
    imageAlt: 'Егор и Полина вместе',
  },
  personalMessage: {
    body: 'Очень хочется, чтобы этот день запомнился не только нам.',
    handwritten: 'Мы собираем рядом только самых близких. Будем счастливы провести этот день вместе.',
  },
  tenYears: {
    intro: 'Иногда одна встреча меняет всю жизнь.',
    years: '10',
    caption: 'лет вместе',
    handwritten: 'и это только начало',
  },
  timeline: {
    title: 'Тайминг дня',
    items: [
      {
        time: '16:30',
        title: 'Велком',
        description: 'Встречаемся, знакомимся, обнимаемся, пьём игристое и никуда не торопимся',
      },
      {
        time: '17:00',
        title: 'Церемония',
        description: 'Тот самый момент, ради которого мы все соберёмся вместе',
        handwritten:
            'церемония может начаться чуть позже, если мы будем слишком долго собираться :)',
      },
      {
        time: '18:00',
        title: 'Банкет',
        description: 'Будем есть, говорить, смеяться и проводить этот вечер без спешки',
      },
      {
        time: '22:00',
        title: 'Торт',
        description: 'Да, мы тоже его очень ждём',
      },
      {
        time: '23:00',
        title: 'Завершение вечера',
        description: 'Трансфер отвезёт гостей обратно в Томск',
      },
    ],
  },
  venue: {
    title: 'Утёс',
    name: 'Загородный комплекс «Утёс»',
    address: 'Томский район, посёлок Синий Утёс, 61',
    travelTime: '15 минут от Томска',
    description: {
      intro: 'Загородная площадка среди сосен, тишины и осеннего воздуха.',
      details:
          'Мы выбрали место, где можно провести весь день вместе, не отвлекаясь на город и суету.',
    },
    handwritten: 'именно здесь мы скажем друг другу «да»',
    mapLabel: 'Открыть в 2ГИС',
  },
  transfer: {
    title: 'О дороге мы уже позаботились',
    description: {
      intro: 'В день свадьбы мы уже будем ждать гостей на площадке.',
      details:
          'Для гостей будет организован трансфер до площадки и обратно после праздника.',
      note:
          'Точное время и место встречи сообщим ближе к свадьбе.',
    },
    route: {
      from: 'Томск',
      via: 'Утёс',
      to: 'Томск',
    },
    handwritten: 'пусть этот день начнётся без лишних забот',
  },
  dressCode: {
    title: 'Будет красиво, если…',
    description:
        'Вы выберете спокойные природные оттенки, в которых вам будет комфортно весь день.',
    note: 'Белый в этот день оставим невесте.',
    palette: [
      'Молочный',
      'Бежевый',
      'Оливковый',
      'Голубой',
      'Графитовый',
      'Шоколадный',
      'Бордовый',
    ],
  },
  gifts: {
    title: 'О подарках',
    description:
        'Самый главный подарок — ваше присутствие. Если появится желание поздравить нас дополнительно, будем благодарны подарку в конверте.',
    handwritten: 'правда, главное — приезжайте',
  },
  rsvp: {
    title: 'Остался последний шаг',
    description:
        'Будем благодарны за ответ до 1 сентября. Это очень поможет в подготовке праздника.',
    attendanceLabel: 'Кто будет с нами?',
    transferLabel: 'Нужен ли трансфер до площадки?',
    alcoholLabel: 'Какие предпочтения по алкогольным напиткам?',
    dietaryRestrictionsLabel: 'Есть ли аллергии или особенности питания?',
    dietaryRestrictionsPlaceholder:
        'Например: аллергия на орехи, не ем рыбу, вегетарианец…',
    additionalInfoLabel: 'Что ещё нам важно знать?',
    additionalInfoPlaceholder: 'Здесь можно оставить комментарий, если это поможет нам лучше подготовиться.',
    submitLabel: 'Отправить ответ',
  },
  success: {
    attending: {
      title: 'Спасибо ❤️',
      description: 'Ответ получен. До встречи 3 октября.',
    },
    declined: {
      title: 'Спасибо ❤️',
      description:
          'Ответ получен. Очень жаль, что в этот раз не получится увидеться.',
    },
    handwritten: 'Миша проверил — всё отправилось',
  },
  footer: {
    siteName: 'Red Thread',
    couple: 'Егор & Полина',
    date: '03.10.2026',
    city: 'Томск',
    project: 'wedding-invitation',
    status: 'In love ❤️',
    version: '1.0.0',
    madeWith: 'Made with ❤️',
    frontend: 'Frontend Developer',
    analyst: 'System Analyst',
  },
} satisfies WeddingContent
