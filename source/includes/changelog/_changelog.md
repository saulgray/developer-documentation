# Changelog

## 10-22-2015

#### Demand API - Business Units

If BusinessUnitID is passed in as NULL on Survey Create, it will default to the BusinessUnitID of the API user of the account. BusinessUnitID will be required on Survey Update.

#### Deprecated Methods

The following deprecated methods were removed from the Lookup and Supply APIs:

 - Lookup/v1/QuestionLibrary/
  - AllBidQuestions
  - AllBidQuestionOptions
  - BidQuestionById
 - Supply/v1/SupplierLinks/
  - CreateOfferwall
  - CreateOfferwallWithSupplierCode
  - CreateOfferwallWithTrackingUrlTypeCode
  - UpdateRedirectUrlBySupplierLinkSid
