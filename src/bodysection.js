import React,{useState} from "react";
import './fullpage.css';
import img from './images/img.png';
import axios from "axios";
import Form from './forms.js';
import Form2 from './forms2.js';
// const FileUploader = ({onFileSelect}) => {
//     const fileInput = useRef(null)

//     const handleFileInput = (e) => {
//         // handle validations
//         onFileSelect(e.target.files[0])
//     }

//     return (
//         <div className="file-uploader">
//             <input type="file" onChange={handleFileInput}>
//             <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary">
//         </div>
//     )
// }


// export default function 
const Bodysection=()=>{
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

     const submitForm = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", selectedFile);
      
        axios
          .post("http://localhost:3000/uploadFile", formData)
          .then((res) => {
            alert("File Upload success");
          })
          .catch((err) => alert("File Upload Error"+err));
      };

        return(
            <>

    <div id="fullpage">

        <section className="section s1">
            <h1>CODEnator</h1>
            <p>Convert Image to HTML Code</p>
        </section>
        
        <section className="section s2">
            <div className="cont">
            <div className="text">
                <h1>How to Use?</h1>
                <ol>
                    <li>Upload the image</li> 
                    <li>Download the HTML code</li>
                </ol>
            </div>
            <img src={img} alt="ml"/>
        </div>
        </section>

        <section className="section s3">
            <form>
             <input type="file" />
             <button type="button" className="btn btn-outline-secondary" onClick={submitForm}>Upload image</button>

             </form>
        {/* <button type="button" className="btn btn-outline-secondary">Upload image</button> */}

        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* <FileUploaded
            onFileSelectSuccess={(file) => setSelectedFile(file)}
            onFileSelectError={({ error }) => alert(error)}
          /> */}

          <button onClick={submitForm}>Submit</button>
         </form>
        <Form/>
        <Form2/>
        </section>

    </div>
    </>
    );

    }
// }

export default Bodysection;