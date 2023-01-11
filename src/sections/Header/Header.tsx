import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <Link href="#">
        <Image
          src="/images/logo.svg"
          alt="Header logo"
          width={'100'}
          height={'50'}
        />
      </Link>
    </header>
  )
}

export default Header
