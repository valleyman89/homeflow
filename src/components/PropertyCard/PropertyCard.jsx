import { FaBookmark, FaHome } from "react-icons/fa";

function PropertyCard({ property, savedProperties, setSavedProperties }) {
  const handleSaveProperty = (property) => {
    savedProperties.find(
      (bookmark) => property.property_id === bookmark.property_id
    )
      ? setSavedProperties(
          savedProperties.filter(
            (bookmark) => bookmark.property_id !== property.property_id
          )
        )
      : setSavedProperties((savedProperties) => [...savedProperties, property]);
  };

  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        {!property.photos[0] ? (
          <FaHome
            className="text-gray-400"
            style={{ margin: "auto" }}
            size="200"
          />
        ) : (
          <img
            src={`https://mr0.homeflow.co.uk/${property.photos[0]}`}
            alt={property.display_address}
          />
        )}

        <button
          className="absolute top-0 right-2"
          title="Click to bookmark this property"
          onClick={() => handleSaveProperty(property)}
        >
          <FaBookmark
            className={
              savedProperties.find(
                (bookmark) => property.property_id === bookmark.property_id
              )
                ? "text-red-400"
                : "text-yellow-400"
            }
            size="40"
          />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">
          {property.price}
        </p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
