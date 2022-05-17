import Collage, { Props } from './Collage';

export default { title: 'components/Collage' };

export const Default = (args: Props) => <Collage {...args} />;

Default.args = {
  // add control data
  images: {
    image1: {
      name: 'collage-1.png',
      alt: 'Illustration of the Mandalorian at night'
    },
    image2: {
      name: 'collage-2.png',
      alt: '"The Mandalorian" poster image'
    },
    image3: {
      name: 'collage-3.png',
      alt: 'Illustration of the Mandalorian entering a door'
    }
  }
};
