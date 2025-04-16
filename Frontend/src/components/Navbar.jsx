import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="bg-[rgba(147,118,226,0.5)]">
        <div className="flex justify-between items-center p-3">
          <Link to={'/'} className='flex justify-center items-center font-bold text-xl hover:text-2xl'><img src="logo.png" width="40px" height="40px"></img>RAP</Link >
          <div className="flex justify-evenly items-center p-1 gap-4">
            <Link to={'/visualizations'} className="hover:font-semibold">Visualizations</Link >
            <Link to={'/features'} className="hover:font-semibold">Features</Link >
            <Link to={'/contact'} className="hover:font-semibold">Contact</Link >
          </div>
        </div>
      </nav>
      <div className="h-1 bg-white"></div>
    </>
  )
}

export default Navbar