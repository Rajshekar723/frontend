import React, { ReactNode } from 'react'
import Navbar from './navbar/Navbar'

type LayoutProps = {
  sidebarContentLeft?: ReactNode
  children: ReactNode
  sidebarContentRight?: ReactNode
}

export default function Layout({
  sidebarContentLeft,
  children,
  sidebarContentRight,
}: LayoutProps) {
  return (
    <div className="mx-auto bg-gray-200 dark:bg-dark-800 min-h-screen">
      <Navbar />
      <div className="grid grid-cols-9 gap-10 mt-10 px-4 md:px-60 md:pt-10 ">
        {sidebarContentLeft && (
          <aside className="col-span-2 hidden md:block">
            {sidebarContentLeft}
          </aside>
        )}
        <main
          className={
            sidebarContentLeft ? 'col-span-9 md:col-span-5' : 'md:col-span-7'
          }
        >
          {children}
        </main>
        {sidebarContentRight && (
          <aside className="col-span-2 hidden md:block">
            {sidebarContentRight}
          </aside>
        )}
      </div>
      <div></div>
    </div>
  )
}
