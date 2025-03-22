import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <hr></hr>
      <div className='m-2'>
        <Form></Form>
      </div>
      <Footer></Footer>
    </>
  )
}

export default HomePage