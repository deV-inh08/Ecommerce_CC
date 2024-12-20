import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

interface Props {
  children: React.ReactNode;
}

const SignUpLayout = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}

export default SignUpLayout;
