import {test, expect} from '@playwright/test';
import {PageManager} from '../PageManager/PageManager.js';

const policyNumbers = ['3101500580','3101500576','3101500423','3101499754','3101262829','3101262851','3101264723','3101264735','3101264737','3101264744','3101264749','3101264750','3101264751',
  '3101264752','3101264753','3101264754','3101264756','3101264757','3101264758','3101264761','3101264762','3101264766','3101264767','3101264768'];

test.describe("This is a group of tests", () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://bo-prelive.europ-assistance.com/adminPlugAndSell/');
    await PageManager.login.Login(page, "bicadmin", "bicadmin");
  });

  for (let index = 0; index < policyNumbers.length; index++) {
  test(" Cancel the Policy " + policyNumbers[index], async({page}) => {
        console.log('Policy to Cancel - ',policyNumbers[index] );
        const msg = await PageManager.changeStatus.changeStatus(page, policyNumbers[index]);
        // expect(msg).toBe('Policy successfully updated'); //for the real test
  });
  
}
})



































/*
Test Data
'3101500580','3101500576','3101500423','3101499754','3101262829','3101262851','3101264723','3101264735',
'3101264737','3101264744','3101264749','3101264750','3101264751','3101264752','3101264753','3101264754',
'3101264756','3101264757','3101264758','3101264761','3101264762','3101264766','3101264767','3101264768'


*/


//*[@id="changePolicyStatusForm"]/table/tbody/tr/td/table/tbody/tr[3]/td[2]/font/font
// /html/body/div[2]/div[2]/form/table/tbody/tr/td/table/tbody/tr[3]/td[2]/font/font
// test('Cancel list of Policies for Expedia', async({browser})=>
// {
//     const context =await browser.newContext();
 
//     await Promise.all(
//     policyNumbers.map(async policy => {
//         const newPage = await context.newPage(); 

//         await newPage.goto('https://bo-prelive.europ-assistance.com/adminPlugAndSell/');
//         await PageManager.login.Login(newPage, "bicadmin", "bicadmin");
//         const msg = await PageManager.changeStatus.changeStatus(newPage, policy);
//         expect(msg).toBe('Policy successfully updated');

//         await newPage.close();
//   })
// );



// })


