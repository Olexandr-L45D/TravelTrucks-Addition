import css from "./TrucksList.module.css";
import Contact from "../Contact/Contact";
import { selectOutContacts } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";

export default function TrucksList() {
  const items = useSelector(selectOutContacts);

  return (
    <div className={css.cartPage}>
      <ul className={css.list}>
        {items.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
