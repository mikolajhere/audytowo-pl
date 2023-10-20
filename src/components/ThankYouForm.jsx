import { FormWrapper } from "./FormWrapper";

export function ThankYouForm() {
  return (
    <FormWrapper title="Dziękujemy">
      <div className="animate-in" style={{ width: "100%" }}>
        <h3>Dziękujemy!</h3>
        <p>
          Skontaktujemy się z Tobą jak najszybciej, aby potwierdzić szczegóły.
        </p>
      </div>
    </FormWrapper>
  );
}
