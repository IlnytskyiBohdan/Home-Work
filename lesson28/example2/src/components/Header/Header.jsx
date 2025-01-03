import ChangeButtonColor from '../ChangeButtonColor/ChangeButtonColor';
import Link from '../Link/Link';

const Header = () => (
  <header className='header'>
    <h1>Name/Last name</h1>
    <ul className='header__logo'>
      <li>
        <Link href='/'>Main</Link>
      </li>
      <li>
        <Link href='/todos'>Todo list</Link>
      </li>
      <li>
        <Link href='/contacts'>Contacts</Link>
      </li>
    </ul>
    <ChangeButtonColor />
  </header>
);

export default Header;
