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

> Example Entry to Fulcrum with Supplier's Respondent Data:

```plaintext
http://www.samplicio.us/router/default.aspx?SID=f6c83654-3d4f-4f7c-bef1-2f5097b6ae9c&PID=12345&MID=54321&AGE=35&GENDER=2&ZIP=70117
```

> Example Supplier End Link with Fulcrum's Respondent Data:

```plaintext
http://www.supplierURL.com?status=complete&PID=[%PID%]&MID=[%MID%]&42=[%AGE%]&43=[%GENDER%]&45=[%ZIP%]&47=[%HISPANIC%]&113=[%ETHNICITY%]
```

Fulcrum Standard questions provide an industry standard for programmatic survey targeting. A survey’s qualifications form the pre-screener questions that are presented to each respondent before they leave Fulcrum and enter the client survey.

- Questions and their conditions make up qualifications—the overall type of respondents the buyer is looking for. 
- Conditions are set on a question to form a qualification, which specifies who is allowed into the survey. For example AGE and GENDER are questions. If the client is looking for AGE 18-24 and only Males, those would be conditions.
- A client may not necessarily build quotas off of all qualifications. It’s very important to use both qualifications and quotas when determining whether to send your respondent.
- You can pass respondent demographics on the Fulcrum entry link allowing the respondent to bypass prescreener questions.
- Respondents will also bypass questions they have already answered in Fulcrum. You can include variables in your supplier redirects to capture this valuable demographic data on your respondents as they answer those quesetions in Fulcrum. 
  - Fulcrum will pass back stored demographic data if the respondent has answered that question within the last 30 days. 30 days is the exipration period for all demographic data in Fulcrum.
  - If demographic data is returned on the supplier redirect which you __do not__ have for your panelist, then update your panelist profile with this information to better improve your targeting. 
  - If you already have that demographic information stored, ignore Fulcrum's data and use your own as the source of truth.
  - We recommend including the top 20 qualifications on your return redirects to capture valuable demographic data on your respondents.

#### 4. Understanding Fulcrum Quotas
[Quotas](#quotas) determine how many completes of each type of respondent are allowed into the survey. Quotas are always created off Fulcrum qualifications. 

Fulcrum quotas can be nested, overlapping, or contain only a subset of the qualified respondents. Here are a few examples:

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

- Quotas are distinguished by `SurveyQuotaID` property.
- A respondent qualifies for a quota cell if they fit __all__ of the conditions of the qualifications.
- __All__ quotas a respondent qualifies for __must__ be greater than 0 in order for them to qualify to enter the study. If a respondent fits into any quota which is has 0 completes remaining, the respondent will __term__.
- The logical operator is “OR” within the same quota qualification (i.e. AGE 18 OR 19 OR 20), but AND between quota qualifications (AGE 18 OR 19 or 20 AND Male OR Female)

### Phase 2 - Getting the Offerwall, Qualifications, and Quotas

In this phase, we’ll explain the recommended process to find new Offerwall surveys, and retrieve and store qualifications and quotas in tables locally to be referenced later.

#### 1. Recommended Supply API Call Interval

| API Call                                                      | Ideal Interval (in minutes)    |
|---------------------------------------------------------------|--------------------------------|
| [Show Quotas](#get-show-quotas)                               | 3                              |
| [List Allocated Surveys](#get-list-allocated-surveys)         | 3                              |
| [Show an Allocated Survey](#get-show-an-allocated-survey)     | Project-specific               |
| [Show Qualifications](#get-show-qualifications)               | 3                              |
| [Show Survey Statistics](#get-show-statistics)                | 60                             |
| [List Exchange Surveys](#get-list-exchange-surveys)           | 3                              |
| [List Qualified Respondents](#get-list-qualified-respondents) | 3 (if recontact study type)    |
| [List a Survey’s Groups](#groups)                             | 10 (if in survey group)        |
| [Create a Link](#post-create-a-link)                          | Once                           |
| [Show a Link](#get-show-a-link)                               | Optional                       |
| [List Statistics](#get-list-statistics)                       | Optional                       |
| [Update a Link](#put-update-a-link)                           | Never (unless project-specific)|

#### 2. [List Exchange Surveys](#get-list-exchange-surveys)

The Fulcrum Offerwall is a list of all __live__ studies currently available to you on the Fulcrum Exchange. [List Exchange Surveys](#get-list-exchange-surveys) will return the list of all __live__ surveys on the platform which you do not already have a link against. A survey will only return on this call if there are completes available to you.

Select and filter surveys based on desired criteria (e.g. country, study type, acceptable LOI, and QCPI)

#### 3. [Create a Link](#post-create-a-link)

Once you have identifed a good survey opportuniy, create the entry links. This call will return "live" and "test" links. The "live" link is where you should send your respondents.

<aside class="notice">It's best practice to never put the survey entry link directly in your respondent invite emails as surveys and survey quotas can be closed by the time the respondent clicks. Rather, use a link into your decisioning system and always re-evaluate the best opportunity for your respondent and for you based on earnings per click (EPC) at that time.</aside>

- Fulcrum will automatically use your default supplier redirects. Custom supplier redirects can be included in the payload with this call and the [Update a Link](#put-update-a-link) call.
- We require sending the respondent into Fulcrum with PID equal to the unique panelist ID and recommend sending the MID equal to the supplier's unique identifier for the session.

#### 4. [Show Qualifications](#get-show-qualifications)

Get and store the survey qualifications and conditions in your tables

#### 5. [Show Quotas](#get-show-quotas)

Get and store the survey quotas in your tables. This call will give you exact number of respondents the survey is looking for.

### Phase 3 - Keeping your Survey tables up to date

In this phase we’ll explain how to update your live survey tables. The main goals in this phase are to ensure you’re sending sample only to live surveys and respondents to surveys with relevant open quotas.

#### 1. [List Allocated Surveys](#get-list-allocated-surveys)

This call returns an index of all live surveys where the supplier has an allocation. Your survey update processes should be performed based on the results of this call.

- Update LOI of all surveys.
- Update the country (rarely changes).
- Pause surveys that are live in your system but are not returned on this call. The buyer has paused the survey.
- Set surveys live that are paused in your system but return on this call. The buyers has set this survey back to live.
- If this call returns a survey and you did not create the link via [Create a Link](#post-create-a-link) than you have been given a "targeted" allocation or "OTC" allocation.
  - In these cases the buyer typically creates the entry link for you.
  - Use the [Show an Allocated Survey](#get-show-an-allocated-survey) call to retrieve you entry links and TCPI

#### 2. [Show Qualifications](#get-show-qualifications)

Overwrite stored qualification data for each survey. 

#### 3. [Show Quotas](#get-show-quotas)

Overwrite stored quota data for each survey. Overwrite stored pricing using the QuotaCPI property. QuotaCPI can be stored on the survey level rather than the quota level. Fulcrum does not support quota-level pricing at this time.

### Phase 4 - Yield Management

The next step in the Supply API integration is Yield Management. This is the process of setting business rules and API processes to ensure that high earnings-per-click (EPC) studies receive the most traffic and that sample is not sent studies with an EPC lower than your EPC floor. If a respondent qualifies for multiple opportunities, they should be sent to the one with the highest EPC. The EPC of surveys can fluctuate up and down over the life of the survey depending on numerous factors. EPC = (TrailingConversion*CPI).

__Objective: Earn the most revenue with the least amount of clicks by reviewing survey EPC and ranking live surveys in your tables.__

- Once an hour start with the list of all your live surveys from [List Allocated Surveys](#get-list-allocated-surveys)
- [Show Global/Trailing Survey Statistics](#get-show-statistics) for all live surveys and add/update with a value for each survey in a `Global EPC` column in your tables.
  - The Global scope will return statistics for __all__ traffic sent by __all__ suppliers 
  - Surveys may return with a Global EPC of $0.00 because they have not received any Offerwall traffic or had a complete in the last 12 hours. You should still attempt these studies as you may be there first.
- [Show Supplier/Trailing Survey Statistics](#get-show-statistics) for all live surveys and add/update with a value for each survey in a `Internal EPC` column in your tables.
  - The Supplier scope will return statistics __only__ for entrants sent by the supplier
  - You may also choose to calculate EPC within your system rather than relying on Fulcrum's calcualtion for yoru internal EPC.
- Add a `Functional EPC` column in your tables.
  - The `functional EPC` should be the `internal EPC` if it is non-zero.
  - If the `internal EPC` is zero then set the `functional EPC` to the `global EPC`.
  - If the `global EPC` is zero then set it to your `median EPC` value until your have further information.
- Any survey beneath your desired minimum threshold (which should be below the media EPC value) should be set to inactive. Many suppliers find it useful to create a UI, log, or email alert to the business side to let them know when surveys become inactive in case you want to manually review and override.
- Rank your surveys by `functional EPC`. Since this data will only update once an hour, you should make the calls and process EPC data once an hour.
- Push survey to inactive status if you have sent over 20+ respondents and have not yet received a complete back.
- Please note that the above is more conservative and will tend to cut off surveys early and often. It’s a good thing to remove more chaff, so long as there is sufficient high quality inventory to earn revenue for your respondents. You may want to add in more forgiveness if you are finding too few surveys.

### Phase 5 - Advanced Topics

In this phase we’ll explain how to handle Survey Groups, Recontact Studies, and Custom Qualifications

#### Survey Groups

The [Show an Allocated Survey](#get-show-an-allocated-survey) call returns the property `SurveyGroup`.  This information can be used to avoid sending respondents to a survey that is included in a survey group that contains a survey which they have previously  attempted. Buyers typically remove older surveys from the survey group over time as the lockout period ends and the respondent can then attempt new surveys once again.

Below is recommended process to check and update survey groups every 5 minutes:

1. Make the the [List Exchange Surveys](#get-list-exchange-surveys) and the [Show an Allocated Survey](#get-show-an-allocated-survey) calls
2. Check the property `SurveyGroupExists`. `0` or `1` indicates whether there is a survey group(s) associated with the survey. `0` represents `false` and `1` representing `true`.
3. If `SurveyGroupExists` = `0` then no additional steps are needed as the survey is not in a survey group
4. If `SurveyGroupExists` = `1` then the survey is in a survey group and you should make the [List a Survey’s Groups](#groups) call for that survey.
5. Add the groups's survey number(s) to your survey group table and continue to check that survey number until it is removed from the survey group—the response will be `null`.
6. Do not send the same respondent to any survey in that survey group until you get a `null` response for that survey.


`SurveyGroup` and `SurveyGroupID` on the [List Exchange Surveys](#get-list-exchange-surveys) and the [Show an Allocated Survey](#get-show-an-allocated-survey) calls will now always return null as per June 25th changes. You should no longer use these fields.

#### Recontacts
Buyers often want to recontact respondents that have completed their surveys in order to ask follow-up questions. These surveys are known as recontact studies and have a `StudyTypeID` of 22 in Fulcrum. These studies are unique in that buyers will upload a list of PIDs that the supplier can then use to identify respondents that qualify for the opportunity. All recontact studies will have a unique Qualification, `PIDCheck`, that will terminate PID and supplier combinations that are not in the buyer's PID list.

Below is the API process flow for recontact studies:

1. Make the [List Exchange Surveys](#get-list-exchange-surveys) and [Show an Allocated Survey](#get-show-an-allocated-survey) call as normal.
2. For recontact studies (`StudyTypeID` of 22) make the [List Qualified Respondents](#get-list-qualified-respondents) call as normal to retrieve the specific PIDs the buyer is looking for.
3. Only send those respondents to the study.
4. If PIDCheck returns empty of PIDs, you do not have any qualifying respondents.

#### Custom Qualification
Buyers are now able to choose to expose custom qualifications to suppliers at the survey level. On these studies the [Show Qualifications](#get-show-qualifications) call will return the list of all question IDs for a given study—standards and exposed customs.
The [List Standard Questions](#get-list-standard-questions) call only returns all standard qualifications. Therefore, if a question ID returned via the [Show Qualifications](#get-show-qualifications) call is not in the Standard library, you can assume it is a custom. You can then look up the details on the fly for profiling respondents using the [Show Question Text](#get-show-question-text) call and the [Show Question Options](#get-show-question-options) call.