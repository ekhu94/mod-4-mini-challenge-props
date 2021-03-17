import React from 'react'
import SpiceItem from './SpiceItem';
// TODO: import the SpiceItem component here

const SpiceList = props => {
  const {spices} = props;
  const renderedSpices = spices.map(s => {
    return <SpiceItem spice={s} key={s.id} />
  });
  return (
    <section className="spice-list">
      {renderedSpices}
    </section>
  );
}



//! class SpiceList extends React.Component {

//   renderSpices() {
//     // TODO: update this function to return an array of SpiceItem components
//     // If you get an error message about a 'key' prop, make sure to fix it before submitting your code!
//   }

//   render() {
//     return (
//       <section className="spice-list">
//         {this.renderSpices()}
//       </section>
//     )
//   }
// }

export default SpiceList