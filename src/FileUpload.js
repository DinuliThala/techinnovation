import React, { useState } from 'react';

function FileUploadComponent() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('https://api.example.com/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        // File uploaded successfully, handle the response if needed
                        console.log('File uploaded successfully');
                    } else {
                        // Handle the error
                        console.error('File upload failed');
                    }
                })
                .catch((error) => {
                    // Handle fetch error
                    console.error('File upload error:', error);
                });
        } else {
            // No file selected, handle accordingly
            console.error('No file selected');
        }
    };

    return (
        <div>
            <h2>File Upload</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUploadComponent;
