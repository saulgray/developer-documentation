# Changelog

## 14 Mar 2017

#### Demand API - New Properties

Two properties have been added to the Survey Model:

* `CollectsPII`
* `BidIncidence`

Links to affected calls can be found below:

* [Create a Survey](#post-create-a-survey)
* [Update a Survey](#put-update-a-survey)
* [Show a Survey](#get-show-a-survey)
* [List Surveys By Status](#get-list-surveys-by-status)

#### Supply API - New Properties

A `CollectsPII` property has been added to the `Survey`, `SupplierAllocationSurveys`, and `SupplierAllocationSurvey` models.

Links to affected calls can be found below:

* [List Exchange Surveys](#get-list-exchange-surveys)
* [List Allocated Surveys](#get-list-allocated-surveys)
* [Show an Allocated Survey](#get-show-an-allocated-survey)
* [List Recently Allocated Surveys](#get-list-recently-allocated-surveys)

## 26 Jan 2017

#### Supply API - Survey's Groups

A list of the surveys associated with each survey group is now returned on the call /Supply/v1/Surveys/SurveyGroups/BySurveyNumber/

## 23 Jan 2017

#### Demand API - Exchange Groups

SurveyNumber is no longer required in the payload of the following calls:

* Demand/v1/SupplierGroups/CreateWithSuppliers/
* Demand/v1/SupplierGroups/Create/
* Demand/v1/SupplierGroups/Update/

## 10 Oct 2016

#### Demand API - Reconciliations

A new endpoint has been added for reconciliations: Demand/v1/Surveys/Reconcile/{SurveyNumber}
