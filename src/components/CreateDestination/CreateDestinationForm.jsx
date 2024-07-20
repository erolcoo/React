import { Link } from 'react-router-dom';
import './CreateDestination.css';

const CreateDestinationForm = ({ formData, handleChange, handleSubmit }) => (
 <>   <h2>Create your destination</h2>
  <div className="Link-Home">
                <Link to="/catalog">Back</Link>
            </div>
 <div className="form">
   <form onSubmit={handleSubmit}>
     <div className="form-group">
       <label>Where you want to go..?</label>
       <input
         type="text"
         name="id"
         value={formData.id}
         onChange={handleChange}
         className="form-control"
       />
     </div>
     <div className="form-group">
       <label>Show us a place you want to visit..!</label>
       <input
         type="text"
         name="image"
         value={formData.image}
         onChange={handleChange}
         className="form-control"
       />
     </div>
     <div className="form-group">
       <label>Which mount you want to go ..?</label>
       <input
         type="text"
         name="name"
         value={formData.name}
         onChange={handleChange}
         className="form-control"
       />
     </div>
     <div className="form-group">
       <label>For how many days..?</label>
       <input
         type="number"
         name="days"
         value={formData.days}
         onChange={handleChange}
         className="form-control"
       />
     </div>
     <button type="submit" className="btn">Add</button>
   </form>
 </div></>
);

export default CreateDestinationForm;
