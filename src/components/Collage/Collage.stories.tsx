import Collage, { Props } from './Collage';

export default { title: 'components/Collage' };

export const Default = (args: Props) => <Collage {...args} />;

Default.args = {
  // add control data
  images: {
    image1: 'collage-1.png',
    image2: 'collage-2.png',
    image3: 'collage-3.png'
  }
};
