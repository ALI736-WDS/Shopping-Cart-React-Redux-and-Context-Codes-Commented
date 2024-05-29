//svg
import { FaListUl } from "react-icons/fa";

//helpers
import { createQueryObject } from "../helpers/helper";

//constants
import { categories } from "../constants/list,";

//Style
import styles from "./Sidebar.module.css";

function Sidebar({ query, setQuery }) {
  //query baraye class selected
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    // console.log(tagName);

    const category = event.target.innerText.toLowerCase();
    // console.log(categories);

    if (tagName !== "LI") return;
    // setQuery((query) => ({ ...query, category })); //...query baraye inke agar search ya categories dashtim, bemune va hazf nashe
    // setQuery((query) => createQueryObject(query, { category: category })); //ecma6
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p> Categories </p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
