const CoreConcepts = ({ image, title, description }) => {
  return (
    <div>
      <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </div>
  );
};

export default CoreConcepts;
