import React from 'react';
import CatDetail from './CatDetail';

import { connect } from 'react-redux';

const CatList = ({ cats }) => {
  const catsArray = Object.keys(cats);
  return (
    <>
      <ul className="cats">
        {catsArray.map((catId, index) => {
          return (
            <CatDetail
              cat={{
                catId,
                activity: cats[catId].activity,
                name: cats[catId].name,
              }}
              key={index}
            />
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  const { cats } = state;
  return cats;
};

export default connect(mapStateToProps, null)(CatList);
