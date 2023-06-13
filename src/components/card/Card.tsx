import "./card.scss";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

function Card({ title, children }: Props) {
  return (
    <section className="card-wrapper p-3">
      {title && <div className="title">{title}</div>}
      <div className="card-body">{children}</div>
    </section>
  );
}

export default Card;
