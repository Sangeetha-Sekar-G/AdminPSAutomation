import { Locators } from "./Locators.js";

export async function varifyStatus(page, policy) {

    const locators = new Locators(page);

    await locators.changeStatus.click();
    await locators.countryDropdown.selectOption({ value: 'wd' });
    await locators.policyNumber.fill(policy);
    await locators.validateBtn.click();

    const newStatus = await locators.oldStatus.textContent();

    return newStatus;
}
