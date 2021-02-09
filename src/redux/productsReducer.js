import bs1 from "../assets/bs1.png";
import bs2 from "../assets/bs2.png";
import bs3 from "../assets/bs3.png";
import bs4 from "../assets/bs4.png";
import tb1 from "../assets/table_1.jpg";
import tb2 from "../assets/table_2.jpg";
import bed1 from "../assets/bed_1.jpg";
import bed2 from "../assets/bed_2.jpg";
//As there is no back-end I'm creating initial state here
const initialState = {
  selects: [
    {
      name: "Living room",
      categories: [
        {
          value: "sofas",
          label: "Sofas",
          products: [
            { name: "Sofa Francesca", id: 1, img: bs1, price: 300 },
            { name: "Sofa Loane", id: 2, img: bs2, price: 350 },
            { name: "Sofa Etenesh", id: 3, img: bs3, price: 400 },
            { name: "Sofa Delilah", id: 4, img: bs4, price: 450 },
          ],
        },
        {
          value: "tables",
          label: "Tables",
          products: [
            { name: "Table Tetiana", id: 5, img: tb1, price: 150 },
            { name: "Table Julia", id: 6, img: tb2, price: 200 },
          ],
        },
        { value: "chairs", label: "Chairs" },
        { value: "closets", label: "Closets" },
      ],
    },
    {
      name: "Bedroom",
      categories: [
        {
          value: "beds",
          label: "Beds",
          products: [
            { name: "Bed Gemma", id: 7, img: bed1, price: 400 },
            { name: "Bed Silje", id: 8, img: bed2, price: 450 },
          ],
        },
        { value: "closets", label: "Closets" },
      ],
    },
    {
      name: "Kitchen",
      categories: [
        { value: "tables", label: "Tables" },
        { value: "chairs", label: "Chairs" },
      ],
    },
    { name: "Outdoor" },
    { name: "Office" },
    { name: "Restaurants" },
  ],
  activeSelect: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_SELECT": {
      return { ...state, activeSelect: action.newState };
    }
    default:
      return state;
  }
};

//thunk
//Is called from components/Products/Filter/Filter.js
export const setActiveSelect = (selectName, value) => {
  return (dispatch, getState) => {
    const selects = getState().products.selects;
    selects.forEach(select => {
      if (select.name === selectName) {
        for (let i = 0; i < select.categories.length; i++) {
          const element = select.categories[i];
          if (element.value === value) {
            const newState = { ...element, selectName };
            dispatch({ type: "SET_ACTIVE_SELECT", newState });
            break;
          }
        }
      }
    });
  };
};
export default productsReducer;
