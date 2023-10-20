/* eslint-disable react/prop-types */
import { FormWrapper } from "./FormWrapper";

export function PhoneView({ updateFields, dataPhone }) {
  return (
    <FormWrapper title="">
      <div className="animate-in">
        <div className="">
          <h3>Jaki jest Twój numer kontaktowy?</h3>
        </div>

        <div className="form-item">
          <label className="legal-label" htmlFor="phone">
            Wprowadź numer telefonu i kliknij &quot;Dalej&quot;
          </label>
          <input
            className="legal-input"
            type="tel"
            name="dataPhone"
            id="phone"
            required
            minLength={9}
            maxLength={14}
            value={dataPhone}
            onChange={(e) => updateFields({ dataPhone: e.target.value })}
          />
        </div>
      </div>
    </FormWrapper>
  );
}
