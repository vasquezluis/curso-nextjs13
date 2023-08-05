'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  // estado del login de ususario
  const { data: session } = useSession()
  const [toggleDropdown, setToggleDropdown] = useState(false)

  // inicializar providers para el login de usuario
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }

    setUpProviders()
  }, [])

  return (
    <nav className='flex justify-between items-center w-full mb-16 py-3'>
      <Link href='/' className='flex gap-2 justify-center items-center'>
        <Image
          className='object-contain'
          src='/assets/images/logo.svg'
          width={30}
          height={30}
          alt='Promptopia Logo'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* desktop navigation */}
      <div className='sm:flex hidden'>
        {session?.user
          ? (
            <div className='flex gap-3 md:gap-5'>
              <Link href='/create-prompt' className='black_btn'>Create post</Link>

              <button type='button' onClick={signOut} className='outline_btn'>
                Sign Out
              </button>

              <Link href='/profile'>
                <Image
                  src={session?.user?.image}
                  className='rounded-full'
                  width={37}
                  height={37}
                  alt='Profile'
                  title='My Profile'
                />
              </Link>
            </div>
            )
          : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'
                  >Sign In
                  </button>
                ))}
            </>
            )}
      </div>

      {/* mobile navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user
          ? (
            <div className='flex'>
              <Image
                src={session?.user?.image}
                className='rounded-full'
                width={37}
                height={37}
                alt='Profile'
                // mejor practica
                onClick={() => setToggleDropdown((prevState) => !prevState)}
              />

              {toggleDropdown && (
                <div className='dropdown'>
                  <Link
                    href='/profile'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}
                  >My Profile
                  </Link>
                  <Link
                    href='/create-prompt'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}
                  >Create prompt
                  </Link>
                  <button
                    type='button'
                    className='mt-5 w-full black_btn'
                    onClick={() => {
                      setToggleDropdown(false)
                      signOut()
                    }}
                  >
                    Sing Out
                  </button>
                </div>
              )}
            </div>
            )
          : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'
                  >Sign In
                  </button>
                ))}
            </>
            )}
      </div>
    </nav>
  )
}

export default Nav
