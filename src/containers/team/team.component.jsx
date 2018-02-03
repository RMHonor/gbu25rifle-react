import React, { Component } from 'react';

import MemberTile from './member-tile/member-tile.component';

import './team.scss';

export default class Team extends Component {
  constructor(props) {
    super(props)
    this.state = { members: []};
  }

  componentWillMount() {
    this.setState({
      members: [
        {
          name: 'John Smith',
          position: 'Captain',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
          about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat imperdiet sapien. Mauris laoreet neque vitae diam interdum, quis venenatis justo convallis. Maecenas ultrices ultrices augue nec ornare. Vestibulum in viverra urna. Praesent lacinia, ex eget dignissim mollis, lectus leo rhoncus lectus, nec venenatis lorem ante eu nisi. Etiam porttitor ante id lectus blandit, id tincidunt dolor tempus. Vivamus neque felis, laoreet sed rhoncus ut, sodales eget magna.

          Integer scelerisque arcu at est venenatis, nec fringilla purus imperdiet. Morbi vitae placerat tellus. Donec lobortis nibh nec felis mollis, a interdum ante sollicitudin. Curabitur vitae nulla risus. Maecenas rhoncus malesuada dui. Proin aliquet dolor massa, ac lacinia enim lacinia a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur dictum fermentum ipsum in cursus. Aliquam sit amet lacus quis tellus sagittis fermentum quis id arcu. Phasellus viverra orci in metus mattis, eleifend tincidunt nunc consectetur. Vivamus efficitur vulputate viverra. Etiam quis rhoncus ipsum.

          Fusce ut ullamcorper lorem. Morbi eleifend, urna ut gravida dictum, mauris lectus tempor eros, a consectetur urna nibh eget enim. Sed pulvinar sit amet turpis non ornare. Duis tristique faucibus leo, sed aliquet est varius et. Proin lacinia justo nisi, quis ornare enim aliquet sit amet. Aenean nec est sit amet augue ultricies faucibus eu sit amet elit. Integer sagittis dui vitae ex pellentesque, ac porta magna posuere. Nulla facilisi. Proin luctus orci a lacus tempor ornare. Proin eu libero vel diam venenatis placerat a eget tellus. Suspendisse id orci a nunc venenatis mollis nec ut augue. Quisque neque augue, convallis a lorem in, elementum imperdiet ex.`,
        },
        {
          name: 'test2',
          position: 'Reserver Shooter',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
        {
          name: 'test3',
          position: 'position',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
        {
          name: 'test4',
          position: 'position',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
        {
          name: 'test5',
          position: 'position',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
        {
          name: 'test6',
          position: 'position',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
        {
          name: 'test7',
          position: 'position',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
        {
          name: 'test8',
          position: 'position',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
        {
          name: 'test9',
          position: 'position',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
        {
          name: 'test0',
          position: 'position',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
        {
          name: 'test10',
          position: 'position',
          image: 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png',
        },
      ],
    });
  }

  render() {
    return (
      <section className="grid team">
        {this.state.members.map((member) => (
          <MemberTile key={member.name} member={member} />
        ))}
      </section>
    );
  }
}
