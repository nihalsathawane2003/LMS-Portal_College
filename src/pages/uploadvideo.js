import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const UploadVideo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('video', videoFile);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/uploadVideo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.status === 'ok') {
        setSuccess('Video uploaded successfully!');
        setTitle('');
        setDescription('');
        setVideoFile(null);
      }
    } catch (err) {
      console.error('Error uploading video', err);
      setError('Failed to upload video');
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleUpload}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Video File:</label>
          <input 
            type="file" 
            accept="video/*" 
            onChange={(e) => setVideoFile(e.target.files[0])} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
};

export default UploadVideo;
