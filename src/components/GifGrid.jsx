import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { RemoveCategory } from "./RemoveCategory";

export const GifGrid = ({ category, onRemoveCategory }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="titleContainer">
        <h3>{category}</h3>
        <RemoveCategory
          category={category}
          onRemoveCategory={onRemoveCategory}
        />
      </div>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
