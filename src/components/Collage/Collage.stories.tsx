import Collage, { Props } from './Collage';

export default { title: 'components/Collage' };

export const Default = (args: Props) => <Collage {...args} />;

Default.args = {
  // add control data
  content: {
    image: [
      {
        src: 'collage-1.png',
        alt: 'Illustration of the Mandalorian at night'
      },
      {
        src: 'collage-2.png',
        alt: '"The Mandalorian" poster image'
      },
      {
        src: 'collage-3.png',
        alt: 'Illustration of the Mandalorian entering a door'
      }
    ]
  }
};
