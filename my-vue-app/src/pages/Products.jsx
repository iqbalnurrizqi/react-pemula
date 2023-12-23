import { React, useEffect, useRef, useState } from "react";
import CardProduct from "../assets/attomic design/Fragments/CardProduct";
import Button from "../assets/attomic design/molekul/Button";
import getProducts from "../services/products.services";
import { useLogin } from "../hooks/useLogin";


// const Products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 1000000,
//     image: "public/Images/product1.jpg",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti architecto eaque error accusantium! A porro tempore labore reiciendis sunt!",
//   },
//   {
//     id: 2,
//     name: "Sepatu Lama",
//     price: 500000,
//     image: "public/Images/product1.jpg",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti ",
//   },
//   {
//     id: 3,
//     name: "Eribrow",
//     price: 2000000,
//     image: "public/Images/product1.jpg",
//     description:
//       "Sepatu terbaru dari Eribrow kalian bisa dapatkan sekarang juga yeayy",
//   },
// ];



const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [Products, setProducts] = useState([])
  const username = useLogin()
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (Products.length > 0 &&cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = Products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, Products]);

useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    });
}, [])

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const totalPriceRef = useRef(null)
  useEffect(() => {
    if( cart.length > 0) {
        totalPriceRef.current.style.display = "table-row"
    } else {
        totalPriceRef.current.style.display = "none"
    }
  }, [cart])


  return (
    <>
      <div className="flex justify-end bg-slate-800 text-white items-center h-20 px-10 hover:text-blue-500">
        {username}
        <Button ClassName="ml-5" onClick={handleLogout}>
          logOut
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-2/3 flex flex-wrap">
          {Products.length > 0 &&
            Products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id}/>
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
            
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl text-blue-600 font-bold ml-5 mb-2">Card</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Products.length > 0 &&
               cart.map((item) => {
                const product = Products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title.substring(0, 20)}...</td>
                    <td>
                      ${" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      ${" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </>
  );
};

export default ProductPage;
