import React from 'react'
import Uipatternsformslider from '../../component/Uipatternsformslider/Uipatternsformslider'
import './uipatternsform-style.css'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import {AiOutlineHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {BsChevronDoubleRight} from 'react-icons/bs'
const Uipatternsform = () => {
    let x="hello world"
return (
    <>
    <Header/>
    <div className="icons-container">
        <div className="home">
            <div className="icon">
                <AiOutlineHome/>
            </div>
            <p> <Link to="/">Home</Link></p>
        </div>
        <div className="ui-patterns">
            <div className="icon">
                <BsChevronDoubleRight/>
            </div>
            <p><Link to="/">UI Patterns</Link></p>
        </div>
        <div className="forms">
            <div className="icon">
                <BsChevronDoubleRight/>
            </div>
            <p>Forms</p>
        </div>
        <div className="password-strength">
            <div className="icon">
                <BsChevronDoubleRight/>
            </div>
            <p>Password Strength</p>
        </div>
    </div>
    <div className="main">
    <div className="main-container">
        <div>
            <h1>
                Problem summary
            </h1>
            <p>You want to make sure your users' passwords are sufficiently strong in order to prevent malicious attacks.</p>
        </div>
        <div>
            <h1>Examples</h1>
            <div className="slider">
            <Uipatternsformslider/>
            </div>
        </div>
        <div className="first-container">
            <h1>Usage</h1>
            <ul>
                <li>Use when you want your users to choose passwords for their user accounts that are hard to break or guess by either human or computerized help.</li>
                <li>Use when you want to increase the complexity of your users’ passwords and raise the barrier for attackers tampering with your system.</li>
                <li>Use when you want to be sure that your users know what a good password is and that their chosen password follows such guidelines.</li>
            </ul>
        </div>
        <div className="second-container">
            <h1>Solution</h1>
            <p>
            A password’s strength is measured according to predefined rules and is displayed using a horizontal scale next to the input field. If the password is weak then only a small portion of the horizontal bar is highlighted. The greater the strength of the password the more the horizontal bar is highlighted.
            </p>
            <p>
            The password strength is also appropriately indicated by coloring the bar in a color associative with good or bad: Green indicating a strong password and red indicating a weak password.
            </p>
        </div>
        <div className="third-container">
            <h1>
                How strong a password?
            </h1>
            <p>
                The definition of a strong password can be intensely argued. A forced complex password at first glance only spells increased security, but forcing too complex and rigid rules on password can have the opposite effect. As passwords are forced to be complex, they also become increasingly harder to remember by the user. This occasionally leads to a self-destruction of the increased security, as some users simply write it down on a small sticky note and paste it up on their screen in order to remember their new complex password. This is especially a problem in places with the policy of forced password renewal every 3 months.
            </p>
        </div>
        <div className="fourth-container">
            <h1>
                What is a strong password?
            </h1>
            <p>
                With the above mentioned in mind, I should stress that a sufficiently strong password does not necessarily need to fulfill all of the rules below, but merely a few will do. Consider the following rules, for each rules followed add a point to the passwords strength level (so that 0 points is the weakest, and 5 is the strongest). UI-patterns.com defines a strong password when it…:
            </p>
            <ol>
                <li>1- Has more than 8 characters</li>
                <li>2- Contains both lowercase and uppercase letters</li>
                <li>3- Contains at least one numerical character</li>
                <li>4- Contains special characters</li>
                <li>5- Has more than 12 characters</li>
            </ol>
        </div>
        <div className="fifth-container">
            <h1>
                Dictionary attacks
            </h1>
            <p>
                While the above mentioned password check can easily be done using only client-side javascript, it does not prevent against dictionary attacks. To ease the memorization of passwords, people tend to use real words as passwords and merely substitute characters with numbers or special characters. An example of such a password could be “P@ssw0rd”, which really isn’t a strong password. Modern password breaking software is fairly good at guessing such number/letter substitutions. To check against such strength, you would need to do ajax calls that would check with your own dictionary if the password was strong or not.
            </p>
        </div>
        <div className="sixth-container">
            <h1>
                Choosing an appropriate level of password strength
            </h1>
            <p>
                You need to determine the password strength and complexity according to what you want to protect. You need to draw the line somewhere. For 99% of the content out there it can easily be argued that merely the first 2 or 3 rules mentioned above will be sufficient.
            </p>
        </div>
        <div className="seventh-container">
            <h1>
                General guidelines on choosing a password
            </h1>
            <ul>
                <li>Use a password of a seemingly random selection of letters and numbers</li>
                <li>Use a password that you can type without you having to look at the keyboard (decreases possibility of people stealing your password)</li>
                <li>Change your password regularly</li>
                <li>Do not use your network ID in any form (capitalized, reversed, doubled, etc.)</li>
                <li>Do not use your first, middle or last name or anyone else’s in any form.</li>
                <li>Do not use your initials or any nicknames you or somebody else might have.</li>
                <li>Do not use a word contained in any dictionary (English or foreign), spelling list, abbreviation list, etc.</li>
                <li>Do not use information that people can easily obtain about you (license plate, pet name, date of birth, telephone numbers)</li>
                <li>Do not use password of all alphabetical characters or only numeric characters – mix them up.</li>
                <li>Do not use keyboard sequences (for instance qwerty or asdf)</li>
            </ul>

        </div>
        <div className="eighth-container">
            <h1>
                Rationale
            </h1>
            <p>
                <ul>
                    <li>By showing a password strength meter beside the password field, the user is forced to consider using a password with an appropriate strength. By putting a minimum level of password strength you can even use the password strength meter to force a heightened security to your website.</li>
                    <li>Using a password strength indicator on the website, adds another level of security is added to the site. This not only makes the current users of the site feel more secure, but potential clients might use this as a requisite when deciding to conduct business with a company.</li>
                </ul>
            </p>
        </div>
    </div>
    </div>

    <Footer/>
    </>
  )
}
export default Uipatternsform