import PropTypes from "prop-types";

export function ContactList({ contacts, handleDel }) {
  return (
    <div className="contacts">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className="delete"
              data-contact-id={contact.id}
              onClick={handleDel}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  handleDel: PropTypes.func,
};