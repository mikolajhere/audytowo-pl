/* eslint-disable react/prop-types */
import { FormWrapper } from "./FormWrapper";

export function PlanView({ updateFields, serviceClientClientHasFloorPlan }) {
  return (
    <FormWrapper title="">
      <div className="animate-in">
        <div className="">
          <h3>Czy masz rzut architektoniczny?</h3>
        </div>

        <div className="form-item">
          <label
            className="legal-label"
            htmlFor="serviceClientClientHasFloorPlan"
          >
            Taki rzut znajdziesz w dokumentacji budowlanej.
          </label>
          <select
            className="legal-input"
            name="dataValues[serviceClientClientHasFloorPlan]"
            id="serviceClientClientHasFloorPlan"
            value={serviceClientClientHasFloorPlan}
            onChange={(e) =>
              updateFields({
                "dataValues[serviceClientClientHasFloorPlan]": e.target.value,
              })
            }
          >
            <option value="589">Nie</option>
            <option value="590">Tak</option>
          </select>
        </div>
      </div>
    </FormWrapper>
  );
}
