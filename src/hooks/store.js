export const initialStore = () => {
  return {
    people: [],
    vehicles: [],
    planets: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'addPeople':
      return {
        ...store,
        people: action.payload
      };

    case "toggleFavorite":
      const exists = store.favorites.includes(action.payload.name);
      return {
        ...store,
        favorites: exists
          ? store.favorites.filter(name => name !== action.payload.name) // lo quita
          : [...store.favorites, action.payload.name] // lo agrega
      };

    case "removeFavorite":
      return {
        ...store,
        favorites: store.favorites.filter(name => name !== action.payload.name)
      };

    case 'addVehicles':
      return {
        ...store,
        vehicles: action.payload
      };

    case 'addPlanets':
      return {
        ...store,
        planets: action.payload
      };

    default:
      throw Error('Unknown action.');
  }
}
