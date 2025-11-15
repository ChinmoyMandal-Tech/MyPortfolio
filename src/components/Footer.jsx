function Footer() {
    const mailId = "chinmoymandal925807@gmail.com";

    return (
        <footer id="main_footer" className="relative w-full pt-2.5 bg-[var(--footer_bg)] text-center md:flex">
            <div className="flex w-ful md:w-1/2 my-5 justify-center space-x-7 sm:space-x-15">
                <div className="relative">
                    <a
                        href="https://github.com/ChinmoyMandal-Tech"
                        target="_blank"
                        className="cursor-pointer group relative">
                        <i className="fa-brands fa-github fa-xl"></i>
                    </a>
                    <span className="absolute bottom-6 left-[-60px] px-2 py-1 text-sm rounded-2xl bg-purple-800/50 opacity-0 [.group:hover_+_&]:opacity-100 transform duration-300 whitespace-nowrap"> connect me on Github </span>
                </div>
                <div className="relative">
                    <a
                        href="https://www.linkedin.com/in/chinmoy9202/"
                        target="_blank"
                        className="cursor-pointer group linkdin relative">
                        <i className="fa-brands fa-linkedin-in fa-xl"></i>
                    </a>
                    <span className="absolute bottom-6 left-[-80px] px-2 py-1 text-sm rounded-2xl bg-purple-800/50 opacity-0 [.linkdin:hover_+_&]:opacity-100 transform duration-300 whitespace-nowrap"> connect me on LinkedIn </span>
                </div>
                <div className="relative">
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mailId}`}
                        target="_blank"
                        className="cursor-pointer group relative">
                        <i className="fa-solid fa-globe fa-xl"></i>
                    </a>
                    <span className="absolute bottom-6 left-[-55px] px-2 py-1 text-sm rounded-2xl bg-purple-800/50 opacity-0 [.group:hover_+_&]:opacity-100 transform duration-300 whitespace-nowrap">Mail Me by browser</span>
                </div>
                <div className="relative">
                    <a
                        href={`mailto:${mailId}`}
                        target="_blank"
                        className="cursor-pointer group">
                        <i className="fa-regular fa-envelope fa-xl"></i>
                    </a>
                    <span className="absolute bottom-6 left-[-50px] px-2 py-1 text-sm rounded-2xl bg-purple-800/50 opacity-0 [.group:hover_+_&]:opacity-100 transform duration-300 whitespace-nowrap">Mail Me by App</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;