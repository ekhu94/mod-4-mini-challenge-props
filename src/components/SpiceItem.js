import React from 'react'

const SpiceItem = props => {
  const {spice} = props;
  return (
    <div className="spice-item">
      <img src={spice.image} alt={spice.title} />
      <div className="details">
        <h2>{spice.title}</h2>
        <p>{spice.description}</p>
        <em>{spice.notes}</em>
      </div>
    </div>
  );
}

//! class SpiceItem extends React.Component {

//   render() {
//     return (
//       <div className="spice-item">
//         <img src={null /* replace me with an image url */} alt={"replace me with a TITLE"} />
//         <div className="details">
//           <h2>{"replace me with a TITLE"}</h2>
//           <p>{"replace me with a DESCRIPTION"}</p>
//           <em>{"replace me with NOTES"}</em>
//         </div>
//       </div>
//     )
//   }
// }

export default SpiceItem;