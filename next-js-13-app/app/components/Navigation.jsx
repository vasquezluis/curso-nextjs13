import styles from './Navigation.module.css'
import Link from 'next/link'

const LINKS = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Posts',
    route: '/posts'
  }
]

function Navigation () {
  return (

    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {LINKS.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

  )
}

export default Navigation
