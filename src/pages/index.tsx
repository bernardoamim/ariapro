import { type NextPage } from 'next'
import InfoIcon from '../../public/assets/icons/info-icon.svg'
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

// import { api } from '~/utils/api'

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <div className="flex w-full flex-col p-8">
      <div className="mb-6 flex flex-row items-center text-gray-950">
        <h1 className="mr-1 text-2xl font-medium">
          Olá Leonardo, veja seu resumo!
        </h1>
        <InfoIcon width={24} height={24} strokeWidth={1.5} />
      </div>
      <div className="max-h-80 w-2/3 overflow-hidden overflow-y-scroll rounded-lg border border-solid border-[#95AAC94D]">
        <table className="w-full">
          <thead className="bg-[#EEEFFB]">
            <tr>
              <th className="p-4 first:text-start">Setores</th>
              <th className="p-4 first:text-start">Leitos ocupados / Total</th>
              <th className="p-4 first:text-start">Ocupação / Ideal (%)</th>
              <th className="p-4 first:text-start">Nº Colaboradores / Ideal</th>
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
      {/* <div className="max-h-80 w-2/3 overflow-hidden overflow-y-scroll rounded-lg border border-solid border-[#95AAC94D]">
        <table className="w-full">
          <thead className="bg-[#EEEFFB]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-4 first:text-start">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="last-of-type:border-b-none border-b border-solid border-[#95AAC94D] p-4 text-center first:text-start"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
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
