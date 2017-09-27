// import React from 'react';
// import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
// // import _ from 'lodash'


// export default function MediaUpload({ value, change, propName }) {
//   return (
//     <div>
//       <RIESelect
//         value={value}
//         propName={propName}
//         options={[
//           {id: '1', text: 'one'},
//           {id: '2', text: 'two'},
//           {id: '3', text: 'three'}
//         ]}
//         change={change}
//         />
//     </div>
//   );
// }



      // <form onSubmit={event => {
      //           event.preventDefault();
      //           const form = event.target;
      //           const { title, description, url } = form.elements;
      //           onAdd(title.value, description.value, url.value);
      //           form.reset();
      //       }}>
      //           <label htmlFor="description">Description:</label>
      //           <input id="description" name="description" required /> 
      //           <label htmlFor="mediaType">Media Type:</label>
      //           <input id="mediaType" name="mediaType" required /> 
      //           <label htmlFor="img">Image Link:</label>
      //           <input id="img" name="img" /> 
      //           <label htmlFor="videoUrl">Video Link:</label>
      //           <input id="videoUrl" name="videoUrl" /> 
      //           <button type="submit">Add Media</button>
      //       </form>

// upload a file
//  <form method="post" encType="multipart/form-data">
//  <input type="file" name="image" />
//  <input type="submit" name="submit" value="submit" />
// </form>