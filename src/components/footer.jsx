import "./styles/footer.css";
export const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="row primary">
        <div className="column about">
          <h3>DjikstraExpress</h3>
          <p>
            Unlock the world of endless possibilities with Djiktra, your
            ultimate destination for hassle-free online shopping in India.
            <br />
            Experience the convenience of Djiktra, where every click connects
            you to a world of incredible products and unbeatable deals
            <br />
            Djiktra - your one-stop shop for all your shopping needs, where
            convenience, affordability, and reliability come together
          </p>
        </div>
        <div className="column link">
          <h3>Links</h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ParthDevTs"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/parth.ts/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="#blogs">
                Twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/parth-kathuria-4b0856177/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="column subscribe">
          <h3>Newsletter</h3>
          <div>
            <input type="email" placeholder="parth.kathuria99@gmail.com" />
            <button disabled>Subscribe</button>
          </div>
        </div> */}
      </div>
      <div className="row copyright">
        <p>Parth Kathuria &copy; 2023</p>
      </div>
    </footer>
  );
};
