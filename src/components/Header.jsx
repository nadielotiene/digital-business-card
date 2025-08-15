export default function Header() {
    return (
        <>
        <header className="header">
            <img className="user__img" src="/laura-smith.png" alt="user image" />
            <h1 className="user-name__h">Laura Smith</h1>
            <p className="user-role__p">Frontend Developer</p>
            <p className="user-website">laurasmith.website</p>
            <section className="contact__btn--div">
                <a className="email__btn btn">
                    <img className="email__img" src="/mail.png" alt="email icon" />
                    <p className="email__btn__p">Email</p>
                </a>
                <a className="linkedin__btn btn">
                    <img className="linkedin__img" src="/linkedin-white-icon.png" alt="linkedin icon" />
                    <p className="email__btn__p">Linkedin</p>
                </a>
            </section>
        </header>
        </>
    )
}