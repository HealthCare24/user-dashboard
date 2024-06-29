// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Advertisements from './components/Advertisements';
import DoctorList from './components/DoctorList';
import HospitalList from './components/HospitalList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const user = {
    name: 'John Doe',
    imageUrl: '/user.png'
  };

  const [location, setLocation] = useState('Loading...');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
          .then(response => response.json())
          .then(data => {
            setLocation(`${data.city}, ${data.countryName}`);
          })
          .catch(error => {
            console.error('Error fetching location:', error);
            setLocation('Location unavailable');
          });
      },
      error => {
        console.error('Error getting location:', error);
        setLocation('Location unavailable');
      }
    );
  }, []);

  return (
    <div className="app">
      <Navbar user={user} />
      <div className="user-info">
        <h1>{user.name}</h1>
        <div className="location">{location}</div>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>
          <button>Services</button>
          <button>Pharmacy</button>
        </div>
        <div className="main-content">
          <Advertisements />
          <DoctorList />
          <HospitalList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
