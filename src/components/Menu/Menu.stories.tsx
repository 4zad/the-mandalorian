import Menu, { Props } from './Menu';

export default { title: 'components/Menu' };

export const Default = (args: Props) => <Menu {...args} />;

Default.args = {
  menuContent: {
    pageOne: 'Home',
    pageTwo: 'Work',
    pageThree: 'Our Story',
    contactDesc: {
      title: 'Contact Us:',
      number: '(323)962-5100',
      email: 'hello@buddha-jones.com'
    },
    addressDesc: {
      title: 'Address:',
      description: '1741 Ivar Ave. Hollywood, CA 90028'
    },
    followDesc: {
      title: 'Follow Us:',
      description: 'Facebook, Twitter, Instagram'
    }
  }
};
