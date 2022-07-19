import React, { useState } from 'react';
import './App.css';
import mappedLocation from "./context/mappedLocation.json"

function App() {

  const [location, setLocation] = useState({
    country: '',
    province: '',
    district: '',
    sector: '',
    cell: '',
    village: ''
  })
  const [availableLocation, setAvailableLocation] = useState({
    country: [],
    province: [],
    district: [],
    sector: [],
    cell: [],
    village: []
  })

  const handleSelectOption = (e) => {

    switch (e.target.id) {
      case 'country':
        setLocation({ ...location, country: 'RWANDA' })
        setAvailableLocation({ ...availableLocation, country: [{ value: "RWANDA", label: "Rwanda" }], province: mappedLocation.children })
        break;

      case 'province':
        setLocation({ ...location, province: e.target.value })
        const filteredDistrict = availableLocation.province.filter((item) => item.label === e.target.value)
        setAvailableLocation({ ...availableLocation, district: filteredDistrict[0].children })
        break;

      case 'district':
        setLocation({ ...location, district: e.target.value })
        const filteredSector = availableLocation.district.filter((location) => location.label === e.target.value)
        setAvailableLocation({ ...availableLocation, sector: filteredSector[0].children })
        break;

      case 'sector':
        setLocation({ ...location, sector: e.target.value })
        const filteredVillage = availableLocation.sector.filter((location) => location.label === e.target.value)
        setAvailableLocation({ ...availableLocation, village: filteredVillage[0].children })
        break;

      case 'village':
        setLocation({ ...location, village: e.target.value })
        break;
      default:
        break;
    }
  }


  return (
    <div className="App">
      <p>Simple app for location Picker</p><br />
      <select id='country' name='country'
        onChange={handleSelectOption}
      >
        <option value={""}>Select Country</option>
        <option value={"RWANDA"}>Rwanda</option>
        <option value={"ZAMBIA"}>Zambia</option>
      </select>

      <select id='province' name='province'
        onChange={handleSelectOption}
      >
        <option value={""}>Select Province</option>
        {
          availableLocation.province.map((item, index) => {
            return (
              <option key={item.label} value={item.label}>{item.label}</option>
            )
          })
        }
      </select>
      <select id='district' name='district'
        onChange={handleSelectOption}
      >
        <option value={""}>Select District</option>
        {
          availableLocation.district.map((item, index) => {
            return (
              <option key={item.label} value={item.label}>{item.label}</option>
            )
          })
        }
      </select>
      <select id='sector' name='sector'
        onChange={handleSelectOption}
      >
        <option value={""}>Select Sector</option>
        {
          availableLocation.sector.map((item, index) => {
            return (
              <option key={item.label} value={item.label}>{item.label}</option>
            )
          })
        }
      </select>

      <select id='village' name='village'
        onChange={handleSelectOption}
      >
        <option value={""}>Select Village</option>
        {
          availableLocation.village.map((item, index) => {
            return (
              <option key={item.label} value={item.label}>{item.label}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default App;
