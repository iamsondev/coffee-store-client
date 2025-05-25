import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

  const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    // send coffee data to db
    fetch('http://localhost:3000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log('new data', data);
        Swal.fire({
          title: "coffee added successfully",
          icon: "success",
          draggable: true
        });

      })



  }

  return (

<div className='p-24'>
      <div className='space-y-3 text-center'>
        <h1 className='text-6xl font-bold'>ADD COFFEE</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quas sequi dolorem omnis animi amet quam unde, odio maxime. Deserunt laboriosam nesciunt, beatae amet earum dolorum provident fugit voluptatum, alias commodi reiciendis unde facere quasi adipisci atque voluptates? Quos, reprehenderit.</p>
      </div>
      <div className='mt-10'>
        <form onSubmit={handleAddCoffee}>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-5">

              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Enter your name" />
              <label className="label">Supplier</label>
              <input type="text" name='supplier' className="input" placeholder="select supplier" />
              <label className="label">Price</label>
              <input type="text" name='price' className="input" placeholder="price per cup" />

            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

              <label className="label">Quantity</label>
              <input type="text" name='quantity' className="input" placeholder="Enter your quantity" />
              <label className="label">Taste</label>
              <input type="text" name='taste' className="input" placeholder="Enter Taste" />
              <label className="label">Details</label>
              <input type="text" name='details' className="input" placeholder="Enter details" />

            </fieldset>

          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

            <label className="label">Photo</label>
            <input type="text" name='photo' className="input w-full" placeholder="Photo Url" />


          </fieldset>
          <input type="submit" className='btn w-full' value="AddCoffee" />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;