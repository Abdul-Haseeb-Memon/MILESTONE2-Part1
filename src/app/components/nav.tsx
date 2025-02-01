import Link from "next/link"


function Navbar(){
    return(
        <div className="navbar" >
          <Link href="/" className="">Home</Link>
          <br />
          <Link href="/about">About Me</Link>
          <br />
          <Link href="/contact">Contact Us</Link>

          <hr />
          <hr />
          <hr />
          
        </div>
    )
}
export default Navbar