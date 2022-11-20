import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import colors from 'tailwindcss/colors';

interface StarsProps {
  rating: number;
  maxRating?: number;
  onClick?: (newRating: number) => void;
}

const Stars = ({ rating, maxRating = 5, onClick }: StarsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex">
      {Array(maxRating)
        .fill(null)
        .map((el, i) => {
          const areStarsHoverable = !!onClick;
          const isStarIndexLowerThanRating = i < rating;
          const isCurrentlyHovering = hoveredIndex !== null;

          const isStarHovered = isCurrentlyHovering
            ? hoveredIndex >= i
            : isStarIndexLowerThanRating;

          const shouldHighlightStar = areStarsHoverable
            ? isStarHovered
            : isStarIndexLowerThanRating;

          const color = shouldHighlightStar ? colors.blue['900'] : colors.blue['100'];

          return (
            <AiFillStar
              key={i}
              size="30"
              color={color}
              className={areStarsHoverable ? 'cursor-pointer' : ''}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onClick?.(i + 1)}
            />
          );
        })}
    </div>
  );
};

export default Stars;
