# Changelog

## 14 Mar 2017

#### Demand API - New Properties

Two properties have been added to the Survey Model:

* `CollectsPII`
* `BidIncidence`

#### Supply API - Survey's Groups

A `CollectsPII` property has been added to the `Survey`, `SupplierAllocationSurveys`, and `SupplierAllocationSurvey` models.

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
