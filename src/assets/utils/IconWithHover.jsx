import { useState } from "react";

const IconWithHover = ({ defaultIcon, hoverIcon, alt, className, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? hoverIcon : defaultIcon}
      alt={alt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      onClick={onClick}
    />
  );
};

export default IconWithHover;
