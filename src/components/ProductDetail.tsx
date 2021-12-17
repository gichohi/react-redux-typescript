import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
    const { productId } = useParams();
    let id: number;
    if(productId !== undefined) {
        id = parseInt(productId);
    }

    let product: IProduct | undefined;
   
    const products = useSelector((state: ProductState) => state.products);
    product = products.find(item => item.id === id)
    
    return(
      <div className="ui grid container">
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product?.image} alt={product?.title}/>
              </div>
              <div className="column rp">
                <h1>{product?.title}</h1>
                <h2>
                  <div className="ui teal tag label">${product?.price}</div>
                </h2>
                <h3 className="ui brown block header">{product?.category}</h3>
                <p>{product?.description}</p>
                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetail;

