import { type NextPage } from 'next'
import InfoIcon from '../../public/assets/icons/info-icon.svg'
import FilterIcon from '../../public/assets/icons/filter-icon.svg'
import { type IChartDataProps, PieChart } from '~/components/charts/PieChart'
// import { signIn, signOut, useSession } from 'next-auth/react'

type Sectors = {
  name: string
  numberOfBeds: number
  numberOfBedsOccupied: number
  idealOccupation: number
  occupation: number
  idealNumberOfEmployees: number
  numberOfEmployees: number
}

const sectorsData: Sectors[] = [
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
    name: 'UI Clínica Médica',
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

const collaborators: IChartDataProps[] = [
  {
    id: 'UI Cirúrgica',
    label: 'UI Cirúrgica',
    color: '#6B2BF2',
    value: 5,
  },
  {
    id: 'UI Clínica Médica',
    label: 'UI Clínica Médica',
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

// import { api } from '~/utils/api'

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <section className="flex w-full gap-8 p-8">
      <div className="flex w-2/3 flex-col">
        <div className="mb-6 flex flex-row items-center text-gray-950">
          <h1 className="mr-1 text-2xl">Olá Leonardo, veja seu resumo!</h1>
          <InfoIcon width={24} height={24} strokeWidth={1.5} />
        </div>
        <div className="max-h-80 w-full overflow-hidden overflow-y-scroll rounded-lg border border-solid border-[#95AAC94D]">
          <table className="w-full">
            <thead className="bg-[#EEEFFB]">
              <tr>
                <th className="p-4 first:text-start">Setores</th>
                <th className="p-4 first:text-start">
                  Leitos ocupados / Total
                </th>
                <th className="p-4 first:text-start">Ocupação / Ideal (%)</th>
                <th className="p-4 first:text-start">
                  Nº Colaboradores / Ideal
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {sectorsData.map((sectorData) => (
                <tr key={sectorData.name}>
                  <td className="last-of-type:border-b-none border-b border-solid border-[#95AAC94D] p-4 text-center first:text-start">
                    {sectorData.name}
                  </td>

                  <td
                    key="Leitos Ocupados/Total"
                    className="last-of-type:border-b-none border-b border-solid border-[#95AAC94D] p-4 text-center first:text-start"
                  >
                    {`${sectorData.numberOfBedsOccupied} / ${sectorData.numberOfBeds}`}
                  </td>

                  <td
                    key="Ocupação/Ideal (%)"
                    className="last-of-type:border-b-none border-b border-solid border-[#95AAC94D] p-4 text-center first:text-start"
                  >
                    {Number(sectorData.occupation * 100).toFixed()} /&nbsp;
                    {sectorData.idealOccupation}%
                  </td>

                  <td
                    key="Nº Colaboradores/Ideal"
                    className="last-of-type:border-b-none border-b border-solid border-[#95AAC94D] p-4 text-center first:text-start"
                  >
                    {`${sectorData.numberOfEmployees} / ${sectorData.idealNumberOfEmployees}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex w-1/3 flex-col">
        <div className="mb-6 flex flex-row items-center text-gray-950">
          <h1 className="mr-1 text-2xl">Colaboradores por Setor</h1>
          <InfoIcon width={24} height={24} strokeWidth={1.5} />
        </div>
        <div className="relative flex h-80 max-h-80 w-full items-center justify-center rounded-lg border border-solid border-[#95AAC94D] bg-white">
          <FilterIcon
            width={24}
            height={24}
            strokeWidth={1.5}
            stroke="#87888C"
            className="absolute right-5 top-5 cursor-pointer"
            onClick={() => console.log('clicked')}
          />
          <PieChart data={collaborators} />
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-2xl">20</span>
            <span className="text-[#87888C]">Total</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession()

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   )

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         // eslint-disable-next-line no-void
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? 'Sign out' : 'Sign in'}
//       </button>
//     </div>
//   )
// }
