/* eslint-disable react/prop-types */
import { FormWrapper } from "./FormWrapper";

export function EmailView({ updateFields, dataUpdateEmail }) {
  return (
    <FormWrapper title="">
    <div className="animate-in">
        <div className="">
          <h3>Jaki jest Twój adres e-mail?</h3>
        </div>

        <div className="form-item">
          <label className="legal-label" htmlFor="dataUpdateEmail">
            Na wskazany e-mail wyślemy gotowe świadectwo energetyczne
          </label>
          <input
            id="dataUpdateEmail"
            type="email"
            className="legal-input"
            name="dataUpdateEmail"
            value={dataUpdateEmail}
            onChange={(e) =>
              updateFields({
                dataUpdateEmail: e.target.value,
              })
            }
          />
        </div>
      </div>
    </FormWrapper>
  );
}
