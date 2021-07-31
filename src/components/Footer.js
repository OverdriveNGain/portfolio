const Footer = () => {
    return (
        <footer>
            <div className="bg-dark p-5 text-center">
                <p className="text-muted mb-4"><i>"Quality means doing it right when no-one one is looking."   — Henry Ford</i></p>
                <a href="https://www.facebook.com/jeremy.m.amon/"><i className="px-3 h3 text-light bi bi-facebook"></i></a>
                <a href="https://twitter.com/JeremyTheDev"><i className="px-3 h3 text-light bi bi-twitter"></i></a>
                <a href="mailto: jeremyamon@gmail.com"><i className="px-3 h3 text-light bi bi-envelope-fill"></i></a>
                <div className="container text-white text-center pt-3">
                    © 2021 jeremyamon.com - All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;