import Social, { Props } from './Social';

export default { title: 'components/Social' };

export const Default = (args: Props) => <Social {...args} />;

Default.args = {
  socialContent: {
    // title: 'Social Media',
    // description: 'Posts on Instagram and Twitter using #TheMandalorian between 28th June until the 3rd July:',
    shortNum: '500K',
    num: '500.000K'
  }
};
