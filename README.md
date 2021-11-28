# Cypress_V6_UI-Automation-Testing

### UI Automation Testing, API Testing, Frameworks with

1. **Create `package.json`**
   `npm init`
2. **Install cypress**
   `npm install cypress --save-dev`
3. **Cypress latest version**
   `npm install --save-dev cypress@latest`
4. **Open cypress**
   `./node_modules/.bin/cypress open`
5. **cypress-file-upload**
   `npm install --save-dev cypress-file-upload`
6. **headless**  
   `./node_modules/.bin/cypress run --spec cypress/integration/webdriver-uni/contact-us.js`
7. **[CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)**

8. **[XPath Syntax](https://www.w3schools.com/xml/xpath_syntax.asp)**

9. **[Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices#Organizing-Tests-Logging-In-Controlling-State)**

10. **[Cypress xpath](https://github.com/cypress-io/cypress-xpath)**

11. **[Chai Assertion Library](https://www.chaijs.com/)**

12. **[Cypress Assertions](https://docs.cypress.io/guides/references/assertions#Chai)**

13. **[Chai-jQuery](https://docs.cypress.io/guides/references/assertions#Chai-jQuery)**

14. **[Cypress contains](https://docs.cypress.io/api/commands/contains#Syntax)**

15. **[Cypress document](https://docs.cypress.io/api/commands/document#Syntax)**

16. **[Cypress title](https://docs.cypress.io/api/commands/title#Syntax)**

17. **[Cypress url](https://docs.cypress.io/api/commands/url#Syntax)**

18. **[Command Line](https://docs.cypress.io/guides/guides/command-line#Installation)**

19. **[Chains of Commands](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Chains-of-Commands)**

20. **[Commands Are Asynchronous](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous)**

21. **[log](https://docs.cypress.io/api/commands/log)**

22. **[Commands Are Promises](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Promises)**

23. **[then](https://docs.cypress.io/api/commands/then#Syntax)**

24. **[Closures](https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Closures)**

25. **[Aliases](https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Aliases)**

26. **[invoke](https://docs.cypress.io/api/commands/invoke#Syntax)**

27. **[jQuery removeAttr() Method](https://www.w3schools.com/jquery/html_removeattr.asp)**

28. **[scrollIntoView](https://docs.cypress.io/api/commands/scrollintoview#Syntax)**

29. **[trigger](https://docs.cypress.io/api/commands/trigger)**

30. **[Traversal](https://example.cypress.io/commands/traversal)**

31. **[cypress-file-upload](https://www.npmjs.com/package/cypress-file-upload)**

32. **[Mocha](https://docs.cypress.io/guides/references/bundled-tools#Mocha)**

33. **[Hooks](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks)**

34. **[fixture](https://docs.cypress.io/api/commands/fixture#Syntax)**

35. **[pause](https://docs.cypress.io/api/commands/pause)**

36. **[wait](https://docs.cypress.io/api/commands/wait#Syntax)**

37. **[Using-debugger](https://docs.cypress.io/guides/guides/debugging#Using-debugger)**

38. **[Screenshots](https://docs.cypress.io/guides/references/configuration#Screenshots)**

39. **[viewport](https://docs.cypress.io/api/commands/viewport#Syntax)**

40. **[clearCookies](https://docs.cypress.io/api/commands/clearcookies#Syntax)**

41. **[clearLocalStorage](https://docs.cypress.io/api/commands/clearlocalstorage#Syntax)**

42. **[dashboard](https://www.cypress.io/dashboard/)**

43. **[npx](https://www.npmjs.com/package/npx)**

44. **[Multiple-reporters](https://docs.cypress.io/guides/tooling/reporters#Multiple-reporters)**
    • `npm install --save-dev cypress-multi-reporters mocha-junit-reporter`
    • Config cypress.json
    ```json
    {
      "reporter": "cypress-multi-reporters",
      "reporterOptions": {
        "configFile": "reporter-config.json"
      }
    }
    ```
    • Add reporter-config.json
    ```json
    {
      "reporterEnabled": "spec, mocha-junit-reporter",
      "mochaJunitReporterReporterOptions": {
        "mochaFile": "cypress/results/results-[hash].xml"
      }
    }
    ```
    • `npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator`
    • `npm run triggerAllTests-headless`
45. **[Switch-between-multiple-configuration-files](https://docs.cypress.io/api/plugins/configuration-api#Switch-between-multiple-configuration-files)**

    `cypress run --env configFile=staging`

    Each of these environments would read in the configuration at these files:

    ```text
    cypress/config/development.json
    cypress/config/qa.json
    cypress/config/staging.json
    cypress/config/production.json
    ```

    This would enable you to do things like this:

    ```json
    // cypress/config/development.json
    {
      "baseUrl": "http://localhost:1234",
      "env": {
        "something": "development"
      }
    }
    // cypress/config/qa.json
    {
      "baseUrl": "https://qa.acme.com",
      "env": {
        "something": "qa"
      }
    }
    // cypress/config/staging.json
    {
      "baseUrl": "https://staging.acme.com",
      "env": {
        "something": "staging"
      }
    }
    // cypress/config/production.json
    {
      "baseUrl": "https://production.acme.com",
      "env": {
        "something": "production"
      }
    }
    ```

46. `java -jar -Dfile.encoding=UTF-8 jenkins.war`
