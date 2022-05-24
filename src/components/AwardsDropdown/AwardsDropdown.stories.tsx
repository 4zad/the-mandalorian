import AwardsDropdown, { Props } from './AwardsDropdown';

export default { title: 'components/AwardsDropdown' };

export const Default = (args: Props) => <AwardsDropdown {...args} />;

Default.args = {
  // add control data

  content: {
    trailerText: 'Trailer 1.',
    winnerText: 'Award Winner',
    description: 'Oficial trailer curabitur quis nunc augue duis vulputate nisl quis dignissim vulputate.',
    awardItems: [
      { id: 0, year: '2019', award: 'Clio Awards: Theatrical Audio/Visual Technique' },
      { id: 1, year: '2020', award: 'Golden Trailers: Best Drama' },
      { id: 2, year: '2020', award: 'Promax: Program Trailer Promo' },
      { id: 3, year: '2020', award: 'Shortys: Twitter Video' }
    ]
  }
};
