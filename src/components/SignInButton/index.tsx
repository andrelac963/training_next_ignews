import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const [session, setSession] = useState(false)

  return session ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      André Luiz
      <FiX
        color="#737380"
        className={styles.closeIcon}
        onClick={() => setSession(false)}
      />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => setSession(true)}
    >
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  )
}
