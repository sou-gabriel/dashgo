import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const router = useRouter()

  const isActive = shouldMatchExactHref
    ? rest.href === router.asPath || rest.as === router.asPath
    : router.asPath.startsWith(String(rest.href)) ||
      router.asPath.startsWith(String(rest.as))

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
