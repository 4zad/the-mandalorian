import Banner, { Props } from './Banner';

export default { title: 'components/Banner' };

export const Default = (args: Props) => <Banner {...args} />;

Default.args = {
  tags: {
    title: 'Tags',
    description: 'Trailer.  Social Media Content.  Disney.  Disney+.  Series.  Drama.  SCI FI.  Featured'
  }
};
