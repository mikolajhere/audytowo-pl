/* eslint-disable react/prop-types */
import { FormWrapper } from "./FormWrapper";

export function HomeAreaView({ updateFields, serviceDataFlatArea }) {
  return (
    <FormWrapper title="">
      <div className="animate-in">
        <div className="">
          <h3>Jaki jest metraż nieruchomości?</h3>
        </div>

        <div className="form-item">
          <label className="legal-label" htmlFor="serviceDataFlatArea">
            Wybierz metraż
          </label>
          <select
            className="legal-input"
            name="dataValues[serviceDataFlatArea]"  
            id="serviceDataFlatArea"
            value={serviceDataFlatArea}
            onChange={(e) =>
              updateFields({
                "dataValues[serviceDataFlatArea]": e.target.value,
              })
            }
          >
            <option value="270">od 0 m² do 30 m²</option>
            <option value="271">od 30 m² do 40 m²</option>
            <option value="272">od 40 m² do 60 m²</option>
            <option value="273">od 60 m² do 80 m²</option>
            <option value="274">od 80 m² do 100 m²</option>
            <option value="275">od 100 m² do 150 m²</option>
            <option value="381">od 150 m² do 200 m²</option>
            <option value="396">od 200 m² do 250 m²</option>
            <option value="397">od 250 m² do 300 m²</option>
            <option value="398">od 300 m² do 350 m²</option>
            <option value="399">od 350 m² do 400 m²</option>
            <option value="400">od 400 m² do 500 m²</option>
            <option value="540">od 500 m² do 600 m²</option>
            <option value="541">od 600 m² do 700 m²</option>
            <option value="542">od 700 m² do 800 m²</option>
            <option value="543">od 800 m² do 900 m²</option>
            <option value="544">od 900 m² do 1 000 m²</option>
            <option value="545">od 1 000 m² do 1 200 m²</option>
            <option value="546">od 1 200 m² do 1 400 m²</option>
            <option value="547">od 1 400 m² do 1 600 m²</option>
            <option value="548">od 1 600 m² do 1 800 m²</option>
            <option value="549">od 1 800 m² do 2 000 m²</option>
            <option value="550">od 2 000 m² do 2 500 m²</option>
            <option value="551">od 2 500 m² do 3 000 m²</option>
            <option value="552">od 3 000 m² do 4 000 m²</option>
            <option value="553">od 4 000 m² do 6 000 m²</option>
            <option value="554">od 6 000 m² do 10 000 m²</option>
          </select> 
        </div>
      </div>
    </FormWrapper>
  );
}
