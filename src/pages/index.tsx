import { type NextPage } from 'next'
import InfoIcon from '../../public/assets/icons/info-icon.svg'
import FilterIcon from '../../public/assets/icons/filter-icon.svg'
import { PieChart } from '~/components/charts/PieChart'
import { LineChart } from '~/components/charts/LineChart'
import {
  chart4,
  collaborators,
  collaboratorsPerSector,
  occupation,
  sectorsData,
} from '~/components/charts/constants'
import { BarChart } from '~/components/charts/BarChart'
// import { signIn, signOut, useSession } from 'next-auth/react'

// import { api } from '~/utils/api'

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <article className="flex h-auto w-full flex-col">
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
            />
            <PieChart data={collaborators} />
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-2xl">20</span>
              <span className="text-[#87888C]">Total</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full gap-8 p-8">
        <div className="flex w-1/2 flex-col">
          <div className="mb-6 flex flex-row items-center text-gray-950">
            <h1 className="mr-1 text-2xl">Taxa de Ocupação</h1>
            <InfoIcon width={24} height={24} strokeWidth={1.5} />
          </div>
          <div className="relative h-80 max-h-80 w-full rounded-lg border border-solid border-[#95AAC94D] bg-white">
            <FilterIcon
              width={24}
              height={24}
              strokeWidth={1.5}
              stroke="#87888C"
              className="absolute right-5 top-5 cursor-pointer"
            />
            <LineChart data={occupation} />
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="mb-6 flex flex-row items-center text-gray-950">
            <h1 className="mr-1 text-2xl">Taxa de Ocupação por Setor</h1>
            <InfoIcon width={24} height={24} strokeWidth={1.5} />
          </div>
          <div className="relative h-80 max-h-80 w-full rounded-lg border border-solid border-[#95AAC94D] bg-white">
            <FilterIcon
              width={24}
              height={24}
              strokeWidth={1.5}
              stroke="#87888C"
              className="absolute right-5 top-5 cursor-pointer"
            />
            <BarChart data={chart4} />
          </div>
        </div>
      </section>
    </article>
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
