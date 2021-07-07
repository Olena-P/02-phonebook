import PropTypes from 'prop-types'
import { List, Item, Button } from './ContactList.styled'

export default function ContactList({contacts, deletedContact}) {
    return (
        <List>
            {contacts.map(({ name, number, id }) =>
            <Item key={id}>
                    {name} : {number}
                    <Button
                        type="button"
                        onClick={() =>deletedContact(id)}>
                        Delete
                    </Button>
            </Item>
            )}

        </List>
    )
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};