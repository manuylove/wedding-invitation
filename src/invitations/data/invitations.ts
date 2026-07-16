import type { Invitation } from '../model'

export const invitations = [
  {
    slug: 'larisa-viktorovna',
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
