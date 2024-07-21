import { Link } from 'react-router-dom';
import './CreateDestination.css';

const EditDestinationForm = ({ editData, handleEditChange, handleUpdate, handleCancel }) => (
   <> <h5>Edit Destination</h5>
   <div className="form">
     <form onSubmit={handleUpdate}>
       <div className="form-group">
         <label>Image URL:</label>
         <input
           type="text"
           name="image"
           value={editData.image}
           onChange={handleEditChange}
           className="form-control"
         />
       </div>
       <div className="form-group">
         <label>Destination Name:</label>
         <input
           type="text"
           name="name"
           value={editData.name}
           onChange={handleEditChange}
           className="form-control"
         />
       </div>
       <div className="form-group">
         <label>Days:</label>
         <input
           type="number"
           name="days"
           value={editData.days}
           onChange={handleEditChange}
           className="form-control"
         />
       </div>
       <button type="submit" className="btn">Update</button>
       <button type="button" onClick={handleCancel} className="btn">
         Cancel
       </button>
     </form>
   </div></>
);

export default EditDestinationForm;
