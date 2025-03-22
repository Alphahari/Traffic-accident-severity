import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-2 m-4">
        <div className='flex flex-row items-center'>
            <Link to={'/'} className='font-bold text-xl hover:text-2xl'>RAP</Link >
        </div> 
        <div className="flex justify-evenly items-center p-2 gap-4">
            <Link to={'/visualizations'} className="hover:font-semibold">Visualizations</Link >
            <Link to={'/features'} className="hover:font-semibold">Features</Link >
            <Link to={'/contact'} className="hover:font-semibold">Contact</Link >
        </div>
    </header>
  )
}

export default Navbar