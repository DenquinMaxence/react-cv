const Home = () => {
    return (
        <div className="main">
            <div className="informations">
                <h1>INFORMATIONS</h1>
            </div>
            <div className="hobbies">
                <h1>CENTRES D'INTÉRÊT</h1>
                <p>Jeux en réseau</p>
                <p>Développement informatique</p>
            </div>
            <div className="social">
                <h1>INFORMATIONS</h1>
                <p>
                    <strong>Nom & Prénom</strong>
                    <br />
                    <span>Denquin Maxence</span>
                </p>
                <p>
                    <strong>Date de naissance</strong>
                    <br />
                    <span>09 Septembre 2000, 21 ans</span>
                </p>
                <p>
                    <strong>Secteur</strong>
                    <br />
                    <span>Boulogne-sur-Mer</span>
                </p>
                <p>
                    <strong>Situation</strong>
                    <br />
                    <span>Célibataire</span>
                </p>
                <p>
                    <strong>Langues</strong>
                    <br />
                    <span>Français - Langue maternelle</span>
                    <span>Anglais - Écrit et conversation</span>
                </p>
                <p>
                    <strong>Mobilités</strong>
                    <br />
                    <span>Inscrit pour passer le code la route</span>
                    <span>Transport en commun, voiture</span>
                </p>
            </div>
            <div className="contact">
                <h1>CONTACT</h1>
            </div>
        </div>
    );
};

export default Home;