import HeaderLayout from "../../components/header/HeaderLayout";
import SubmitButton from "../../components/shared-components/SubmitButton";

const GuestPage = () => {
  return (
    <div>
      <HeaderLayout />
      <SubmitButton
        functionProp={""}
        width={"w-24"}
        absolute={"absolute left-2"}
      />
    </div>
  );
};

export default GuestPage;
