import React, { ReactNode } from 'react'

const Container = ({children}: {children: ReactNode}) => {
    return (
        <section className="max-w-screen-xl mx-auto px-0">
          {children}
        </section>
      );
}

export default Container