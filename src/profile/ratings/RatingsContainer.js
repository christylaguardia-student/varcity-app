import React from 'react';
import Totals from './Totals';
import IndividualReview from './IndividualReview';

const reviews = [
  {
    name: 'Christy L.',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },{
    name: 'Wendy B.',
    review: 'Integer nec odio. Praesent libero.'
  },{
    name: 'Pierre S.',
    review: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'
  },{
    name: 'Stephanie F.',
    review: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.'
  },{
    name: 'Justin L.',
    review: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.'
  }
];

export default function RatingsContainer() {
  return (
    <section>
      <h1>Overall</h1>
      <Totals />
      {reviews.map((review, index) => <IndividualReview key={index} name={review.name} review={review.review} />)}
    </section>
  );
}
