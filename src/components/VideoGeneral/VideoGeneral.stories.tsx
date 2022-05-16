import VideoGeneral, { Props } from './VideoGeneral';

export default { title: 'components/VideoGeneral' };

export const Default = (args: Props) => <VideoGeneral {...args} />;

Default.args = {
  videoinf: {
    imLink: 'assets/images/mandaloriantest.png',
    vidId: 148751763
  }
};
