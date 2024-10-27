import "../css-styles/contact.css"
import Link from 'next/link'
function Contact() {
    return (
        <section className='contact' id='contact'>
            <h2 className="heading">Contect <span>Me!</span></h2>
            <form action="#">
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder='Full Name' required />
                        <span className='focus'></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder='Email Address' required />
                        <span className='focus'></span>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input type="number" placeholder='Mobail Number' required />
                        <span className='focus'></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder='Email Address' required />
                        <span className='focus'></span>
                    </div>
                </div>

                <div className="textarea-field">
                    <textarea name="" id="" placeholder='Your Message' required></textarea>
                    <span className='focus'></span>
                </div>

                <div className='btn-box .btns'>
                    <button type='submit' className='btn'>Submit</button>
                </div>

                

            </form>
        </section>

    )
}
export default Contact

