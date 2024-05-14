import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneType: '',
    staff: false,
    bio: '',
    optedIn: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    
    const validateForm = () => {
        const errors = {}
        
        if(!formData.name) {
            errors.name = 'Name is required'
        }
        if (!formData.email) {
            errors.email = "Email is required.";
          } else if (!/^\S+@\S+.\S+$/.test(formData.email)) {
            errors.email = "Email format is invalid.";
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={formData.name}
          ></input>
        </p>
        <p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="phone number"
            value={formData.phone}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label>Phone Type:</label>
          <select
            name="phoneType"
            value={formData.phoneType}
            onChange={handleChange}
          >
            <option value="">Select a type</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="mobile">Mobile</option>
          </select>
        </p>
        <p>
          <label>
            Staff:
            <input
              type="radio"
              name="staffRole"
              value="instructor"
              onChange={handleChange}
            />{' '}
            Instructor
          </label>
          <label>
            <input
              type="radio"
              name="staffRole"
              value="student"
              onChange={handleChange}
            />
            Student
          </label>
        </p>
        <p>
          <label>Bio</label>
          <textarea
            value={formData.bio}
            onChange={handleChange}
            name="bio"
            placeholder="A quick bio about yourself."
          ></textarea>
        </p>

        <p>
          <label>Sign up for email notifications:</label>
          <input
            type="checkbox"
            name="optedIn"
            checked={formData.optedIn == true}
            onChange={handleChange}
          ></input>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
