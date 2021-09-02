import React from 'react';

interface Props {
  gender: string,
  selectedGender: string,
  setGender: (value: string) => void,
  label: string
}

const Radio: React.FC<Props> = ({ gender, setGender, selectedGender, label }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="radioMale"
        id="radioMale"
        onChange={() => setGender(gender)}
        checked={selectedGender === gender} />
      <label className="form-check-label" htmlFor="radioMale">{label}</label>
    </div>
  );
}

export default Radio;