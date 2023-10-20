/* eslint-disable react/prop-types */
import { FormWrapper } from "./FormWrapper";

export function HomeTypeView({ updateFields, serviceHomeType }) {
  return (
    <FormWrapper title="">
      <div className="animate-in">
        <div className="">
          <h3>Jaki jest typ nieruchomości?</h3>
        </div>

        <div className="form-item">
          <label className="legal-label" htmlFor="serviceHomeType">
            Wskaż typ nieruchomości
          </label>
          <select
            className="legal-input"
            id="serviceHomeType"
            name="serviceHomeType"
            value={serviceHomeType}
            onChange={(e) =>
              updateFields({ "dataValues[serviceHomeType]": e.target.value })
            }
          >
            <option value="">Wybierz</option>
            <option value="390">Mieszkanie</option>
            <option value="391">Dom</option>
            <option value="393">Inne</option>
          </select>
        </div>
      </div>
    </FormWrapper>
  );
}
