import Header from './Header'
import styled from 'styled-components'

const S = {
  Layout: styled.div`
    margin: 0 auto;
    padding: 100px;
  `
}

const Layout = ({ children }) => (
  <S.Layout>
    <Header />
    {children}
  </S.Layout>
)

export default Layout