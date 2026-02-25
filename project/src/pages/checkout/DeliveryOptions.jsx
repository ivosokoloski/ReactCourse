import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";
export function DeliveryOptions({loadCart,cartItem, deliveryOptions}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOptions) => {
        let priceString = "FREE Shipping";
        if (deliveryOptions.priceCents > 0) {
          priceString = `${formatMoney(deliveryOptions.priceCents)}-Shipping`;
        }
        const updateDeliveryOptions= async()=>{
                await axios.put(`/api/cart-items/${cartItem.productId}`,{
                    deliveryOptionId: deliveryOptions.id
                
                })
                await loadCart();
        }
        return (
          <div key={deliveryOptions.id} className="delivery-option" onClick={updateDeliveryOptions}>
            <input
              type="radio"
              onChange={()=>{}}
              checked={deliveryOptions.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOptions.estimatedDeliveryTimeMs).format(
                  "dddd,MMMM,D",
                )}
                Tuesday, June 21
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
