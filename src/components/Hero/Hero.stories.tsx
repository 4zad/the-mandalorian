import Hero, { Props } from './Hero';

export default { title: 'components/Hero' };

export const Default = (args: Props) => <Hero {...args} />;

Default.args = {
  // add control data
};
