## Supply Integration

A Fulcrum Supply API integration gives you and your respondents instant access to thousands of Fulcrum project opportunities globally. The Fulcrum API gives you the ability to find and filter new survey opportunities, send targeted respondents using survey qualifications and quotas, and strategically rank survey opportunities in order to maximize revenue.

Before getting started, it's important to note that all testing and development should be done in the [sandbox environment](#environments). Information on environments and other foundational topics is available in the [Introduction](#introduction) and should be reviewed before moving on to Phase 1.

### Phase 1 - Mapping
Fulcrum contains numerous objects, structures, and options that should be added to the supplier system or mapped. The steps below guide you through the key areas that should be mapped or adopted.

#### 1. Store our system [definitions](#definitions) and map them to your system.
These definitions provide human-readable strings that correspond to various object/option IDs in Fulcrum.

#### 2. Store Fulcrum Standard qualification [question texts](#get-list-standard-questions) and [answer options](#get-show-question-options) for countries you operate in. 

We recommend mapping your respondents to the top 20-30 Fulcrum standard qualifications (please see below). Note: In the United States, State, DMA, Region, and Division are all based off ZIP. Be sure to map all zip codes to their corresponding State, DMA, Region, and Division for optimal geographic targeting.

 - `AGE`
 - `GENDER`
 - `ZIP`
 - `HISPANIC`
 - `ETHNICITY`
 - `STANDARD_HHI_US`
 - `STANDARD_EDUCATION`
 - `STANDARD_EMPLOYMENT`
 - `STANDARD_JOB_TITLE`
 - `Age_and_Gender_of_Child`
 - `STANDARD_INDUSTRY`
 - `STANDARD_No_OF_EMPLOYEES`
 - `STANDARD_B2B_DECISION_MAKER`
 - `Parental_Status_Standard`
 - `STANDARD_COMPANY_REVENUE`
 - `STANDARD_SUFFERER_AILMENTS_I`
 - `STANDARD_SUFFERER_AILMENTS_II`
 - `STANDARD_COMPANY_DEPARTMENT`
 - `STANDARD_INDUSTRY_PERSONAL`
 - `STANDARD_DIAGNOSED_AILMENTS_I`
 - `STANDARD_DIAGNOSED_AILMENTS_II`
 - `STANDARD_PETS`
 - `STANDARD_BEVERAGE_P4W`
 - `STANDARD_RELATIONSHIP`
 - `STANDARD_HOUSEHOLD_TYPE`
 - `Panel_Recruit`
 - `STANDARD_DIABETES_TYPE`
 - `STANDARD_ELECTRONICS`
 - `STANDARD_FLIGHT_DESTINATION`
 
For a list of top qualifications in other countries, [shoot us an email](mailto:support@luc.id).

#### 3. Understanding Fulcrum Qualifications
Fulcrum Standard qualifications provide an industry standard for programmatic survey targeting. A survey’s qualifications form the pre-screener questions that are presented to each respondent before they leave Fulcrum and enter the client survey. 
- Qualifications and their conditions make up the overall type of respondents the buyer is looking for. 
- Conditions are set on a qualification and specify who is accepted by the qualification. For example AGE and GENDER are qualifications. If the client is looking for AGE 18-24 and only Males, those would be conditions.
- A client may not necessarily build quotas off of all qualifications. It’s very important to use both qualifications and conditions when determining whether to send your respondent.
- You can pass respondent demographics on the Fulcrum entry link allowing the respondent to bypass prescreener questions. 
  - Example Entry Link: http://www.samplicio.us/router/default.aspx?SID=f6c83654-3d4f-4f7c-bef1-2f5097b6ae9c&PID=12345&MID=54321&AGE=35&GENDER=2&ZIP=70117
- You can include variables in your supplier redirects to capture valuable demographic data on your respondents if already stored in Fulcrum. 
  - Fulcrum will pass back stored demographic data if the respondent has answered that question within the last 30 days. 
  - If demographic data is returned on the supplier redirect which you do not have for your panelist then update your panelist profile with this information to better improve targeting. 
  - If demographic data is returned on the supplier redirect which you already have for your panelist then ignore the data returned on the supplier redirect. 
  - We recommend including the top 20 qualifications on your return redirects to capture valuable demographic data on your respondents.
  - Example Supplier Redirect template: http://www.supplierURL.com?status=complete&PID=[%PID%]&MID=[%MID%]&42=[%AGE%]&43=[%GENDER%]&45=[%ZIP%]&47=[%HISPANIC%]&113=[%ETHNICITY%]

#### 4. Understanding Fulcrum Quotas
[Quotas](http://developer.lucidhq.com/#quotas) determine how many completes of each type of respondent are allowed into the survey. Quotas are always created off Fulcrum qualifications and conditions. 

Fulcrum quotas can be nested, not nested, overlapping, or contain only a subset of the qualified respondents. Here are a few examples:

- Study 1: only total quota (no subquotas)
  - Total = 1000
- Study 2: nested gender and age
  - Total = 1000
    - Male 18-35 = 250
    - Male 36+ = 250
    - Female 18-35 = 250
    - Female 36+ = 250
- Study 3: separate gender and age
  - Total = 1000
    - Male = 500
    - Female = 500
    - 18-35 = 500
    - 36+ = 500
- Study 4: separate gender and nested gender and age quotas
  - Total = 1000
    - Male = 500
    - Female = 500
    - Male 18-35 = 250
    - Male 36+ = 250
    - Female 18-35 = 250
    - Female 36+ = 250

__Important Details:__

- Quota groups are distinguished by `SurveyQuotaID` property.
- A respondent applies to a quota if they fit ALL of the conditions of the qualifications.
- __All__ quotas which apply to a respondent __must__ be greater than 0. If a respondent fits into any quota which is = 0 then the respondent will __term__.
- The logical operator is “OR” within the same quota qualification (i.e. AGE 18 OR 19 OR 20), but AND between quota qualifications (AGE 18 OR 19 or 20 AND Male OR Female)

### Phase 2 - [List Exchange Surveys](#get-list-exchange-surveys), [Creating Links](#post-create-a-link), [Getting Qualifications](#get-show-qualifications), and [Quotas](#get-show-quotas)

In this phase, we’ll explain the recommended process to find new Offerwall surveys, and retrieve and store qualifications and quotas in tables locally to be referenced later.

#### 1. Recommended Supply API Call Frequency

| API Call                                                      | Ideal Frequency                |
|---------------------------------------------------------------|--------------------------------|
| [Show Quotas](#get-show-quotas)                               | 3                              |
| [List Allocated Surveys](#get-list-allocated-surveys)         | 3                              |
| [Show an Allocated Survey](#get-show-an-allocated-survey)     | Project Specific               |
| [Show Qualifications](#get-show-qualifications)               | 3                              |
| [Show Survey Statistics](#get-show-statistics)                | 60                             |
| [List Exchange Surveys](#get-list-exchange-surveys)           | 3                              |
| [List Qualified Respondents](#get-list-qualified-respondents) | 3, if recontact study type     |
| [List a Survey’s Groups](#groups)                             | 10, if in survey group         |
| [Create a Link](#post-create-a-link)                          | 1 per project                  |
| [Show a Link](#get-show-a-link)                               | Only for troubleshooting       |
| [List Statistics](#get-list-statistics)                       | If desired                     |
| [Update a Link](#put-update-a-link)                           | Never, unless project specific |


### Phase 3 - Creating a Survey

<aside class="notice">Keep in mind that user adoption will be higher with UIs that require the fewest clicks and data input. Leverage information you already have in your database to reduce the number of fields that are asked, and place areas for additional information with regard for the typical user flow.</aside>

Surveys objects are the basis for a project or demographic segment you are seeking. Here are the key steps to creating a survey in Fulcrum.
#### 1. Determine the [fair market price](#feasibility) of the target demographic.
The Feasibility resource returns pricing data from the Fulcrum Pricing Index (FPI), which represents fair market price for a target given the surveys specs, qualifications, quotas, and time in field. Integrators with consumer users often take the response from this call and add a margin before returning it to the end user (i.e. `FPI Price * 1.3 = Price`)

#### 2. Make the call to [create a survey](#post-create-a-survey) object.
This survey object contains the key settings for the survey such as your quota cost per impression (QCPI), security settings, and links for the destination user experience (survey, user test, etc). Some of the most popular properties integrators give end-users control over are:
 - QuotaCPI: Allows the end-user to set their purchase price. In many cases, integrators will suggest (or command a price) based on the feasibility response.
 - CountryLanguageID: The country-language combination which the survey should be available to. Keep in mind that this will affect certain localized standards. For example, you would want to use STANDARD_HHI_INT in all countries outside of the United States and STANDARD_HHI_US for `English - United States` and `Spanish - US` projects. Further, you would not want to display the Hispanic nor Ethnicity qualifications outside of the United States.

<aside class="notice">An additional column in your database for earnings-per-click (EPC) can help you track whether you are still offering a fair market price as your survey fields and specs change. EPC is the revenue per respondent a supplier sends in suppliers and thus the value that the survey provides to the suppliers.</aside>

#### 3. [Add qualifications](#post-create-a-quota) to the survey.
The following 7 qualifications are automatically added to US studies:

 - United States Studies:
  1. `AGE`
  2. `GENDER`
  3. `ZIP`
  4. `STATE`
  5. `ETHNICITY`
  6. `HISPANIC`
  7. `STANDARD_HHI_US`

Any of these qualifications can be modified or removed by [updating a qualification](#put-update-a-qualification) except for `AGE`, which must remain to enforce the US minimum of 13.

In addition to the automatic qualifications, be sure to add qualifications for all termination points found in the client destination user experience as qualifications in Fulcrum . This helps suppliers target their respondents, which in turn lowers the cost of completes.

To streamline the user experience, you should also [include all qualifications on the survey entry link](http://knowledge.fulcrumexchange.com/?p=625). This should reduce the length of interview and improve conversion, further improving pricing.

#### 4. [Create quotas](#post-create-a-quota) for each target group.

#### 5. Set your supplier blend using [Exchange Templates](#exchange-templates).

Surveys fill quickest and most efficiently by simply allowing the Exchange to fill the project in a free market. However, if a specific blend is important to you, you can set price and allocation for groups of suppliers by applying an [Exchange Template](#exchange-templates). In addition, Fulcrum's [Survey Group](#exchange-groups) resource allows you to group suppliers for an individual study on an adhoc basis.

### Phase 4 - Launching and Updating Surveys

Keeping your Fulcrum projects up-to-date is an important part of survey health and maximizing sample delivery. A good integration automatically syncs quotas real-time and closes completed studies in Fulcrum. You should also consider alerting users to poor performing projects for quick resolution.

#### 1. [Update your survey](#put-update-a-survey) status.
When you are ready to launch a survey, simply set `SurveyStatusCode` to `03`. Studies that are complete should be marked with a status of `04`. For a full list of `SurveyStatuses` make the [List Global Definitions](#get-list-global-definitions) call.

#### 2. [Update your quotas](#put-update-a-quota) regularly.
If you have not enabled hash checksums or your users have direct access to Fulcrum, you should reconcile quotas between Fulcrum and your environment every 15 minutes. Otherwise, your quotas should remain in sync with Fulcrum.  In either case, you should ensure that Fulcrum is updated any time a change to quotas is made in your system.

#### 3. Monitor your [survey statistics](#put-update-a-quota) and adjust pricing accordingly.
By monitoring your survey's earnings per click (EPC) through Fulcrum's Survey Statistics resource or more granularly in your own system, you can determine whether the price you are offering for a survey given field specs is the fair market price. A "good" EPC depends on market conditions and the supplier(s) with whom you are working; however, EPCs of $0.10-$0.15 often ensure proper delivery of a survey.
