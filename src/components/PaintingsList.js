import PropTypes from 'prop-types';
import Painting from './Paintings';
function PaintigsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            authorName={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintigsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintigsList;
