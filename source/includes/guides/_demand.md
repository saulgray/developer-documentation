## Demand Integration (Basic)
A Fulcrum Demand API integration gives you instant access to millions of human sessions right inside your own application, effectively eliminating additional training requirements, duplication of effort, and overhead associated with scaling. Fulcrum's Demand API also offers in-depth Demand Side Platform features, allowing you to manage hundreds of suppliers on the Fulcrum Exchange while simultaniously controling the exact taregets and quotas you seek.

Before getting started, it's important to note that all testing and development should be done in the [sandbox environment](#environments). Information on environments and other foundational information is available in the [Introduction](#introduction) and should be reviewed before moving on to Phase 1.

### Phase 1 - Mapping
Fulcrum contains numerous objects, structures and options that may either be adopted by the host system or mapped to the host system's existing architecture. The steps below guide you through the key areas that should be mapped or adopted.

#### 1. Store our system [definitions](#definitions) and map them to your system.
These definitions provide human-readable strings that correspond to various object/option IDs in Fulcrum.
#### 2. Store Fulcrum Standard qualification [question texts](#get-list-standard-questions) and [answer options](#get-show-question-options) for countries you operate in.
Qualifications in Fulcrum act as filters to help you find the respondents you’re targeting and quotas allow you to control how many respondents you want. Begin by mapping Fulcrum's most-used qualifications to your system. Below are the top 30 Fulcrum Standard qualifications in the US:
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
 
For a list of top qualificaitons in other countries, [shoot as an email](mailto:support@luc.id). Map as many or as few qualifications as you would like depending on your needs. Fulcrum Standards provide an industry standard for programattic targeting. As such your projects will be more successful if you use all Standards that apply to that particular project's target. To encourage qualification usage, it's usually helpful to ensure that qualifications are easy to find and are searchable on your platform.
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
- Study 3: seperate gender and age
  - Total = 1000
    - Male = 500
    - Female = 500
    - 18-35 = 500
    - 36+ = 500
- Study 4: seperate gender and nested gender and age quotas
  - Total = 1000
    - Male = 500
    - Female = 500
    - Male 18-35 = 250
    - Male 36+ = 250
    - Female 18-35 = 250
    - Female 36+ = 250

### Phase 2 - Creating a Survey

<aside class="notice">Keep in mind that user adoption will be higher with UIs that require the fewest clicks and data input. Leverage information you already have in your database to reduce the number of fields that are asked, and place areas for additional information with regard for the typical user flow.</aside>

Surveys objects are the basis for a project or demographic segment you are seeking. Here are the key steps to creatin a survey in Fulcrum.
#### 1. Determine the [fair market price](#feasibility) of the target demographic.
The Feasibility resource returns pricing data from the Fulcrum Pricing Index (FPI), which represents fair market price for a target given the surveys specs, qualifications, quotas, and time in field. Integrators with consumer users often take the response from this call and add a margin before returning it to the end user (i.e. `FPI Price * 1.3 = Price`)

#### 2. Make the call to [create a survey](#post-create-a-survey) object.
This survey object contains the key settings for the survey such as your quota cost per impression (QCPI), security settings, and links for the destination user experience (survey, user test, etc). Some of the most popular properties integrators give end-users control over are:
 - QuotaCPI: Allows the end-user to set their purchase price. In many cases, integrators will suggest (or command a price) based on the feasibility response.
 - CountryLanguageID: The country-language combination which the survey should be available to. Keep in mind that this will affect certain localized standards. For example, you would want want to use STANDARD_HHI_INT in all countries outside of the United States and STANDARD_HHI_US for `English - United States` and `Spanish - US` projects. Further, you would not want to display the Hispanic nor Ethnicity qualifications outside of the United States.

<aside class="notice">An additional column in your database for earnings-per-click (EPC) can help you track whether yo are still offering a fair market price as your survey fields and specs change. EPC is the revenue per respondent a supplier sends in suppliers and thus the value that the survey provides to the suppliers.</aside>

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

#### 5. Allocations

#### 6. Redirects

Redirects: Below are the redirects that should be added to your client survey to send the respondent back to Fulcrum
> Complete
```plaintext
http://www.samplicio.us/router/ClientCallBack.aspx?RIS=10&RID=xxxxx
```
> Term
```plaintext
http://www.samplicio.us/router/ClientCallBack.aspx?RIS=20&RID=xxxxx
```
> Quality Term / Duplication / Security
```plaintext
http://www.samplicio.us/router/ClientCallBack.aspx?RIS=30&RID=xxxxx
```
> Overquota
```plaintext
Overquota: http://www.samplicio.us/router/ClientCallBack.aspx?RIS=40&RID=xxxxx
```

SHA-1 Encryption: (https://support.lucidhq.com/customer/en/portal/articles/2097928-security-measures-for-controlling-sample)

### Phase 3 - Updating Surveys

### Phase 4 - Advanced Options

SHA-1 Encryption: (https://support.lucidhq.com/customer/en/portal/articles/2097928-security-measures-for-controlling-sample)
