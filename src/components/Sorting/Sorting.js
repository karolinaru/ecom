import React from 'react';
import './Sorting.scss';

const Sorting = ({products, setProducts}) => {

    const sorting = (type) => {

        const types = {
            ASC: "title",
            DSC: "title",
            lowest: "price",
            highest: "price",
          };
    
          const sortProperty = types[type];        
          let sorted = products;
    
          switch (type) {
            case "ASC": {
              sorted = [...products].sort((a,b) => a[sortProperty].toLowerCase() > b[sortProperty].toLowerCase() ? 1 : -1);
              break;
            }
            case "DSC": {
              sorted = [...products].sort((a,b) => a[sortProperty].toLowerCase() < b[sortProperty].toLowerCase() ? 1 : -1);
              break;
            }
            case "lowest": {
              sorted = [...products].sort((a,b ) => a[sortProperty] - b[sortProperty]);
              break;
            }
            case "highest": {
              sorted = [...products].sort((a,b ) => b[sortProperty] - a[sortProperty]);
              break;
            }
            default:
              console.log("No sorting option");
            };
          setProducts(sorted);      
      }

    return (
        <div className="sorting-box">
            <label className="sorting__label">Sortuj: </label>
            <select className="sorting__select" onChange={(e)=>sorting(e.target.value)}>
                <option value="">--Choose an option--</option>
                <option value="ASC">Od A do Z</option>
                <option value="DSC">Od Z do A</option>
                <option value="lowest">Od najtańszych</option>
                <option value="highest">Od najdroższych</option>
            </select>       
        </div>
    )
}

export default Sorting;