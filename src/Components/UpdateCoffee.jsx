import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const {_id, name, quantity, price, taste, supplier, photo, details } = useLoaderData();
  const handleUpdateCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);
    fetch(`http://localhost:3000/coffees/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(updateCoffee)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your coffee has updated successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }
  return (
    <div className='p-24'>
      <div className='space-y-3 text-center'>
        <h1 className='text-6xl font-bold'>UPDATE  COFFEE</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quas sequi dolorem omnis animi amet quam unde, odio maxime. Deserunt laboriosam nesciunt, beatae amet earum dolorum provident fugit voluptatum, alias commodi reiciendis unde facere quasi adipisci atque voluptates? Quos, reprehenderit.</p>
      </div>
      <div className='mt-10'>
        <form onSubmit={handleUpdateCoffee}>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-5">

              <label className="label">Name</label>
              <input type="text" name='name' className="input" defaultValue={name} placeholder="Enter your name" />
              <label className="label">Supplier</label>
              <input type="text" name='supplier' className="input" defaultValue={supplier} placeholder="select supplier" />
              <label className="label">Price</label>
              <input type="text" name='price' className="input" defaultValue={price} placeholder="price per cup" />

            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

              <label className="label">Quantity</label>
              <input type="text" name='quantity' className="input" defaultValue={quantity} placeholder="Enter your quantity" />
              <label className="label">Taste</label>
              <input type="text" name='taste' className="input" defaultValue={taste} placeholder="Enter Taste" />
              <label className="label">Details</label>
              <input type="text" name='details' className="input" defaultValue={details} placeholder="Enter details" />

            </fieldset>

          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

            <label className="label">Photo</label>
            <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo Url" />


          </fieldset>
          <input type="submit" className='btn w-full' value="Update Coffee" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;