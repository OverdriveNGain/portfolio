const Footer = () => {
    /*Hack to make footer at the bottom of page*/
    return (
        <footer>
            <div className="bg-white p-5 text-center" style={{
                opacity: "0%"
            }}>
                <p className="text-white mb-4"><i>"Quality means doing it right when no-one one is looking."   — Henry Ford</i></p>
                <div className="container text-white text-center mt-4">
                    © 2021 jeremyamon.com - All Rights Reserved.
                </div>
            </div>
            <div className="bg-dark p-5 text-center" style={{
                bottom: "0px",
                width: "100%",
                position: "absolute",
            }}>
                <p className="text-white mb-4"><i>"Quality means doing it right when no-one one is looking."   — Henry Ford</i></p>
                <div className="container text-muted text-center mt-4">
                    © 2021 jeremyamon.com - All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;