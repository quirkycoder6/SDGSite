import "./sdgList.scss"

export default function SDGList({ id, title, active, setSelected }) {
  return (
    <li
        className={active ? "sdgList active" : "sdgList"}
        onClick={() => setSelected(id)}
    >
        {title}
    </li>
  );
}
