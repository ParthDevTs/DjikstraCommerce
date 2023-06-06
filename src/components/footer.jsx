import "./styles/footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="row primary">
        <div className="column about">
          <h3>Connect</h3>
          <p>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            NeoGCamp, India
          </p>
        </div>
        <div className="column link">
          <h3>Links</h3>
          <ul>
            <li>
              <a target="_blank" href="https://github.com/ParthDevTs">
                Github
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/parth.ts/">
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" href="#blogs">
                Twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/parth-kathuria-4b0856177/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="column subscribe">
          <h3>Newsletter</h3>
          <div>
            <input type="email" placeholder="parth.kathuria99@gmail.com" />
            <button disabled>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="row copyright">
        <p>Copyright Parth Kathuria &copy; 2023</p>
      </div>
    </footer>
  );
};
