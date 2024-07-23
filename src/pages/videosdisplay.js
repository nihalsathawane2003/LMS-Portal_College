import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VideoDis = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchVideos = async () => {
      try {
        const response = await axios.get('/videos', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setVideos(response.data);
      } catch (err) {
        console.error('Error fetching videos', err);
        setError('Failed to fetch videos');
      }
    };

    fetchVideos();
  }, [navigate]);

  return (
    <div>
      <h1>Videos</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {videos.map(video => (
          <li key={video._id}>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <video width="320" height="240" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoDis;
