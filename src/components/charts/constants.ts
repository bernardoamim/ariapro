import { type IPieChartDataProps } from './PieChart'

type SectorsName =
  | 'Geral'
  | 'UI Cirúrgica'
  | 'UI Clínica'
  | 'UI Pediátrica'
  | 'UI Obstétrica'
  | 'UTI Neo Natal'
  | 'UTI 1 Adulto'

export type Sectors = {
  name: SectorsName
  numberOfBeds: number
  numberOfBedsOccupied: number
  idealOccupation: number
  occupation: number
  idealNumberOfEmployees: number
  numberOfEmployees: number
}
type IColors = {
  [k in SectorsName]: string
}

export const colors: IColors = {
  Geral: '#87888C',
  'UI Cirúrgica': '#6B2BF2',
  'UI Clínica': '#11C155',
  'UI Pediátrica': '#FF00A6',
  'UI Obstétrica': '#0AC6FF',
  'UTI Neo Natal': '#3768F3',
  'UTI 1 Adulto': '#FEB652',
}

export const sectorsData: Sectors[] = [
  {
    name: 'Geral',
    numberOfBeds: 70,
    numberOfBedsOccupied: 42,
    idealOccupation: 80.0,
    occupation: 42 / 70,
    idealNumberOfEmployees: 15,
    numberOfEmployees: 20,
  },
  {
    name: 'UI Cirúrgica',
    numberOfBeds: 20,
    numberOfBedsOccupied: 12,
    idealOccupation: 80.0,
    occupation: 12 / 20,
    idealNumberOfEmployees: 4,
    numberOfEmployees: 5,
  },
  {
    name: 'UI Clínica',
    numberOfBeds: 18,
    numberOfBedsOccupied: 12,
    idealOccupation: 80.0,
    occupation: 12 / 18,
    idealNumberOfEmployees: 4,
    numberOfEmployees: 5,
  },
  {
    name: 'UI Pediátrica',
    numberOfBeds: 8,
    numberOfBedsOccupied: 4,
    idealOccupation: 80.0,
    occupation: 4 / 8,
    idealNumberOfEmployees: 1,
    numberOfEmployees: 1,
  },
  {
    name: 'UI Obstétrica',
    numberOfBeds: 8,
    numberOfBedsOccupied: 5,
    idealOccupation: 80.0,
    occupation: 5 / 8,
    idealNumberOfEmployees: 2,
    numberOfEmployees: 3,
  },
  {
    name: 'UTI Neo Natal',
    numberOfBeds: 4,
    numberOfBedsOccupied: 2,
    idealOccupation: 80.0,
    occupation: 2 / 4,
    idealNumberOfEmployees: 1,
    numberOfEmployees: 2,
  },
  {
    name: 'UTI 1 Adulto',
    numberOfBeds: 10,
    numberOfBedsOccupied: 9,
    idealOccupation: 80.0,
    occupation: 9 / 10,
    idealNumberOfEmployees: 3,
    numberOfEmployees: 4,
  },
]

export const collaborators: IPieChartDataProps[] = [
  {
    id: 'UI Cirúrgica',
    label: 'UI Cirúrgica',
    color: '#6B2BF2',
    value: 5,
  },
  {
    id: 'UI Clínica',
    label: 'UI Clínica',
    color: '#11C155',
    value: 5,
  },
  {
    id: 'UI Pediátrica',
    label: 'UI Pediátrica',
    color: '#FF00A6',
    value: 1,
  },
  {
    id: 'UI Obstétrica',
    label: 'UI Obstétrica',
    color: '#0AC6FF',
    value: 3,
  },
  {
    id: 'UTI Neo Natal',
    label: 'UTI Neo Natal',
    color: '#3768F3',
    value: 2,
  },
  {
    id: 'UTI 1 Adulto',
    label: 'UTI 1 Adulto',
    color: '#FEB652',
    value: 4,
  },
]

export const occupation = [
  {
    id: 'real',
    color: '#6B2BF2',
    data: [
      {
        x: 'Jan',
        y: 56,
      },
      {
        x: 'Fev',
        y: 62,
      },
      {
        x: 'Mar',
        y: 60,
      },
      {
        x: 'Abr',
        y: 65,
      },
      {
        x: 'Mai',
        y: 62,
      },
      {
        x: 'Jun',
        y: 64,
      },
      {
        x: 'Jul',
        y: 61,
      },
      {
        x: 'Ago',
        y: 58,
      },
      {
        x: 'Set',
        y: 59,
      },
      {
        x: 'Out',
        y: 59,
      },
      {
        x: 'Nov',
        y: 63,
      },
      {
        x: 'Dez',
        y: 66,
      },
    ],
  },
  {
    id: 'ideal',
    color: '#11C155',
    data: [
      {
        x: 'Jan',
        y: 60,
      },
      {
        x: 'Fev',
        y: 60,
      },
      {
        x: 'Mar',
        y: 60,
      },
      {
        x: 'Abr',
        y: 60,
      },
      {
        x: 'Mai',
        y: 60,
      },
      {
        x: 'Jun',
        y: 60,
      },
      {
        x: 'Jul',
        y: 60,
      },
      {
        x: 'Ago',
        y: 60,
      },
      {
        x: 'Set',
        y: 60,
      },
      {
        x: 'Out',
        y: 60,
      },
      {
        x: 'Nov',
        y: 60,
      },
      {
        x: 'Dez',
        y: 60,
      },
    ],
  },
]

export const chart4 = sectorsData
  .filter((elm) => elm.name !== 'Geral')
  .map((data) => ({
    name: data.name,
    ideal:
      data.idealOccupation >= Math.ceil(data.occupation * 100)
        ? data.idealOccupation - Math.ceil(data.occupation * 100)
        : 0,
    real: Math.ceil(data.occupation * 100),
    idealColor: '#EDEDED',
    realColor: colors[data.name],
  }))

export const collaboratorsPerSector = [
  {
    country: 'AD',
    'hot dog': 190,
    'hot dogColor': 'hsl(355, 70%, 50%)',
    burger: 169,
    burgerColor: 'hsl(327, 70%, 50%)',
    sandwich: 174,
    sandwichColor: 'hsl(336, 70%, 50%)',
    kebab: 47,
    kebabColor: 'hsl(296, 70%, 50%)',
    fries: 7,
    friesColor: 'hsl(251, 70%, 50%)',
    donut: 22,
    donutColor: 'hsl(310, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 28,
    'hot dogColor': 'hsl(308, 70%, 50%)',
    burger: 44,
    burgerColor: 'hsl(42, 70%, 50%)',
    sandwich: 86,
    sandwichColor: 'hsl(135, 70%, 50%)',
    kebab: 168,
    kebabColor: 'hsl(233, 70%, 50%)',
    fries: 113,
    friesColor: 'hsl(353, 70%, 50%)',
    donut: 108,
    donutColor: 'hsl(268, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 78,
    'hot dogColor': 'hsl(177, 70%, 50%)',
    burger: 16,
    burgerColor: 'hsl(144, 70%, 50%)',
    sandwich: 154,
    sandwichColor: 'hsl(228, 70%, 50%)',
    kebab: 59,
    kebabColor: 'hsl(284, 70%, 50%)',
    fries: 127,
    friesColor: 'hsl(176, 70%, 50%)',
    donut: 95,
    donutColor: 'hsl(110, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 36,
    'hot dogColor': 'hsl(343, 70%, 50%)',
    burger: 162,
    burgerColor: 'hsl(110, 70%, 50%)',
    sandwich: 45,
    sandwichColor: 'hsl(231, 70%, 50%)',
    kebab: 192,
    kebabColor: 'hsl(30, 70%, 50%)',
    fries: 111,
    friesColor: 'hsl(15, 70%, 50%)',
    donut: 85,
    donutColor: 'hsl(178, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 138,
    'hot dogColor': 'hsl(141, 70%, 50%)',
    burger: 151,
    burgerColor: 'hsl(304, 70%, 50%)',
    sandwich: 78,
    sandwichColor: 'hsl(53, 70%, 50%)',
    kebab: 5,
    kebabColor: 'hsl(307, 70%, 50%)',
    fries: 197,
    friesColor: 'hsl(197, 70%, 50%)',
    donut: 3,
    donutColor: 'hsl(162, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 8,
    'hot dogColor': 'hsl(193, 70%, 50%)',
    burger: 171,
    burgerColor: 'hsl(71, 70%, 50%)',
    sandwich: 150,
    sandwichColor: 'hsl(49, 70%, 50%)',
    kebab: 24,
    kebabColor: 'hsl(183, 70%, 50%)',
    fries: 194,
    friesColor: 'hsl(355, 70%, 50%)',
    donut: 128,
    donutColor: 'hsl(87, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 80,
    'hot dogColor': 'hsl(214, 70%, 50%)',
    burger: 188,
    burgerColor: 'hsl(88, 70%, 50%)',
    sandwich: 61,
    sandwichColor: 'hsl(76, 70%, 50%)',
    kebab: 79,
    kebabColor: 'hsl(233, 70%, 50%)',
    fries: 10,
    friesColor: 'hsl(229, 70%, 50%)',
    donut: 163,
    donutColor: 'hsl(86, 70%, 50%)',
  },
]
