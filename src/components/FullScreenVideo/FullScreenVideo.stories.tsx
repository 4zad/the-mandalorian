import FullScreenVideo, { Props } from './FullScreenVideo';

export default { title: 'components/FullScreenVideo' };

export const Default = (args: Props) => <FullScreenVideo {...args} />;

Default.args = {
  // add control data
  vidId: 368223964,
  imLink: 'assets/images/full-screen-poster.png'
};
