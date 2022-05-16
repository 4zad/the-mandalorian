import Social, { Props } from './Social';

export default { title: 'components/Social' };

export const Default = (args: Props) => <Social {...args} />;

Default.args = {
  socialContent: {
    shortNum: '500K',
    num: '500.000K'
  }
};
