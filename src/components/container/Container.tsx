import { ReactNode } from 'react';

const Container = ({children}: {children: ReactNode}) => {
    return (
        <section className="w-full mx-auto px-0">
          {children}
        </section>
      );
}

export default Container