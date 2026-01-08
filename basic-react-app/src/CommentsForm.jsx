import { useState } from 'react';
export default function CommentsForm(){
    let [formData,setFormData] = useState({
        username:"",
        remarks:"",
        rating:0
    });
    let handleInputChange =(e) =>{
        setFormData((currData=>{
            return {...currData,[e.target.name]:e.target.value};
        }));
    }
    let handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:0
        }); 
    }
    return(
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} name='username'/>
                <br /> <br />

                <textarea placeholder="Remarks" value={formData.remarks} onChange={handleInputChange} name='remarks'></textarea>
                <br /> <br /> 

                <input type="number" placeholder="rating" value={formData.rating} onChange={handleInputChange} name='rating' min={1} max={5}/>
                <br /> <br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}