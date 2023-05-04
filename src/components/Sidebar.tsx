/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import SquaresIcon from '../../public/assets/icons/squares-icon.svg'
import UsersIcon from '../../public/assets/icons/users-icon.svg'
import MedicalIcon from '../../public/assets/icons/medical-icon.svg'
import HeartbeatIcon from '../../public/assets/icons/heartbeat-icon.svg'
import { useRouter } from 'next/router'

function Sidebar() {
  const router = useRouter()

  return (
    <aside
      className="fixed flex min-h-screen w-1/6 flex-col border border-solid border-[#95AAC94D] bg-white
      py-5"
    >
      <Logo />
      <ul className="mt-20">
        <li className="min-h-14 px-4">
          <NavLink
            href="/"
            linkState={router.asPath === '/' ? 'active' : 'default'}
          >
            <SquaresIcon
              width={24}
              height={24}
              stroke={router.asPath === '/' ? 'white' : '#565fd5'}
              strokeWidth={1.5}
            />
            Dashboard
          </NavLink>
        </li>
        <li className="min-h-14 px-4">
          <NavLink
            href="/employees"
            linkState={router.asPath === '/employees' ? 'active' : 'default'}
          >
            <UsersIcon
              width={24}
              height={24}
              strokeWidth={1.5}
              stroke={router.asPath === '/employees' ? 'white' : '#565fd5'}
            />
            Colaboradores
          </NavLink>
        </li>
        <li className="min-h-14 px-4">
          <NavLink
            href="/sectors"
            linkState={router.asPath === '/sectors' ? 'active' : 'default'}
          >
            <MedicalIcon
              width={24}
              height={24}
              stroke={router.asPath === '/sectors' ? 'white' : '#565fd5'}
              strokeWidth={1.5}
            />
            Setores
          </NavLink>
        </li>
        <li className="min-h-14 px-4">
          <NavLink
            href="/entries"
            linkState={router.asPath === '/entries' ? 'active' : 'default'}
          >
            <HeartbeatIcon
              width={24}
              height={24}
              stroke={router.asPath === '/entries' ? 'white' : '#565fd5'}
              strokeWidth={1.5}
            />
            Internações
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export { Sidebar }
