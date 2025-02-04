import { Link } from "react-router";
import "../style/components/nav/nav.scss"

interface CustomLink {
  link: string,
  title: string
};

const LINKS: CustomLink[] = [
  { link: "/", title: "Home" },
  { link: "/second", title: "Second" },
];

const RouteLink = ({ newLink }:{ newLink: CustomLink }) => <li><Link to={ newLink.link }>{ newLink.title }</Link></li>;

const Nav = () => {
  return (<header>
    <nav>
      <div className="icon-container">
        <img alt="Page icon"></img>
        <p>Kevin Cruz</p>
      </div>
      <ul>{ LINKS.map((newLink, i) => <RouteLink newLink={ newLink } key={ i } />) }</ul>
      <button type="button">Button</button>
    </nav>
    <div className="space-nav"></div>
  </header>)
};

export default Nav;
