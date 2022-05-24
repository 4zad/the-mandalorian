import ScrollingText, { Props } from './ScrollingText';

export default { title: 'components/ScrollingText' };

export const Default = (args: Props) => <ScrollingText {...args} />;

Default.args = {
  // add control data
  scrollingText: '#themandalorian'
};
