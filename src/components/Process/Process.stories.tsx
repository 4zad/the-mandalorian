import Process, { Props } from './Process';

export default { title: 'components/Process' };

export const Default = (args: Props) => <Process {...args} />;

Default.args = {
  // add control data
  processContent: {
    backgroundText: {
      top: 'Before',
      bottom: '& after'
    },
    descContent: {
      title: 'Process',
      description:
        'Nullam risus mauris, dignissim eu volutpat in hendrerit in nibh pellentesque augue magna consectetur eget turpis vitae pretium aliquet nibh maecenas placerat felis.'
    },
    smallVid: {
      vid: {
        imLink: 'assets/images/small-process-vid.png',
        vidId: 368223964
      },
      desc: {
        title: 'Graphic Effects',
        description: 'The result of graphic effects curabitur quis nunc augue.'
      }
    },
    largeVid: {
      vid: {
        imLink: 'assets/images/large-process-vid.png',
        vidId: 368223964
      },
      desc: {
        title: 'Graphic Effects',
        description: 'The result of graphic effects curabitur quis nunc augue.'
      }
    }
  }
};
