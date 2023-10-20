/* eslint-disable react/prop-types */
import { FormWrapper } from "./FormWrapper";

export function CityView({ updateFields, serviceDataAddress }) {
  return (
    <FormWrapper title="">
      <div className="animate-in">
        <div className="">
          <h3>Gdzie znajduje się nieruchomość?</h3>
        </div>
        <div className="form-item">
          <label className="legal-label" htmlFor="address">
            Wpisz miasto
          </label>
          <input
            id="address"
            className="legal-input"
            type="text"
            name="address"
            value={serviceDataAddress}
            onChange={(e) =>
              updateFields({ "dataValues[serviceDataAddress]": e.target.value })
            }
          />
        </div>
      </div>
    </FormWrapper>
  );
}
