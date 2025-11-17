import { Locators } from "../PageObjects/Locators.js";

export async function Login(page, username, password) {

    const locators = new Locators(page); 
    
    await locators.username.fill(username);
    await locators.password.fill(password);
    await locators.loginBtn.click();
}
