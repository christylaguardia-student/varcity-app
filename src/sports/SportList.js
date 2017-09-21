import React, { PropTypes } from 'react';
import { deleteSport } from './actions';
import { connect } from 'react-redux';
import Sport from './Sport';
// import SportList from './SportList';

const SportList = ({ sports, dispatch }) => {
  console.log('sport is', sports, 'dispatch is', dispatch);
  return (
    <div className='sportgroup'>
      {sports.map(sport =>
        <Sport
          key={sport.id}
          {...sports}
        />
      )}
    </div>
  );
}

SportList.propTypes = {
  sports: PropTypes.array.isRequired
};

export default connect()(SportList);
{/* handleDelete={() => dispatch(deleteSport(sport.id))} */}