export class Locators{

    constructor(page){
        
        this.page = page;

        this.username = this.page.locator('[type="text"]');
        this.password = this.page.locator('[type="password"]');
        this.loginBtn = this.page.locator('[type="submit"]');
        this.changeStatus = this.page.locator('[href*="/changePolicyStatusAction.do"]');
        this.countryDropdown = this.page.locator('[name="countrySelect"]');
        this.policyNumber = this.page.locator('[name="policyNumber"]');
        this.validateBtn = this.page.locator('[type="submit"]');
        this.newStatusDropdown = this.page.locator('[name="newStatusId"]');
        this.message = this.page.locator('[id="errorsBox"]');
        // this.ancientStatus = this.page.locator('//*[@id="changePolicyStatusForm"]/table/tbody/tr/td/table/tbody/tr[3]/td[2]');
        this.oldStatus = this.page.locator('#changePolicyStatusForm > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(2)');
    }

}
