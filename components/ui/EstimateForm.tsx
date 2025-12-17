import React from 'react';

interface EstimateFormProps {
  formSubmitted: boolean;
  setFormSubmitted: (submitted: boolean) => void;
  priceEstimate: { min: number; max: number } | null;
  setPriceEstimate: (estimate: { min: number; max: number } | null) => void;
}

const EstimateForm: React.FC<EstimateFormProps> = ({
  formSubmitted,
  setFormSubmitted,
  priceEstimate,
  setPriceEstimate,
}) => {
  return (
    <form>
      <h2>Estimate Form</h2>
      {formSubmitted && priceEstimate && (
        <p>Estimated price: {priceEstimate.min} - {priceEstimate.max}</p>
      )}
    </form>
  );
};

export default EstimateForm;