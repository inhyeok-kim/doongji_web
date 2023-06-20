import { createMonthDateList } from "src/Modules/Calendar/model/Utils";


it("add correctly", ()=>{
    console.log(createMonthDateList(2023,6,"hide"));
    expect(3+5).toBe(8);
})