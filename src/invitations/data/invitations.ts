import type { Invitation } from '../model'

export const invitations = [
  {
    slug: 'larisa-viktorovna',
    greeting: 'Дорогая Лариса Викторовна ❤️',
    guests: [
      {
        id: 'larisa-viktorovna',
        firstName: 'Лариса Викторовна',
        isAdult: true,
      },
    ],
  },
  {
    slug: 'meshechko-family',
    greeting: 'Привет, родная стая ❤️',
    guests: [
      {
        id: 'masha',
        firstName: 'Маша',
        isAdult: true,
      },
      {
        id: 'sasha',
        firstName: 'Саша',
        isAdult: true,
      },
    ],
  },
  {
    slug: 'fam-family',
    greeting: 'Дорогие родные ❤️',
    guests: [
      {
        id: 'nadezhda',
        firstName: 'Мама',
        isAdult: true,
      },
      {
        id: 'thu',
        firstName: 'Папа',
        isAdult: true,
      },
      {
        id: 'artem',
        firstName: 'Артём',
        isAdult: false,
      },
    ],
  },
  {
    slug: 'ilya',
    greeting: 'Здарова, заебал ❤️',
    guests: [
      {
        id: 'ilya',
        firstName: 'Илья',
        isAdult: true,
      },
    ],
  },
  {
    slug: 'zina',
    greeting: 'Здарова, Зина ❤️',
    guests: [
      {
        id: 'zina',
        firstName: 'Серёжа',
        isAdult: true,
      },
    ],
  },
  {
    slug: 'kirill',
    greeting: 'Привет, Кирилл ❤️',
    guests: [
      {
        id: 'kirill',
        firstName: 'Кирилл',
        isAdult: true,
      },
    ],
  },
  {
    slug: 'olya-and-alisa',
    greeting: 'Привет, Оля и Алиса ❤️',
    guests: [
      {
        id: 'olya',
        firstName: 'Оля',
        isAdult: true,
      },
      {
        id: 'alisa',
        firstName: 'Алиса',
        isAdult: false,
      },
    ],
  },
  {
    slug: 'ksenia',
    greeting: 'Привет, Ксюша ❤️',
    guests: [
      {
        id: 'ksenia',
        firstName: 'Ксюша',
        isAdult: true,
      },
    ],
  },
  {
    slug: 'karepov-family',
    greeting: 'Дорогие Александр и Ирина ❤️',
    guests: [
      {
        id: 'alexander',
        firstName: 'Александр',
        isAdult: true,
      },
      {
        id: 'irina',
        firstName: 'Ирина',
        isAdult: true,
      },
    ],
  },
] satisfies Invitation[]
