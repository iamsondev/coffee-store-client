import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name,supplier, price,taste, details, quantity } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        // start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success"
                
              });
              // remove coffee from the state
              const remainingCoffees = coffees.filter(cof => cof._id !==_id)
                setCoffees(remainingCoffees)

            }

          })

      }
    });

  }

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={name}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Price : {price}</h2>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplier}</p>
          <p>Taste : {taste}</p>
          <p>Details :  {details}</p>
          <div className="card-actions justify-end">
            <div className="join join-vertical">
             <Link to={`/coffee/${_id}`}> <button className="btn join-item">View</button></Link>
              <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
              <button onClick={() => handleDelete(_id)} className="btn join-item">x</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;