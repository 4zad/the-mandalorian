import VideoGeneral, { Props } from './VideoGeneral';

export default { title: 'components/VideoGeneral' };

export const Default = (args: Props) => <VideoGeneral {...args} />;

Default.args = {
  // add control data

  videoinf: {
    isFullWidth: true,
    divID: 'test1',
    id: 148751763
  }
};
