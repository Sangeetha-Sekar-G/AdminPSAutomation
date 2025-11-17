import { Locators } from "./Locators.js";

export async function changeStatus(page, policy) {

    const locators = new Locators(page);

    await locators.changeStatus.click();
    await locators.countryDropdown.selectOption({ value: 'wd' });
    await locators.policyNumber.fill(policy);
    await locators.validateBtn.click();

    const oldStatus = await locators.oldStatus.textContent();

    if(oldStatus == 8){
        await locators.newStatusDropdown.selectOption({ value: '13' });
        await locators.validateBtn.click();
        const msg = await locators.message.textContent();
        console.log('Policy has been Cancelled - ',policy);
        // console.log(msg.trim().replace(/\s+/g, ' '), policy, '(Status updated to 13)'); // for the real test

        return oldStatus, msg.trim().replace(/\s+/g, ' ');
    }else{
        console.log('Policy ', policy, 'already in the Cancelled status');

    }

   
    
}
