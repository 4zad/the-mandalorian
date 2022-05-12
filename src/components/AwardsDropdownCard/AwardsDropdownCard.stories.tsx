import AwardsDropdownCard, { Props } from './AwardsDropdownCard';

export default { title: 'components/AwardsDropdownCard' };

export const Default = (args: Props) => <AwardsDropdownCard {...args} />;

Default.args = {
  // add control data
  awardItems: [
    { id: 0, year: '2019', award: 'Clio Awards: Theatrical Audio/Visual Technique' },
    { id: 1, year: '2020', award: 'Golden Trailers: Best Drama' },
    { id: 2, year: '2020', award: 'Promax: Program Trailer Promo' },
    { id: 3, year: '2020', award: 'Shortys: Twitter Video' }
  ]
};
