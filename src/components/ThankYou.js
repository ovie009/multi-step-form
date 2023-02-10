import '../css/ThankYou.css';
import thankYouIcon from '../assets/images/icon-thank-you.svg';

const ThankYou = () => {
    return (
        <section className='thank_you_section'>
            <img src={thankYouIcon} alt="thank you icon" />
            <h2>Thank you!</h2>
            <p>Thanks for comfirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </section>
    );
}
 
export default ThankYou;