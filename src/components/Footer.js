import { Link } from 'react-router-dom'
import React from 'react'
import './styles/Footer.scss'
import { Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="carts">
                <ul className='cart-ul'>
                    <li>
                        <Link to='/'>Most Asked Questions</Link>
                    </li>
                    <li>
                        <Link to='/'>What We Do ?</Link>
                    </li>
                    <li>
                        <Link to='/'>History of Company</Link>
                    </li>
                    <li>
                        <Link to='/'>Our Clients</Link>
                    </li>
                    <li>
                        <Link to='/'>Market Place</Link>
                    </li>
                </ul>

                    <form className='form-2'>
                        <label>Your Name</label>
                        <input type="text" required/>
                        <label>Your Email</label>
                        <input type="text" required/>
                        <label>Message</label>
                        <textarea required></textarea>
                        <button>send</button>
                    </form>

            </div>

                <div className="media">
                    <Link to='/'>
                         <Facebook/>
                    </Link>

                    <Link to='/'>
                        <Instagram/>
                    </Link>

                    <Link to='/'>
                        <Twitter/>
                    </Link>
                    
                    <Link to='/'>
                        <YouTube/>
                    </Link>

                    <Link to='/'>
                        <LinkedIn/>
                    </Link>

                    <Link to='/'>
                        <GitHub/>
                    </Link>
                    
                    
                </div>


        </section>
    )
}

export default Footer
