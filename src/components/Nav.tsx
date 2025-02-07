import { Link } from "react-router";
import "../style/components/nav.scss";
import CustomButton from "./CustomButton";

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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event);
  };

  return (<header>
    <nav>
      <div className="nav-content">
        <div className="icon-container">
          <img alt="Page icon"></img>
          <p>KEVIN CRUZ</p>
        </div>
        <ul>{ LINKS.map((newLink, i) => <RouteLink newLink={ newLink } key={ i } />) }</ul>
        <CustomButton text="Button" type="main-button" functionality={ handleClick } />
      </div>
      <div className="nav-bottom"><svg viewBox="0 0 100 2.5" preserveAspectRatio="none">
        <path vectorEffect="non-scaling-stroke" d="m-1 0L-1 .5 36.6.6 38 1.5 67 1.5 68.3.5 101 .5 101 0"></path></svg>
      </div>
    </nav>
    <div className="space-nav"></div>
  </header>)
};

export default Nav;
