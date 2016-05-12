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

### Phase 2 - Getting new Offerwall surveys, Qualifications, and Quotas

In this phase, we’ll explain the recommended process to find new Offerwall surveys, and retrieve and store qualifications and quotas in tables locally to be referenced later.

#### 1. Recommended Supply API Call Frequency

| API Call                                                      | Ideal Frequency (in minutes)   |
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
| [List Statistics](#get-list-statistics)                       | If desired to see all platform live survey stats|
| [Update a Link](#put-update-a-link)                           | Never, unless project specific |

#### 2. [List Exchange Surveys](#get-list-exchange-surveys)

The Fulcrum Offerwall is a list of all __live__ studies currently available to you on the Fulcrum Exchange. [List Exchange Surveys](#get-list-exchange-surveys) will return the list of all __live__ surveys on the platform which you do not already have a link against. A survey will only return on this call if there are completes available to you.

Select and filter surveys based on desired criteria (e.g. country, study type, acceptable LOI, and QCPI)

#### 3. [Create a Link](#post-create-a-link)

Once you have identifed a good survey opportuniy, create the entry links. This call will return "live" and "test" links. The "live" link is where you should send your respondents.

<aside class="notice">It's best practice to never put the survey entry link directly in your respondent invite emails as surveys and survey quotas can be closed by the time the respondent clicks. Rather, use a link into your decisioning system and always select the best opportunity for your respondent and for you based on earnings per click (EPC)</aside>

- This call will also automatically add your default supplier redirects. Custom supplier redirects can be included in the payload with this and the [Update a Link](#put-update-a-link) call.
- We recommend sending the respondent into Fulcrum with PID as the unique panelist ID and the MID as the supplier unique session identifier.

#### 4. [Show Qualifications](#get-show-qualifications)

Get and store the survey qualifications and conditions in your tables

#### 5. [Show Quotas](#get-show-quotas)

Get and store the survey quotas in your tables. This call will give you exact number of respondents the survey is looking for.

<aside class="notice">The returned data from the quotas call can be very big.  Age is represented as a string with each precode by itself.  So it will be 18, 19, 20, 21, 22, 23, 24, 25 for 18-25.  That can create large models if the survey is looking for 18-99, and has multiple age quotas.</aside>

### Phase 3 - Keeping your Survey tables up to date

In this phase we’ll explain how to update your live survey tables. The main goals in this phase are to ensure you’re sending sample only to live surveys and respondents to surveys with open quotas.

#### 1. [List Allocated Surveys](#get-list-allocated-surveys)

This call returns an index of all __LIVE__ surveys where the supplier has an allocation. Your survey update processes should be performed based on the results of this call.

- Update LOI of all surveys
- Update the country (rarely changes)
- Pause surveys that are live in your system but are not returned on this call. The buyer has puased the survey
- Set surveys live that are paused in your system but return on this call. The buyers has set this survey live
- If this call returns a survey and you did not create the link via [Create a Link](#post-create-a-link) than you have been given a "targeted" allocation or "OTC" allocation. In these cases the buyer typically creates the entry link for you.
  - Use the [Show an Allocated Survey](#get-show-an-allocated-survey) call to retrieve you entry links and TCPI

#### 2. [Show Qualifications](#get-show-qualifications)

Overwrite stored qualification date for each survey. 

#### 3. [Show Quotas](#get-show-quotas)

Overwrite store quota data for each survey. Overwrite stored pricing using the QuotaCPI property.

### Phase 4 - Yield Management

The final step in the Supply API integration is Yield Management. This is the process of setting business rules and API processes to ensure high earnings-per-click (EPC) studies receive the most traffic and low EPC studies are removed from sample send. If a respondent qualifies for multiple opportunities they should be sent to the one with the highest EPC. The EPC of surveys can fluctuate up and down over the life of the survey depending on numerous factors. EPC = (TrailingConversion*CPI).

__Objective: Earn the most revenue with the least amount of clicks by reviewing survey EPC and ranking live surveys in your tables__

- Once an hour start with the list of all your live surveys from [List Allocated Surveys](#get-list-allocated-surveys)
- Show Global/Trailing Survey Statistics](#get-show-statistics) for all live surveys and add/update with a value for each survey in a __Global EPC__ column in your tables.
  - The Global scope will return statistics for __all__ traffic sent by __all__ suppliers 
  - Surveys may return with a Global EPC of $0.00 because they have not received any Offerwall traffic + had a complete in the last 12 hours. You should still attempt these studies as you may be there first.
- Show Supplier/Trailing Survey Statistics](#get-show-statistics) for all live surveys and add/update with a value for each survey in a __Internal EPC__ column in your tables.
  - The Supplier scope will return statistics __only__ for entrants sent by the supplier
- Add a __Functional EPC__ column in your tables.
  - The __functional EPC__ should be the __internal EPC__ if it is non-zero.
  - If the __internal EPC__ is zero then set the __functional EPC__ to the __global EPC__
  - If the __global EPC__ is zero then set it to your __median EPC__ value until your have further information (let's say $0.20)
- Any survey beneath your desired minimum threshold (which should be below the media EPC value) should be set to inactive.   - You'll also want to create either a UI or an email alert to the business side to let them know when surveys become inactive in case you want to manually review and override, if they haven’t been alerted already.
- Rank your surveys by __functional EPC__. Since this data will only update once an hour, you only should make the calls and reorder once an hour.
- __Push survey to inactive status if you have sent over 20+ respondents and have not yet received a complete back.__
- Please note that the above is more conservative and will tend to cut off surveys early and often. It’s a good thing to remove more chaff, so long as there is sufficient high quality inventory to earn revenue for your respondents. You may want to add in more forgiveness if you are finding too few surveys.

### Phase 5 - Advanced Topics

In this phase we’ll explain how to handle Survey Groups, Recontact Studies, and Custom Qualifications

####Survey Groups

The [Show an Allocated Survey](#get-show-an-allocated-survey) call returns the property SurveyGroup.  This information can be used to avoid sending respondents to a survey that is included in a survey group that contains a survey which they have previously  attempted. Buyers typically remove older surveys from the survey group over time as the lockout period ends and the respondent can then attempt new surveys once again.

Below is the API process flow to check and update survey groups: (every 5 minutes):

1. Make the the _GET List Exchange Surveys_ and the _GET Show an Allocated Survey_ calls
2. Check the property _SurveyGroupExists_. “0″ or “1″ – indicates whether there is a survey group(s) associated with the survey with “0″ representing false and “1″ representing true
3. If SurveyGroupExists = 0 then no additional steps are needed as the survey is not in a survey group
4. If SurveyGroupExists = 1 then the survey is in a survey group and you should make the _[GET List a Survey’s Groups](http://developer.lucidhq.com/#groups)_ call for that survey
5. Add survey number(s) to your survey group table and continue to check that survey number until null
6. Do not send the same respondent to any survey in that survey group until the original survey number sent to returns null


_NOTE:*SurveyGroup* and *SurveyGroupID on the _GET List Exchange Surveys_ and the _GET Show an Allocated Survey_ calls will now always return null as per June 25th changes. You should no longer use these fields._

We recommended that you run this flow every 5 mins.

#### Recontacts
Buyers often want to recontact respondents that have completed their surveys in order to ask follow-up questions. These surveys are known as recontact studies and have a “StudyTypeID” of 22 in Fulcrum and are unique in that buyers will upload a list of PIDs specifically for each supplier that the supplier can then use to send only those respondents into the recontact study. All recontact studies will have a unique Qualification “PIDCheck” that will contain the PIDs for the supplier.

*Below is the API process flow for recontact studies:*

1. Make the [GET List Exchange Surveys](#get-list-exchange-surveys)and [GET Show an Allocated Survey](#get-show-an-allocated-survey) call as normal
2. For recontact studies (“StudyTypeID” of 22) make the [GET List Qualified Respondents](http://developer.lucidhq.com/#get-list-qualified-respondents)call as normal to retrieve the specific PIDs the buyer is looking for contained in the PIDCheck qual
3. Only send those respondents to the study
4. If PIDCheck returns empty of PIDs then do not send

#### Custom Qualification
Buyers are now able to choose to expose custom qualifications to suppliers at the project level. On these studies the [GET Show Qualifications](http://developer.fulcrumexchange.com/?p=26) call will return the list of all question IDs on a given study – standards and exposed customs.
The [GET List Standard Questions](http://developer.lucidhq.com/#get-list-standard-questions) call only returns all standard qualifications.

Therefore, if a question ID returned via the Qualifications call on a study isn’t in your library, because it doesn’t appear in the AllQuestions call above, you then “know” that it’s an exposed custom. You can then look up the details on the fly for profiling respondents using the [GET Show Question Text](http://developer.lucidhq.com/#get-show-question-text) call and the [GET Show Question Options](http://developer.lucidhq.com/#get-show-question-options) call.










