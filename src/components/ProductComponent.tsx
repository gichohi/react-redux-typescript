import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductComponent = () => {
    const navigate = useNavigate();
    const products = useSelector((state: ProductState) => state.products);
    console.log(products);
    
    const renderList = products.map((product) => {
        return(
            <div className="four wide column" key={product.id} onClick={() => {
              navigate(`/product/${product.id}`);
             }
             }>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="content">
                      <div className="header">{product.title}</div>
                      <div className="meta price">$ {product.price}</div>
                      <div className="meta">{product.category}</div>
                    </div>
                  </div>
                </div>
            </div>
        );
      });
    return <>{renderList}</>
};

export default ProductComponent;