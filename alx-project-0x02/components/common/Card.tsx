interface CardProps {
    title: string;
    content: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{content}</p>
      </div>
    );
  };
  
  export default Card;
  