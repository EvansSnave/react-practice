interface Link {
  link: string,
  title: string
};

const LINKS: Link[] = [
  { link: "/", title: "Home" },
  { link: "/second", title: "Second" },
];

const RouteLink = ({ newLink }:{ newLink: Link }) => <li><a href={ newLink.link }>{ newLink.title }</a></li>;

const Nav = () => {
  return (
    <nav>
      <ul>{ 
        LINKS.map((newLink, i) => <RouteLink newLink={ newLink } key={ i } />) 
      }</ul>
    </nav>
  )
};

export default Nav;
