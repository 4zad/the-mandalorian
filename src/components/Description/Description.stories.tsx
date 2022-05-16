import Description, { Props } from './Description';

export default { title: 'components/Description' };

export const Default = (args: Props) => <Description {...args} />;

Default.args = {
  content: {
    title: 'Optional Eyebrow',
    description:
      'Move over streaming platforms, here comes The Mandalorian on Disney+. Disney wanted to promote their upcoming show to place all streaming audiences attention onto Disney+. And we did.'
  },
  isSmallText: false
};
