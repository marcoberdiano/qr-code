import qrcode from '../images/image-qr-code.png';

const CardQr = () => {
    return ( 
        <div className='card-container'>
            <div className='qrcode-img-container'>
                <img className='qrcode-img' src={qrcode} alt='qr-code'/>
            </div>
            <h2>
                Improve your front-end skills by building projects
            </h2>
            <p>
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
        </div>
     );
}
 
export default CardQr;