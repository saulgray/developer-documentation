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
#### 4. Understanding Fulcrum Qualifications
Fulcrum Standard qualifications provide an industry standard for programmatic survey targeting. A survey’s qualifications form the pre-screener questions that are presented to each respondent before they leave Fulcrum and enter the client survey. Qualifications and their conditions make up the overall type of respondents the buyer is looking for. Conditions are set on a qualification and specify who is accepted by the qualification. For example AGE and GENDER are qualifications. If the client is looking for AGE 18-24 and only Males, those would be conditions.



#### 3. If your system has a quota system, map your quota structure to Fulcrum's.
Fulcrum quotas can be nested, not nested, overlapping, or contain only a subset of the qualified respondents. Here are a few examples:

- Study 1: only total quota
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

### Phase 2 - Preparing your Survey Environment

#### 1. Write a function to hash a URL and generate a checksum.

> Example key

```plaintext
ZZ6VkORqV25iSWOVb5cwZ03zpns
```

> Example Base URL

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&oenc2=
```

> Example Signature

```plaintext
NPJPxGx/+1vHe0T1q4tt+MyWnQ4=
```
> Example Encoded Signature

```plaintext
NPJPxGx_-1vHe0T1q4tt-MyWnQ4
```

> Example Final URL

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&oenc2=NPJPxGx_-1vHe0T1q4tt-MyWnQ4
```

Fulcrum strongly recommends taking advantage of inbound and outbound URL hashing, which will prevent respondents from manipulating links. Your secret key and variable name configuration can be set or disabled in the Fulcrum UI (`Clients>{Your Account} API_Client>Show Encryption). In order to verify the validity of any Fulcrum outbound connection or generate a hash to match with any Fulcrum inbound connection, you must create a function that computes an RFC 2014-compliant HMAC signature and substitute the following characters:

| Original | Substitute   |
|----------|--------------|
| +        | -            |
| /        | _            |
| =        | empty string |

It's important to note that your base string should include the entire URL up to and including the `&` preceding your encryption variable. If you do not control the destination survey environment, and your client cannot support this type of security, you should skip this step and instead use Verify Callback.

#### 2. Configure your survey end links, commonly referred to as "redirects".

> Complete

```plaintext
http://www.samplicio.us/router/ClientCallBack.aspx?RIS=10&RID={RID}&ienc={hash}
```

> Term

```plaintext
http://www.samplicio.us/router/ClientCallBack.aspx?RIS=20&RID={RID}&ienc={hash}
```

> Quality Term / Duplication / Security

```plaintext
http://www.samplicio.us/router/ClientCallBack.aspx?RIS=30&RID={RID}&ienc={hash}
```

> Overquota

```plaintext
Overquota: http://www.samplicio.us/router/ClientCallBack.aspx?RIS=40&RID={RID}&ienc={hash}
```

At the end of a respondent's experience in your platform, you should send them back to Fulcrum using the end link corresponding to their respective status. This will update the respondent's status in Fulcrum and send them back to their supplier with information on how to be compensated. `RID` is an SID unique to identify the respondent and session. You must include `&RID=[%RID%]` on the `ClientSurveyLiveURL` property of your `Survey` object referenced in Phase 3 in order to capture the respondent's identifier in your system on entry and include it on the redirect when they return to Fulcrum.

If you have opted not to generate checksums for your links, you should set the `IsVerifyCallBack` property of your `Survey` object to `True` and append `&RISN=[%RSFN%]` to the `ClientSurveyLiveURL` for storage with RID on respondent entry. `RISN` should be appended to the Complete redirect only. You should not include `&ienc={hash}` if you have opted not to generate checksums for links. 

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
