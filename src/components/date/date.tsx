import { CustomCalander } from "../customDate";
import { Button } from "../ui/button";
import "./style.css";

interface DateProps {
  setIsOpen: () => void;
  isOpen: boolean;
}

export const Date = ({ isOpen, setIsOpen }: DateProps) => {
  return (
    <div className={`absolute box mt-5 ${isOpen ? "block" : "hidden"}`}>
      <div className="p-5 flex gap-3">
        <CustomCalander />
        <CustomCalander />
      </div>

      <div className="flex justify-between p-5">
        <div className="flex items-center gap-1">
          <input type="checkbox" />
          <span className="text-[13px]">Без конечной даты</span>
        </div>

        <div>
          <Button onClick={setIsOpen}>Готово</Button>
        </div>
      </div>
    </div>
  );
};
