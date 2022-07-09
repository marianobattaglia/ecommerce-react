import React, { useContext } from "react";
import { useState } from "react";
import CartContext from "../../context/CartContext";
import Swal from "sweetalert2";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import './CartCheckout.css'

const CartCheckout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //CartContext
  const { cart, getItemPrice, getItemQty, clearCart } = useContext(CartContext);
  
  //Struct of Data for Firestore
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const onSubmit = (data) => {
    const userData = {
      name: data.name,
      lastName: data.lastname,
      email: data.email,
      phone: data.phone,
    };

    const { name, lastName, email, phone } = userData;

    const order = {
      buyer: { name, lastName, email, phone },
      items: cart,
      total: getItemPrice(),
    };

    addDoc(orderCollection, order).then(({ id }) => {
      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "#00A300",
        title: `¡Gracias por su compra!`,
        html:
          "<pre>" +
          `Número de Ticket: ${id}\n\nNombre: ${order.buyer.name}\nApellido: ${
            order.buyer.lastName
          }\nEmail: ${
            order.buyer.email
          }\n\nHa comprado con éxito ${getItemQty()} productos!` +
          "</pre>",
        showConfirmButton: true,
      });
    });

    clearCart();
  };

  return (
    <div className="formPresenter">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formContainer">
            <h2 className="formTitle">Por favor complete el formulario:</h2>
            <div className="formInput">
            <label htmlFor="name" className="form-label">
              <b className="h6">Nombre: </b>
            </label>
            <input
              type="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Ingresa tu nombre"
              {...register("name", {
                required: {
                  value: true,
                  maxLength: 20,
                  message: "Ingrese un nombre",
                },
                pattern: {
                  value:
                    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                  message: "Ingrese un nombre válido",
                },
              })}
            />
            {errors.name && (
              <h6 style={{ color: "#e30428" }} className="pt-1">
                {errors.name.message}
              </h6>
            )}
          </div>

          <div className="formInput">
            <label htmlFor="lastname" className="form-label">
              <b className="h6">Apellido: </b>
            </label>
            <input
              type="lastname"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              id="lastname"
              placeholder="Ingresa tu apellido"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Ingrese un apellido",
                },
                pattern: {
                  value:
                    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                  message: "Ingrese un apellido válido",
                },
              })}
            />
            {errors.lastname && (
              <h6 style={{ color: "#e30428" }} className="pt-1">
                {errors.lastname.message}
              </h6>
            )}
          </div>

          <div className="formInput">
            <label htmlFor="email" className="form-label">
              <b className="h6">Email: </b>
            </label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Ingresa tu email"
              {...register("email", {
                required: {
                  value: true,
                  maxLength: 20,
                  message: "Ingrese un email",
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Ingrese un email válido",
                },
              })}
            />
            {errors.email && (
              <h6 style={{ color: "#e30428" }} className="pt-1">
                {errors.email.message}
              </h6>
            )}
          </div>

          <div className="formInput">
            <label htmlFor="phone" className="form-label">
              <b className="h6">Telefono: </b>
            </label>
            <input
              type="phone"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              placeholder="Ingresa tu teléfono"
              {...register("phone", {
                required: {
                  value: true,
                  maxLength: 20,
                  message: "Ingrese un teléfono",
                },
                pattern: {
                  value:
                    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/d,
                  message: "Ingrese un teléfono válido",
                },
              })}
            />
            {errors.phone && (
              <h6 style={{ color: "#e30428" }} className="pt-1">
                {errors.phone.message}
              </h6>
            )}
          </div>
            </div>
          
        
        <div className="purchaseContainer">
           
          <button className="submitButton" type="submit">
            Finalizar compra
          </button>
        </div>
          
        </form>

    </div>
  );
};

export default CartCheckout;
