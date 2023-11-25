import { useState } from "react";

import { Date } from "@/components/date/date";
import { CustomSelect } from "../components/customSelect";
import { Button } from "@/components/ui/button";
import { InputDate } from "@/components/inputDate";

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-[70px]">
      <div className="flex justify-center items-end gap-[12px]">
        <div className="">
          <div className="font-medium mb-3">
            <span>Откуда</span>
          </div>

          <CustomSelect />
        </div>

        <div className="">
          <div className="font-medium mb-3">
            <span>Куда</span>
          </div>
          <CustomSelect />
        </div>

        <div className="w-[386px] ">
          <div className="flex gap-10 items-center">
            <span className="font-medium ">Даты</span>
            <Button onClick={onOpen}>Click</Button>
          </div>
          <div className="flex mt-3">
            <InputDate />
          </div>

          <Date isOpen={isOpen} setIsOpen={onOpen} />
        </div>

        <Button className="w-[153px] h-[47px]">Найти</Button>
      </div>
    </div>
  );
};
