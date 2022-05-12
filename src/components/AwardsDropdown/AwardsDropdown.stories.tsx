import AwardsDropdown, { Props } from './AwardsDropdown';

export default { title: 'components/AwardsDropdown' };

export const Default = (args: Props) => <AwardsDropdown {...args} />;

Default.args = {
  // add control data

  content: {
    trailerText: 'Trailer 1.',
    winnerText: 'Award Winner',
    description: 'Oficial trailer curabitur quis nunc augue duis vulputate nisl quis dignissim vulputate.'
  }
};
