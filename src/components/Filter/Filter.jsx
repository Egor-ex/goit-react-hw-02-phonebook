import PropTypes from "prop-types";

export function Filter({ filter, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        className="search"
        value={filter}
        onChange={onChange}
      />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string,
};