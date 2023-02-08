import { StyledLink, LinkWrap } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
export const AppBar = () => {
  return (
    <LinkWrap>
      {navItems.map(({ href, text }) => (
        <StyledLink key={href} to={href}>
          {text}
        </StyledLink>
      ))}
    </LinkWrap>
  );
};
