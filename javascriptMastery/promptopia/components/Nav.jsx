'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

function Nav () {
  const { data: session } = useSession()
  const [toggleDropdown, setToggleDropdown] = useState(false)

  // next-auth
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    setUpProviders()
  }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          className='object-contain'
          width={30}
          height={30}
          src='/assets/images/logo.svg'
          alt='Logo de mi sitio'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop navigation */}
      <div className='sm:flex hidden'>
        {session?.user
          ? (
            <div className='flex gap-3 md:gap-5'>
              <Link className='black_btn' href='/create-prompt'>
                Create post
              </Link>

              <button className='outline_btn' type='button' onClick={signOut}>
                Sign out
              </button>

              <Link href='/profile'>
                <Image
                  className='rounded-full'
                  src={session?.user.image}
                  width={37}
                  height={37}
                  alt='Profile'
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
                >
                  Sign in with {provider.name}
                </button>
              ))}
            </>
            )}
      </div>

      {/* Movile navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user
          ? (
            <div className='flex'>
              <Image
                className='rounded-full'
                src={session?.user.image}
                width={37}
                height={37}
                alt='Profile'
                onClick={() => setToggleDropdown((prevState) => !prevState)}
              />

              {toggleDropdown && (
                <div className='dropdown'>
                  <Link
                    className='dropdown_link'
                    href='/profile'
                    onClick={() => setToggleDropdown(false)}
                  >My profile
                  </Link>
                  <Link
                    className='dropdown_link'
                    href='/create-prompt'
                    onClick={() => setToggleDropdown(false)}
                  >Create prompt
                  </Link>
                  <button
                    className='mt-5 w-full black_btn'
                    onClick={() => {
                      setToggleDropdown(false)
                      signOut()
                    }}
                    type='button'
                  >
                    Sign Out
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
                >
                  Sign in with {provider.name}
                </button>
              ))}
            </>
            )}
      </div>
    </nav>
  )
}

export default Nav
