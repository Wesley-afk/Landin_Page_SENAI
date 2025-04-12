import NavBar from './NavBar'
const Layout = ({children}) => {
  return (
    <>
        <NavBar/>

        <div style={{paddingTop:'60px', margin:'0', paddingLeft:'0', paddingBottom:'0', paddingRight:'0'}}>
            {children}
        </div>
    </>
  )
}

export default Layout