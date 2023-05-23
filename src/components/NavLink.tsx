import { type ReactNode } from 'react'
import { useRouter } from 'next/router'

export type NavLinkState = 'default' | 'active'

interface INavLinkProps {
  children: ReactNode
  href: string
  linkState?: NavLinkState
}

function NavLink({ children, href, linkState = 'default' }: INavLinkProps) {
  const router = useRouter()

  const classNames = {
    active:
      'flex w-full items-center gap-2 rounded-full bg-gradient-to-r from-[#314BF4] to-[#E010B6] p-4 text-slate-100',
    default: 'flex w-full items-center gap-2 p-4 text-gray-950',
  }

  const handleClick = () => {
    void router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={classNames[linkState]}>
      {children}
    </a>
  )
}

export { NavLink }
