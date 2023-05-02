import { type NextPage } from 'next'
import InfoIcon from '../../public/assets/icons/info-icon.svg'
// import { signIn, signOut, useSession } from 'next-auth/react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Sectors = {
  name: string
  idealOccupation: number
  occupation: number
  idealNumberOfEmployees: number
  numberOfEmployees: number
}

const defaultData: Sectors[] = [
  {
    name: 'Geral',
    idealOccupation: 70,
    occupation: 42,
    idealNumberOfEmployees: 70,
    numberOfEmployees: 42,
  },
  {
    name: 'UI Cirúrgica',
    idealOccupation: 70,
    occupation: 42,
    idealNumberOfEmployees: 70,
    numberOfEmployees: 42,
  },
  {
    name: 'UI Clínica Médica',
    idealOccupation: 70,
    occupation: 42,
    idealNumberOfEmployees: 70,
    numberOfEmployees: 42,
  },
  {
    name: 'UI Pediátrica',
    idealOccupation: 70,
    occupation: 42,
    idealNumberOfEmployees: 70,
    numberOfEmployees: 42,
  },
  {
    name: 'UI Obstétrica',
    idealOccupation: 70,
    occupation: 42,
    idealNumberOfEmployees: 70,
    numberOfEmployees: 42,
  },
  {
    name: 'UI Neo Natal',
    idealOccupation: 70,
    occupation: 42,
    idealNumberOfEmployees: 70,
    numberOfEmployees: 42,
  },
  {
    name: 'UTI Pediátrica',
    idealOccupation: 70,
    occupation: 42,
    idealNumberOfEmployees: 70,
    numberOfEmployees: 42,
  },
  {
    name: 'UTI Neo Natal',
    idealOccupation: 70,
    occupation: 42,
    idealNumberOfEmployees: 70,
    numberOfEmployees: 42,
  },
]

const columnHelper = createColumnHelper<Sectors>()

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <span>Setor</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.idealOccupation, {
    id: 'idealOccupation',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Ocupação ideal</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('occupation', {
    header: () => (
      <span className="flex items-center">
        Ocupação <InfoIcon width={24} height={24} strokeWidth={1.5} />
      </span>
    ),
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('idealNumberOfEmployees', {
    header: () => <span>Colaboradores ideal</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('numberOfEmployees', {
    header: 'Colaboradores',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('numberOfEmployees', {
    header: 'Colaboradores',
    footer: (info) => info.column.id,
  }),
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
