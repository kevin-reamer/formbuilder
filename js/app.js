$(function(){
  var form = {
  "title": "Source Opening Communication",
  "version": "1.0.0",
  "form-body": {
    "paginated": true,
    "pagination-definition": [[1,2,3,4],[5,6,7,8,9,10,11,12,13,14,15,16],[17,18,19,20,21,22,23,24,25,26,27,28,29,30]],
    "sections": [
      {
        "title": "Classification",
        "fields-sections": [
          {
            "index": 1,
            "title": "Overall Document Classification",
            "name": "soc-overall_document_classification",
            "type": "select",
            "required": true,
            "options": [
              ""
            ]
          }
        ],
        "section-index": 1,
        "paginated": false
      },
      {
        "title": "Administrative",
        "fields-sections": [],
        "section-index": 2,
        "paginated": false
      },
      {
        "title": "Previously Open",
        "fields-sections": [],
        "section-index": 3,
        "paginated": false
      },
      {
        "title": "Legacy CHS Guidance",
        "fields-sections": [
          {
            "index": 2,
            "title": "Legacy CHS Guidance",
            "name": "soc-legacy_chs_guidance",
            "type": "text-label",
            "label": "Note: If this is a reopening of a Delta CHS please discontinue this form and contact your CFR to have the previous S number reassigned to you."
          }
        ],
        "section-index": 4,
        "paginated": false
      },
      {
        "title": "Legacy CHS",
        "fields-sections": [
          {
            "index": 3,
            "title": "Legacy CHS",
            "name": "soc-legacy_chs",
            "type": "yes/no",
            "required": true,
            "label": "Is this a CHS who was previously opened in ACS and is now being reopened in Delta?"
          },
          {
            "index": 4,
            "title": "Most Recent Opening Date",
            "name": "soc-most_recent_opening_date",
            "type": "date",
            "label": "Most Recent Legacy Opening Date in ACS",
            "required": true,
            "rules": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "3",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 5,
            "title": "ACS File Number",
            "name": "soc-acs_file_number",
            "type": "input",
            "label": "ACS File Number",
            "required": true,
            "rules": [
              "limit-25"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "3",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 6,
            "title": "Legacy Symbol Number",
            "name": "soc-legacy_symbol_number",
            "type": "input",
            "label": "Legacy Symbol Number",
            "required": true,
            "rules": [
              "limit-25"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "3",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 7,
            "title": "CHS Closed for Cause",
            "name": "soc-chs_closed_for_cause",
            "type": "yes/no",
            "required": true,
            "label": "Was this CHS closed for cause?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "3",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 8,
            "title": "CHS Closed for Cause Warning",
            "name": "soc-chs_closed_for_cause_warning",
            "type": "text-label",
            "label": "If you are reopening a CHS that has previously been closed for cause, SAC and AD of the DI approval is required prior to reopening and operating the CHS. It is also mandatory to conduct Level 1 or Level 2 Operational Testing before tasking the CHS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "7",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 9,
            "title": "Justification for Opening",
            "name": "soc-justification_for_opening",
            "type": "input",
            "label": "Provide justification for attempted opening",
            "required": true,
            "rules": [
              "limit-2500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "7",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 10,
            "title": "Opened three or more times",
            "name": "soc-opened_three_or_more_times",
            "type": "yes/no",
            "required": true,
            "label": "Has the CHS been opened three or more times?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "3",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 11,
            "title": "Co-Case Agent",
            "name": "soc-co_case_agent",
            "type": "tree",
            "required": true
          }
        ],
        "section-index": 5,
        "paginated": false
      },
      {
        "title": "Payment Name",
        "fields-sections": [
          {
            "index": 12,
            "title": "Payment Name",
            "name": "soc-payment_name",
            "type": "input",
            "label": "Payment Name",
            "required": true,
            "rules": [
              "limit-50"
            ]
          }
        ],
        "section-index": 6,
        "paginated": false
      },
      {
        "title": "Code Name",
        "fields-sections": [
          {
            "index": 13,
            "title": "Code Name Notice",
            "name": "soc-code_name_notice",
            "type": "text-label",
            "label": "A Code Name is required for Double Agents, Non Double Agents in Joint Operations, Defectors, Recruitments-in-Place, or unusually sensitive CHSs."
          },
          {
            "index": 14,
            "title": "Request Code Name",
            "name": "soc-request_code_name",
            "type": "yes/no",
            "required": true,
            "label": "Request a Code Name to be assigned by HMU?"
          },
          {
            "index": 15,
            "title": "HMU Lead Notice",
            "name": "soc-hmu_lead_notice",
            "type": "text-label",
            "label": "HMU will be notified regarding the request for a Code Name upon approval.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "14",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 16,
            "title": "Code Name",
            "name": "soc-code_name",
            "type": "input",
            "label": "Previously Assigned Code Name",
            "required": false,
            "rules": [
              "limit-50"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "14",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 7,
        "paginated": false
      },
      {
        "title": "Agency Responsible for Bringing CHS",
        "fields-sections": [
          {
            "index": 17,
            "title": "CHS Coming to the Attention of the FBI",
            "name": "soc-chs_coming_to_the_attention_of_the_fbi",
            "type": "select",
            "required": true,
            "options": [
              "Brought to the FBI by another CHS",
              "Brought to the FBI by a non-FBI agency",
              "Recruited",
              "Result of a Source Identification Package (SIP)",
              "Subject of a previous/current investigation",
              "Walk-in",
              "Other",
            ]
          },
          {
            "index": 18,
            "title": "CHS Coming to the Attention of the FBI - Other",
            "name": "soc-chs_coming_to_the_attention_of_the_fbi_other",
            "type": "input",
            "label": "How did the CHS come to the attention of the FBI?",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "17",
                    "selection": "other"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 19,
            "title": "CHS Coming to the Attention of the FBI - Non-FBI Agency",
            "name": "soc-chs_coming_to_the_attention_of_the_fbi_non_fbi_agency",
            "type": "select",
            "required": true,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "17",
                    "selection": "Brought to the FBI by a non-FBI agency"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 20,
            "title": "Other Agency",
            "name": "soc-other_agency",
            "type": "input",
            "label": "Other Agency Name",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "19",
                    "selection": "Other"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 8,
        "paginated": false
      },
      {
        "title": "Ever Acted as a CHS",
        "fields-sections": [
          {
            "index": 21,
            "title": "Previously Acted as a CHS",
            "name": "soc-previously_acted_as_a_chs",
            "type": "yes/no",
            "required": true,
            "label": "Has the CHS ever acted as a CHS for any LE/IC agency?  If so, provide the name of the agency."
          },
          {
            "index": 22,
            "title": "Agency - Acted",
            "name": "soc-agency_acted",
            "type": "select",
            "required": true,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "21",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 23,
            "title": "Other Agency - Acted",
            "name": "soc-other_agency_acted",
            "type": "input",
            "label": "Other Agency",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "22",
                    "selection": "Other"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 24,
            "title": "Jointly Utilized with another LE/IC Agency",
            "name": "soc-jointly_utilized_with_another_le_ic_agency",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS currently being jointly utilized with a LE/IC Agency?  If so, name the agency."
          },
          {
            "index": 25,
            "title": "Agency - Joint",
            "name": "soc-agency_joint",
            "type": "select",
            "required": true,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "24",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 26,
            "title": "Other Agency - Joint",
            "name": "soc-other_agency_joint",
            "type": "input",
            "label": "Other",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "25",
                    "selection": "Other"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 27,
            "title": "Handler Name",
            "name": "soc-handler_name",
            "type": "text-label",
            "label": "Name of Joint Handler",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "24",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 28,
            "title": "Handler Last Name",
            "name": "soc-handler_last_name",
            "type": "input",
            "label": "Last Name",
            "required": true,
            "rules": [
              "limit-50"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "24",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 29,
            "title": "Handler First Name",
            "name": "soc-handler_first_name",
            "type": "input",
            "label": "First Name",
            "required": true,
            "rules": [
              "limit-50"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "24",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 30,
            "title": "Handler Middle Name",
            "name": "soc-handler_middle_name",
            "type": "input",
            "label": "Middle Name",
            "required": true,
            "rules": [
              "limit-50"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "24",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 9,
        "paginated": false
      },
      {
        "title": "Utilized Jointly",
        "fields-sections": [
          {
            "index": 31,
            "title": "Jointly Utilized with another FBI Division",
            "name": "soc-jointly_utilized_with_another_fbi_division",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS currently being utilized with another field office?  If so, name the office."
          },
          {
            "index": 32,
            "title": "Field Office/Division",
            "name": "soc-field_office_division",
            "type": "select",
            "required": true,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "31",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 33,
            "title": "Other Field Office/Division",
            "name": "soc-other_field_office_division",
            "type": "input",
            "label": "Other",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "32",
                    "selection": "Other"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 10,
        "paginated": false
      },
      {
        "title": "Foreign Intelligence Service",
        "fields-sections": [
          {
            "index": 34,
            "title": "Affiliation with Foreign Intelligence Service",
            "name": "soc-affiliation_with_foreign_intelligence_service",
            "type": "yes/no",
            "required": true,
            "label": "Has the CHS ever been affiliated with a foreign intelligence service, known terrorist group, or criminal organization?"
          },
          {
            "index": 35,
            "title": "Foreign Intelligence Service Types",
            "name": "soc-foreign_intelligence_service_types",
            "type": "radio",
            "required": true,
            "options": [
              "Foreign Intelligence Servivce",
              "Known terrorist group",
              "Criminal organization"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "34",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 36,
            "title": "Foreign Intelligence Service Explanation",
            "name": "soc-foreign_intelligence_service_explanation",
            "type": "input",
            "label": "If yes, explain",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "34",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 11,
        "paginated": false
      },
      {
        "title": "Relationships",
        "fields-sections": [
          {
            "index": 37,
            "title": "FBI Relationships",
            "name": "soc-fbi_relationships",
            "type": "text-label",
            "label": "Identify any type of relationship with any FBI employee, other than being opened as a CHS (ex. brother, mother, friend, business partner, etc.)."
          },
          {
            "index": 38,
            "title": "FBI Relationship Last Name",
            "name": "soc-fbi_relationship_last_name",
            "type": "input",
            "label": "Last Name",
            "required": false,
            "rules": [
              "limit-50"
            ]
          },
          {
            "index": 39,
            "title": "FBI Relationship First Name",
            "name": "soc-fbi_relationship_first_name",
            "type": "input",
            "label": "First Name",
            "required": false,
            "rules": [
              "limit-50"
            ]
          },
          {
            "index": 40,
            "title": "FBI Relationship Middle Name",
            "name": "soc-fbi_relationship_middle_name",
            "type": "input",
            "label": "Middle Name",
            "required": false,
            "rules": [
              "limit-50"
            ]
          },
          {
            "index": 41,
            "title": "FBI Relationship Suffix Name",
            "name": "soc-fbi_relationship_suffix_name",
            "type": "select",
            "label": "Suffix",
            "required": false,
            "options": [
              ""
            ]
          },
          {
            "index": 42,
            "title": "FBI Relationship",
            "name": "soc-fbi_relationship",
            "type": "input",
            "label": "Relationship",
            "required": false,
            "rules": [
              "limit-50"
            ]
          }
        ],
        "section-index": 12,
        "paginated": false
      },
      {
        "title": "Federal Prosecuting Office",
        "fields-sections": [
          {
            "index": 43,
            "title": "Federal Prosecuting Office Participation",
            "name": "soc-federal_prosecuting_office_participation",
            "type": "radio",
            "label": "If a Federal Prosecuting Office (FPO) is participating in the conduct of the investigation utilizing the CHS, has the FPO attorney been notified?",
            "required": true,
            "options": [
              "Yes",
              "No",
              "N/A"
            ]
          },
          {
            "index": 44,
            "title": "FPO Attorney",
            "name": "soc-fpo_attorney",
            "type": "input",
            "label": "FPO Attorney",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "43",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 45,
            "title": "FPO Notification Date",
            "name": "soc-fpo_notification_date",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "43",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 13,
        "paginated": false
      },
      {
        "title": "Electronic Communication",
        "fields-sections": [
          {
            "index": 47,
            "title": "Electronic Communication",
            "name": "soc-electronic_communication",
            "type": "yes/no",
            "required": true,
            "label": "Do you intend to use electronic communication with the CHS (email, text, VOIP, etc) domestically?"
          },
          {
            "index": 48,
            "title": "Electronic Communication Message",
            "name": "soc-electronic_communication_message",
            "type": "text-label",
            "label": "Use of electronic communication is discouraged because these methods are easily intercepted and can compromise the CHS. Use of social networking sites (including but not limited to Facebook, LinkedIn, and Twitter) for communication with the CHS is PROHIBITED.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "47",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 15,
        "paginated": false
      },
      {
        "title": "Identifying Data",
        "fields-sections": [
          {
            "index": 49,
            "title": "Identifying Data - Last Name",
            "name": "soc-identifying_data_last_name",
            "type": "input",
            "label": "Last Name",
            "required": true,
            "rules": [
              "limit-50"
            ]
          },
          {
            "index": 50,
            "title": "Identifying Data - First Name",
            "name": "soc-identifying_data_first_name",
            "type": "input",
            "label": "First Name",
            "required": true,
            "rules": [
              "limit-50"
            ]
          },
          {
            "index": 51,
            "title": "Identifying Data - Middle Name",
            "name": "soc-identifying_data_middle_name",
            "type": "input",
            "label": "Middle Name",
            "required": true,
            "rules": [
              "limit-50"
            ]
          },
          {
            "index": 52,
            "title": "Identifying Data - Suffix",
            "name": "soc-identifying_data_suffix",
            "type": "select",
            "label": "Suffix",
            "required": true,
            "options": [
              ""
            ]
          },
          {
            "index": 53,
            "title": "Source's Date of Birth",
            "name": "soc-source_s_date_of_birth",
            "type": "date",
            "label": "",
            "required": true,
            "rules": [
              "no-future-date"
            ]
          },
          {
            "index": 54,
            "title": "Source's Age",
            "name": "soc-source_s_age",
            "type": "text-label",
            "label": "", //current date - date of birth
          },
          {
            "index": 55,
            "title": "Identifying Numbers",
            "name": "soc-identifying_numbers",
            "type": "select-add",
            "required": false,
            "options": [
              "Driver's License Number",
              "FBI Number",
              "NADDIS Number",
              "Passport Number",
              "Professional License Number",
              "Social Security Number",
              "Other"
            ],
            "fields": [
              {
                "index": 56,
                "title": "Driver's License Number",
                "name": "soc-driver_s_license_number",
                "type": "input",
                "label": "Number",
                "required": false,
                "rules": [
                  "limit-50"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Driver's License Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 57,
                "title": "Driver's License Date Issued",
                "name": "soc-driver_s_license_date_issued",
                "type": "date",
                "label": "Date Issued",
                "required": false,
                "rules": [
                  "no-future-date"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Driver's License Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 58,
                "title": "Driver's License Expiration Date",
                "name": "soc-driver_s_license_expiration_date",
                "type": "date",
                "label": "Expiration Date",
                "required": false,
                "rules": [
                  "no-past-date"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Driver's License Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 59,
                "title": "Driver's License Issuing Country",
                "name": "soc-driver_s_license_issuing_country",
                "type": "select",
                "label": "Issuing Country",
                "required": false,
                "options": [
                  ""
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Driver's License Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 60,
                "title": "Driver's License Issuing State",
                "name": "soc-driver_s_license_issuing_state",
                "type": "select",
                "label": "Issuing State",
                "required": false,
                "options": [
                  ""
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Driver's License Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 61,
                "title": "Endorsement/Class",
                "name": "soc-endorsement_class",
                "type": "input",
                "label": "Endorsement/Class",
                "required": false,
                "rules": [
                  "limit-50"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Driver's License Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 62,
                "title": "FBI Number",
                "name": "soc-fbi_number",
                "type": "input",
                "label": "Number",
                "required": false,
                "rules": [
                  "limit-12"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "FBI Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 63,
                "title": "NADDIS Number",
                "name": "soc-naddis_number",
                "type": "input",
                "label": "Number",
                "required": false,
                "rules": [
                  "limit-50"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "NADDIS Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 64,
                "title": "Passport Number",
                "name": "soc-passport_number",
                "type": "input",
                "label": "Number",
                "required": false,
                "rules": [
                  "limit-50"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Passport Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 65,
                "title": "Passport Date Issued",
                "name": "soc-passport_date_issued",
                "type": "date",
                "label": "Date Issued",
                "required": false,
                "rules": [
                  "no-future-date"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Passport Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 66,
                "title": "Passport Expiration Date",
                "name": "soc-passport_expiration_date",
                "type": "date",
                "label": "Expiration Date",
                "required": false,
                "rules": [
                  "no-past-date"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Passport Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 67,
                "title": "Passport Issuing Country",
                "name": "soc-passport_issuing_country",
                "type": "select",
                "required": false,
                "options": [
                  ""
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Passport Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 68,
                "title": "Professional License Number",
                "name": "soc-professional_license_number",
                "type": "input",
                "label": "Number",
                "required": false,
                "rules": [
                  "limit-50"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Professional License Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 69,
                "title": "Professional License Description",
                "name": "soc-professional_license_description",
                "type": "input",
                "label": "Description (e.g. pilot number, etc.)",
                "required": false,
                "rules": [
                  "limit-50"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Professional License Number"
                      }
                    ],
                    "type": ""
                  }
                }
              },
              {
                "index": 70,
                "title": "Social Security Number",
                "name": "soc-social_security_number",
                "type": "number",
                "label": "Number",
                "required": false,
                "rules": [
                  "limit-9"
                ],
                "conditions": {
                  "if": {
                    "fields": [
                      {
                        "index": "55",
                        "selection": "Social Security Number"
                      }
                    ],
                    "type": ""
                  }
                }
              }
            ]
          },
          {
            "index": 71,
            "title": "Aliases",
            "name": "soc-aliases",
            "type": "table",
            "label": "Aliases",
            "required": false,
            "columns": [
              {
                "index": 72,
                "title": "Alias - Last Name",
                "name": "soc-alias_last_name",
                "type": "input",
                "label": "Last Name",
                "required": false,
                "rules": [
                  "limit-50"
                ]
              },
              {
                "index": 73,
                "title": "Alias - First Name",
                "name": "soc-alias_first_name",
                "type": "input",
                "label": "First Name",
                "required": false,
                "rules": [
                  "limit-50"
                ]
              },
              {
                "index": 74,
                "title": "Alias - Middle Name",
                "name": "soc-alias_middle_name",
                "type": "input",
                "label": "Middle Name",
                "required": false,
                "rules": [
                  "limit-50"
                ]
              },
              {
                "index": 75,
                "title": "Alias - Suffix",
                "name": "soc-alias_suffix",
                "type": "select",
                "label": "Suffix",
                "required": false,
                "options": [
                  ""
                ]
              }
            ]
          },
          {
            "index": 76,
            "title": "Aliases Dates of Birth",
            "name": "soc-aliases_dates_of_birth",
            "type": "table",
            "label": "Alias Dates of Birth",
            "required": true,
            "columns": [
              {
                "index": 77,
                "title": "Alias - Date of Birth",
                "name": "soc-alias_date_of_birth",
                "type": "date",
                "label": "DOB",
                "required": true,
                "rules": [
                  "no-future-date"
                ]
              }
            ]
          },
          {
            "index": 78,
            "title": "Aliases Social Security Numbers",
            "name": "soc-aliases_social_security_numbers",
            "type": "table",
            "label": "Alias Social Security Number(s)",
            "required": true,
            "columns": [
              {
                "index": 79,
                "title": "Alias - Social Security Number",
                "name": "soc-alias_social_security_number",
                "type": "number",
                "label": "Number",
                "required": true,
                "rules": [
                  "limit-9"
                ]
              }
            ]
          },
          {
            "index": 80,
            "title": "Place of Birth - Country",
            "name": "soc-place_of_birth_country",
            "type": "select",
            "label": "Country",
            "required": true,
            "options": [
              ""
            ]
          },
          {
            "index": 81,
            "title": "Place of Birth - State/Territory",
            "name": "soc-place_of_birth_state_territory",
            "type": "select",
            "label": "State/Territory",
            "required": true,
            "options": [
              ""
            ]
          },
          {
            "index": 82,
            "title": "Place of Birth - City",
            "name": "soc-place_of_birth_city",
            "type": "input",
            "label": "City",
            "required": true,
            "rules": [
              "limit-50"
            ]
          },
          {
            "index": 83,
            "title": "Citizenship - Country",
            "name": "soc-citizenship_country",
            "type": "select",
            "label": "Country",
            "required": true,
            "options": [
              ""
            ]
          },
          {
            "index": 84,
            "title": "Lead to FIMU Message - Citizenship",
            "name": "soc-lead_to_fimu_message_citizenship",
            "type": "text-label",
            "label": "FIMU will be notified  to contact the appropriate legat and substantive unit.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "83",
                    "selection": "Australia"
                  },
                  {
                    "index": "83",
                    "selection": "Canada"
                  },
                  {
                    "index": "83",
                    "selection": "United Kingdom"
                  },
                  {
                    "index": "83",
                    "selection": "New Zealand"
                  }
                ],
                "type": "XOR"
              }
            }
          },
          {
            "index": 85,
            "title": "Dual Citizenship",
            "name": "soc-dual_citizenship",
            "type": "yes/no",
            "required": true,
            "label": "Does the CHS have dual citizenship?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "83",
                    "selection": "null"
                  }
                ],
                "type": "NOT"
              }
            }
          },
          {
            "index": 86,
            "title": "Dual Citizenship - Country",
            "name": "soc-dual_citizenship_country",
            "type": "select",
            "required": true,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "85",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 87,
            "title": "Lead to FIMU Message - Dual Citizenship",
            "name": "soc-lead_to_fimu_message_dual_citizenship",
            "type": "text-label",
            "label": "FIMU will be notified to contact the appropriate legat and substantive unit.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "86",
                    "selection": "Australia"
                  },
                  {
                    "index": "86",
                    "selection": "Canada"
                  },
                  {
                    "index": "86",
                    "selection": "United Kingdom"
                  },
                  {
                    "index": "86",
                    "selection": "New Zealand"
                  }
                ],
                "type": "XOR"
              }
            }
          },
          {
            "index": 88,
            "title": "Naturalization Date",
            "name": "soc-naturalization_date",
            "type": "date",
            "label": "Naturalization Date",
            "required": false,
            "rules": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "80",
                    "selection": "United States"
                  },
                  {
                    "index": "83",
                    "selection": "United States"
                  },
                  {
                    "index": "86",
                    "selection": "United States"
                  }
                ],
                "type": "XOR"
              }
            }
          },
          {
            "index": 89,
            "title": "Naturalization Certification",
            "name": "soc-naturalization_certification",
            "type": "input",
            "label": "Naturalization Certificate Number",
            "required": false,
            "rules": [
              "limit-50"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "80",
                    "selection": "United States"
                  },
                  {
                    "index": "83",
                    "selection": "United States"
                  },
                  {
                    "index": "86",
                    "selection": "United States"
                  }
                ],
                "type": "XOR"
              }
            }
          },
          {
            "index": 90,
            "title": "Naturalization Location - City",
            "name": "soc-naturalization_location_city",
            "type": "input",
            "label": "City",
            "required": false,
            "rules": [
              "limit-50"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "80",
                    "selection": "United States"
                  },
                  {
                    "index": "83",
                    "selection": "United States"
                  },
                  {
                    "index": "86",
                    "selection": "United States"
                  }
                ],
                "type": "XOR"
              }
            }
          },
          {
            "index": 91,
            "title": "Naturalization Location - State",
            "name": "soc-naturalization_location_state",
            "type": "select",
            "label": "State",
            "required": false,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "80",
                    "selection": "United States"
                  },
                  {
                    "index": "83",
                    "selection": "United States"
                  },
                  {
                    "index": "86",
                    "selection": "United States"
                  }
                ],
                "type": "XOR"
              }
            }
          },
          {
            "index": 92,
            "title": "Alien Status",
            "name": "soc-alien_status",
            "type": "select",
            "label": "Alien Status, if applicable",
            "required": false,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "80",
                    "selection": "United States"
                  },
                  {
                    "index": "83",
                    "selection": "United States"
                  },
                  {
                    "index": "86",
                    "selection": "United States"
                  }
                ],
                "type": "NOT XOR"
              }
            }
          },
          {
            "index": 93,
            "title": "Alien Status - Details",
            "name": "soc-alien_status_details",
            "type": "text-label",
            "label": "Status Description: " //followed by details column entry from where alien status = alien status if applicable
          },
          {
            "index": 94,
            "title": "Illegal Alien Message",
            "name": "soc-illegal_alien_message",
            "type": "text-label",
            "label": "A request to adjust the CHS’s status is required within 90 days from opening the CHS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "92",
                    "selection": "Undocumented"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 95,
            "title": "Alien Registration Number",
            "name": "soc-alien_registration_number",
            "type": "input",
            "label": "Alien Registration Number",
            "required": false,
            "rules": [
              "limit-10"
            ]
          },
          {
            "index": 96,
            "title": "Alien Registration - Date Issued",
            "name": "soc-alien_registration_date_issued",
            "type": "date",
            "label": "Date Issued",
            "required": false,
            "rules": [
              "no-future-date"
            ]
          },
          {
            "index": 97,
            "title": "Alien Registration - Date of Expiration",
            "name": "soc-alien_registration_date_of_expiration",
            "type": "date",
            "label": "Date of Expiration",
            "required": false,
            "rules": [
              "no-past-date"
            ]
          },
          {
            "index": 98,
            "title": "Residences",
            "name": "soc-residences",
            "type": "table",
            "label": "Residence(s)",
            "required": false,
            "columns": [
              {
                "index": 99,
                "title": "Residences - Address",
                "name": "soc-residences_address",
                "type": "address",
                "required": false
              },
              {
                "index": 100,
                "title": "Residences - Current Address Indicator",
                "name": "soc-residences_current_address_indicator",
                "type": "checkbox",
                "label": "Current",
                "required": false,
                "default": false
              },
              {
                "index": 101,
                "title": "Residences - From Date",
                "name": "soc-residences_from_date",
                "type": "date",
                "label": "From",
                "required": false,
                "rules": [
                  "no-future-date",
                  "not-after-102"
                ]
              },
              {
                "index": 102,
                "title": "Residences - To Date",
                "name": "soc-residences_to_date",
                "type": "date",
                "label": "To",
                "required": false,
                "rules": [
                  "no-future-date",
                  "not-before-101"
                ]
              }
            ]
          },
          {
            "index": 103,
            "title": "Personal Contact Numbers",
            "name": "soc-personal_contact_numbers",
            "type": "table",
            "label": "Personal Contact Numbers (For work related contact numbers, see occupation section below)",
            "required": false,
            "columns": [
              {
                "index": 104,
                "title": "Phone Number - Domestic/International",
                "name": "soc-phone_number_domestic_international",
                "type": "radio",
                "label": "Phone Number",
                "required": false,
                "options": [
                  "Domestic",
                  "International"
                ]
              },
              {
                "index": 105,
                "title": "Phone Number - Number",
                "name": "soc-phone_number_number",
                "type": "input",
                "label": "Number (Including area or country code, as applicable)",
                "required": false,
                "rules": [
                  "limit-25"
                ]
              },
              {
                "index": 106,
                "title": "Phone Number - Type",
                "name": "soc-phone_number_type",
                "type": "select",
                "label": "Number Type",
                "required": false,
                "options": [
                  ""
                ]
              }
            ]
          },
          {
            "index": 107,
            "title": "Email Addresses",
            "name": "soc-email_addresses",
            "type": "table",
            "required": false,
            "columns": [
              {
                "index": 108,
                "title": "Email Address",
                "name": "soc-email_address",
                "type": "input",
                "label": "Email",
                "required": false,
                "rules": [
                  "limit-200"
                ]
              }
            ]
          },
          {
            "index": 109,
            "title": "Occupations",
            "name": "soc-occupations",
            "type": "table",
            "required": false,
            "columns": [
              {
                "index": 110,
                "title": "Occupation - Employer",
                "name": "soc-occupation_employer",
                "type": "input",
                "label": "Employer",
                "required": false,
                "rules": [
                  "limit-50"
                ]
              },
              {
                "index": 111,
                "title": "Occupation - Address",
                "name": "soc-occupation_address",
                "type": "address",
                "required": false
              },
              {
                "index": 112,
                "title": "Occupation - Phone Number - Domestic/International",
                "name": "soc-occupation_phone_number_domestic_international",
                "type": "radio",
                "label": "Phone Number",
                "required": false,
                "options": [
                  "Domestic",
                  "International"
                ]
              },
              {
                "index": 113,
                "title": "Occupation - Phone Number - Number",
                "name": "soc-occupation_phone_number_number",
                "type": "input",
                "label": "Number (Including area or country code, as applicable)",
                "required": false,
                "rules": [
                  "limit-25"
                ]
              },
              {
                "index": 114,
                "title": "Occupation - Phone Number - Type",
                "name": "soc-occupation_phone_number_type",
                "type": "select",
                "label": "Number Type",
                "required": false,
                "options": [
                  ""
                ]
              },
              {
                "index": 115,
                "title": "Occupation - Job Title",
                "name": "soc-occupation_job_title",
                "type": "input",
                "label": "Job Title",
                "required": false,
                "rules": [
                  "limit-50"
                ]
              },
              {
                "index": 116,
                "title": "Occupation - Nature",
                "name": "soc-occupation_nature",
                "type": "input",
                "label": "Nature of job, if known",
                "required": false,
                "rules": [
                  "limit-"
                ]
              },
              {
                "index": 117,
                "title": "Occupation - Current",
                "name": "soc-occupation_current",
                "type": "checkbox",
                "label": "Current",
                "required": false,
                "default": false
              },
              {
                "index": 118,
                "title": "Occupation - Start Date",
                "name": "soc-occupation_start_date",
                "type": "date",
                "label": "Start Date",
                "required": false,
                "rules": [
                  "no-future-date",
                  "not-after-119"
                ]
              },
              {
                "index": 119,
                "title": "Occupation - End Date",
                "name": "soc-occupation_end_date",
                "type": "date",
                "label": "End Date",
                "required": false,
                "rules": [
                  "no-future-date",
                  "not-before-118"
                ]
              }
            ]
          }
        ],
        "section-index": 16,
        "paginated": false
      },
      {
        "title": "Characteristics",
        "fields-sections": [
          {
            "index": 120,
            "title": "Sex",
            "name": "soc-sex",
            "type": "select",
            "label": "Sex",
            "required": true,
            "options": [
              "Male",
              "Female"
            ]
          },
          {
            "index": 121,
            "title": "Height - Feet",
            "name": "soc-height_feet",
            "type": "select",
            "label": "Feet",
            "required": false,
            "options": [
              "2", "3", "4", "5", "6", "7", "8"
            ]
          },
          {
            "index": 122,
            "title": "Height - Inches",
            "name": "soc-height_inches",
            "type": "select",
            "label": "Inches",
            "required": false,
            "options": [
              "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
            ]
          },
          {
            "index": 123,
            "title": "Weight",
            "name": "soc-weight",
            "type": "number",
            "label": "",
            "required": false,
            "rules": [
              "limit-3"
            ]
          },
          {
            "index": 124,
            "title": "Hair Color",
            "name": "soc-hair_color",
            "type": "select",
            "required": false,
            "options": [
              ""
            ]
          },
          {
            "index": 125,
            "title": "Eye Color",
            "name": "soc-eye_color",
            "type": "select",
            "required": false,
            "options": [
              ""
            ]
          },
          {
            "index": 126,
            "title": "Race",
            "name": "soc-race",
            "type": "select",
            "required": false,
            "options": [
              ""
            ]
          },
          {
            "index": 127,
            "title": "Scars, Marks, and Tattoos",
            "name": "soc-scars_marks_and_tattoos",
            "type": "input",
            "label": "",
            "required": false,
            "rules": [
              "limit-200"
            ]
          }
        ],
        "section-index": 17,
        "paginated": false
      },
      {
        "title": "Photograph",
        "fields-sections": [
          {
            "index": 128,
            "title": "Photograph",
            "name": "soc-photograph",
            "type": "yes/no",
            "required": true,
            "label": "Is a photograph maintained in the file?"
          },
          {
            "index": 129,
            "title": "Photograph Attachment",
            "name": "soc-photograph_attachment",
            "type": "attachments",
            "required": true,
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "128",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 18,
        "paginated": false
      },
      {
        "title": "Access",
        "fields-sections": [
          {
            "index": 130,
            "title": "Information Access Explanation",
            "name": "soc-information_access_explanation",
            "type": "input",
            "label": "How does the CHS have access to the information?",
            "required": true,
            "rules": [
              "limit-5000"
            ]
          }
        ],
        "section-index": 19,
        "paginated": false
      },
      {
        "title": "Motivations",
        "fields-sections": [
          {
            "index": 131,
            "title": "Motivations",
            "name": "soc-motivations",
            "type": "input",
            "label": "Identify and explain all likely motivations (revenge, monetary compensation, patriotism/ideology, immigration benefits, etc.) for providing information, including whether the CHS has a plea agreement with, or is seeking consideration from, any prosecutor’s office.  List any benefits, and their terms, given to a CHS by the FPO or any other law enforcement agency (if known after exercising reasonable efforts)",
            "required": true,
            "rules": [
              "limit-5000"
            ]
          }
        ],
        "section-index": 20,
        "paginated": false
      },
      {
        "title": "Reporting and Intelligence Programs",
        "fields-sections": [
          {
            "index": 132,
            "title": "Primary Reporting Program - Case Classification",
            "name": "soc-primary_reporting_program_case_classification",
            "type": "select",
            "label": "Case Classification",
            "required": true,
            "options": [
              ""
            ]
          },
          {
            "index": 133,
            "title": "Primary Reporting Program - HQ Division",
            "name": "soc-primary_reporting_program_hq_division",
            "type": "text-label",
            "label": "HQ Division" //associated with Case Classification
          },
          {
            "index": 134,
            "title": "Primary Reporting Program - Program",
            "name": "soc-primary_reporting_program_program",
            "type": "text-label",
            "label": "Program" //associated with Case Classification
          },
          {
            "index": 135,
            "title": "Primary Reporting Program - Subprogram",
            "name": "soc-primary_reporting_program_subprogram",
            "type": "text-label",
            "label": "Subprogram" //associated with Case Classification
          },
          {
            "index": 136,
            "title": "Secondary Reporting Program - Case Classification",
            "name": "soc-secondary_reporting_program_case_classification",
            "type": "select",
            "label": "Case Classification",
            "required": true,
            "options": [
              ""
            ]
          },
          {
            "index": 137,
            "title": "Secondary Reporting Program - HQ Division",
            "name": "soc-secondary_reporting_program_hq_division",
            "type": "text-label",
            "label": "HQ Division" //associated with Case Classification
          },
          {
            "index": 138,
            "title": "Secondary Reporting Program - Program",
            "name": "soc-secondary_reporting_program_program",
            "type": "text-label",
            "label": "Program" //associated with Case Classification
          },
          {
            "index": 139,
            "title": "Secondary Reporting Program - Subprogram",
            "name": "soc-secondary_reporting_program_subprogram",
            "type": "text-label",
            "label": "Subprogram" //associated with Case Classification
          }
        ],
        "section-index": 21,
        "paginated": false
      },
      {
        "title": "Substantive Case File Numbers",
        "fields-sections": [
          {
            "index": 140,
            "title": "Substantive Case File Numbers",
            "name": "soc-substantive_case_file_numbers",
            "type": "table",
            "required": false,
            "columns": [
              {
                "index": 141,
                "title": "Substantive Case File Number",
                "name": "soc-substantive_case_file_number",
                "type": "input",
                "label": "Substantive Case File Number",
                "required": false,
                "rules": [
                  "limit-50"
                ]
              }
            ]
          }
        ],
        "section-index": 22,
        "paginated": false
      },
      {
        "title": "Criminal History and Records Checks",
        "fields-sections": [
          {
            "index": 142,
            "title": "Criminal History",
            "name": "soc-criminal_history",
            "type": "yes/no",
            "required": true,
            "label": "Does the CHS have a criminal history?"
          },
          {
            "index": 143,
            "title": "Explanation of Criminal History",
            "name": "soc-explanation_of_criminal_history",
            "type": "input",
            "label": "Provide brief summary of criminal history",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "142",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 144,
            "title": "Results of Records Checks",
            "name": "soc-results_of_records_checks",
            "type": "text-label",
            "label": "Results of records checks:  Records checks (NCIC, ELSUR, Sentinel, and  indices) must be completed."
          },
          {
            "index": 145,
            "title": "Positive Records Checks",
            "name": "soc-positive_records_checks",
            "type": "text-label",
            "label": "Positive records checks:  If the individual is wanted for outstanding criminal charges, see fugitive related question below."
          },
          {
            "index": 146,
            "title": "Records Checks Attachments",
            "name": "soc-records_checks_attachments",
            "type": "attachments",
            "required": false
          }
        ],
        "section-index": 23,
        "paginated": false
      },
      {
        "title": "Pending Criminal Investigation",
        "fields-sections": [
          {
            "index": 147,
            "title": "Pending Criminal Investigation",
            "name": "soc-pending_criminal_investigation",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS reasonably believed to be the subject or target of a pending criminal investigation?"
          },
          {
            "index": 148,
            "title": "Name and Title",
            "name": "soc-name_and_title",
            "type": "input",
            "label": "DOJ’s CHSC or the assigned FPO Attorney’s name",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "147",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 149,
            "title": "Date Notified",
            "name": "soc-date_notified",
            "type": "date",
            "label": "Date Notified",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "147",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 150,
            "title": "Concurrence by Other FBI Field Office Indicator",
            "name": "soc-concurrence_by_other_fbi_field_office_indicator",
            "type": "yes/no",
            "required": true,
            "label": "Is the investigation being conducted by the FBI?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "147",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 151,
            "title": "Concurrence Received",
            "name": "soc-concurrence_received",
            "type": "yes/no",
            "required": true,
            "label": "Has concurrence been received by the FBI field office conducting the investigation?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "150",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 152,
            "title": "No Investigation",
            "name": "soc-no_investigation",
            "type": "select",
            "label": "Who is conducting the investigation?",
            "required": true,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "150",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 153,
            "title": "Investigation - Other Agency",
            "name": "soc-investigation_other_agency",
            "type": "input",
            "label": "Other",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "153",
                    "selection": "Other"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 154,
            "title": "Concurrence Given By",
            "name": "soc-concurrence_given_by",
            "type": "input",
            "label": "Concurrence Given By (Name)",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "151",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 155,
            "title": "Date of Concurrence",
            "name": "soc-date_of_concurrence",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "151",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 156,
            "title": "Concurrence to Operate Guidance",
            "name": "soc-concurrence_to_operate_guidance",
            "type": "text-label",
            "label": "If any records checks determine that the individual is wanted for outstanding criminal charges or is the subject of an ongoing FBI investigation, the Agent attempting to open the CHS shall coordinate with the FO conducting the investigation. The resolution or concurrence to operate must be documented in the CHS’s main file.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "151",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 24,
        "paginated": false
      },
      {
        "title": "Subject of Previous Investigation",
        "fields-sections": [
          {
            "index": 157,
            "title": "Subject of Previous Investigation",
            "name": "soc-subject_of_previous_investigation",
            "type": "yes/no",
            "required": true,
            "label": "Was the CHS the subject of a previous FBI investigation?"
          },
          {
            "index": 158,
            "title": "Subject of Previous Investigation - Case File Number",
            "name": "soc-subject_of_previous_investigation_case_file_number",
            "type": "input",
            "label": "Provide the substantive case file number",
            "required": true,
            "rules": [
              "limit-50"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "157",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 25,
        "paginated": false
      },
      {
        "title": "CHS Previously Testified",
        "fields-sections": [
          {
            "index": 159,
            "title": "CHS Previously Testified",
            "name": "soc-chs_previously_testified",
            "type": "yes/no",
            "required": true,
            "label": "Has the CHS previously testified?"
          },
          {
            "index": 160,
            "title": "CHS Previously Testified - Yes",
            "name": "soc-chs_previously_testified_yes",
            "type": "input",
            "label": "Provide details",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "159",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 26,
        "paginated": false
      },
      {
        "title": "CHS Expected to Testify",
        "fields-sections": [
          {
            "index": 161,
            "title": "CHS Expected to Testify",
            "name": "soc-chs_expected_to_testify",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS expected to testify?"
          },
          {
            "index": 162,
            "title": "CHS Expected to Testify - Yes",
            "name": "soc-chs_expected_to_testify_yes",
            "type": "input",
            "label": "Provide details",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "161",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 27,
        "paginated": false
      },
      {
        "title": "Probationer/Parolee/Supervised Releasee",
        "fields-sections": [
          {
            "index": 163,
            "title": "Federal Probationer/Parolee/Supervised Releasee",
            "name": "soc-federal_probationer_parolee_supervised_releasee",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a federal probationer, parolee, or supervised releasee?"
          },
          {
            "index": 164,
            "title": "Probationer/Parolee/Supervised Releasee",
            "name": "soc-probationer_parolee_supervised_releasee",
            "type": "radio",
            "required": true,
            "options": [
              "Probationer",
              "Parolee",
              "Supervised releasee"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "163",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 165,
            "title": "Conditions Violated Permission",
            "name": "soc-conditions_violated_permission",
            "type": "yes/no",
            "required": true,
            "label": "Will the conditions of probation, parole, or supervised releasee l be violated?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "163",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 166,
            "title": "Violations",
            "name": "soc-violations",
            "type": "input",
            "label": "Conditions Violated",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "165",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 167,
            "title": "Violations - Guidance",
            "name": "soc-violations_guidance",
            "type": "text-label",
            "label": "Per policy, the appropriate probation, parole, or supervised releasee official approval is mandatory to open this CHS.  If permission is denied by the official, concurrence from the appropriate FPO and authorization from the court responsible for the probation, parole, or supervised release was obtained.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "165",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 168,
            "title": "Permission Given By",
            "name": "soc-permission_given_by",
            "type": "input",
            "label": "Permission Given By",
            "required": true,
            "rules": [
              "limit-100"
            ]
          },
          {
            "index": 169,
            "title": "Conditions Violated - Agency",
            "name": "soc-conditions_violated_agency",
            "type": "input",
            "label": "Agency",
            "required": true,
            "rules": [
              "limit-100"
            ]
          },
          {
            "index": 170,
            "title": "Conditions Violated - Date of Permission",
            "name": "soc-conditions_violated_date_of_permission",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ]
          },
          {
            "index": 171,
            "title": "FPO Participation",
            "name": "soc-fpo_participation",
            "type": "yes/no",
            "required": true,
            "label": "If an FPO is participating in the investigation utilizing the CHS, has the FPO attorney been notified?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "163",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 172,
            "title": "FPO - Guidance",
            "name": "soc-fpo_guidance",
            "type": "text-label",
            "label": "Per policy, FPO attorney approval is mandatory to open this CHS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "171",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 173,
            "title": "FPO Attorney Name",
            "name": "soc-fpo_attorney_name",
            "type": "input",
            "label": "FPO Attorney Name",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "171",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 174,
            "title": "FPO Attorney Date of Notification",
            "name": "soc-fpo_attorney_date_of_notification",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "171",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 175,
            "title": "Federal Prisoner",
            "name": "soc-federal_prisoner",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a federal prisoner (to include being in the custody of the USMS or the BOP, or is under BOP supervision, BOP detention, BOP halfway house, or BOP electronic monitoring)?"
          },
          {
            "index": 176,
            "title": "Federal - Results of Records Checks",
            "name": "soc-federal_results_of_records_checks",
            "type": "text-label",
            "label": "If the case is public corruption, complete Delta’s Permission to Use a Federal Prisoner as a CHS form. Otherwise, complete DOJ’s OEO Federal Prisoner form.  Contact your CHS Coordinator for further guidance.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "175",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 177,
            "title": "State or Local Prisoner, Probationer, Parolee, or Supervised Releasee",
            "name": "soc-state_or_local_prisoner_probationer_parolee_or_supervised_releasee",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a state or local prisoner, probationer, parolee, or supervised releasee?"
          },
          {
            "index": 178,
            "title": "Prisoner, Probationer, Parolee, or Supervised Releasee",
            "name": "soc-prisoner_probationer_parolee_or_supervised_releasee",
            "type": "radio",
            "required": true,
            "options": [
              "Prisoner",
              "Probationer",
              "Parolee",
              "Supervised releasee"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "177",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 179,
            "title": "State or Local - Conditions Violated Permission",
            "name": "soc-state_or_local_conditions_violated_permission",
            "type": "yes/no",
            "required": true,
            "label": "Will operating this CHS violate the conditions of incarceration, probation, parole, or releasee?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "177",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 180,
            "title": "No Permission Concurrence",
            "name": "soc-no_permission_concurrence",
            "type": "yes/no",
            "required": true,
            "label": "Has permission been obtained from the appropriate prison, probation, parole, or supervised releasee official?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "179",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 181,
            "title": "Permission Provided By",
            "name": "soc-permission_provided_by",
            "type": "input",
            "label": "Permission Provided By",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "180",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 182,
            "title": "State Conditions Violated - Date of Permission",
            "name": "soc-state_conditions_violated_date_of_permission",
            "type": "date",
            "label": "Date of Permission",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "180",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 183,
            "title": "Court Authorization",
            "name": "soc-court_authorization",
            "type": "text-label",
            "label": "If permission has been denied or is not feasible to obtain authorization was obtained from the court responsible for the incarceration, probation, parole, or supervised releasee",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "180",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 184,
            "title": "Court",
            "name": "soc-court",
            "type": "input",
            "label": "Name of Court Providing Authorization",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "180",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 185,
            "title": "Official Contacted",
            "name": "soc-official_contacted",
            "type": "input",
            "label": "Official Contacted",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "180",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 186,
            "title": "Date of Authorization",
            "name": "soc-date_of_authorization",
            "type": "date",
            "label": "Date of Authorization",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "180",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 28,
        "paginated": false
      },
      {
        "title": "Fugitive",
        "fields-sections": [
          {
            "index": 187,
            "title": "Fugitive or Outstanding Warrant",
            "name": "soc-fugitive_or_outstanding_warrant",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a fugitive or does the CHS have an outstanding warrant?"
          },
          {
            "index": 188,
            "title": "Federal Warrant",
            "name": "soc-federal_warrant",
            "type": "yes/no",
            "required": true,
            "label": "Is the warrant Federal?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "187",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 189,
            "title": "Federal Warrant - FPO Attorney",
            "name": "soc-federal_warrant_fpo_attorney",
            "type": "input",
            "label": "FPO Attorney",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "188",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 190,
            "title": "Federal Warrant - District",
            "name": "soc-federal_warrant_district",
            "type": "input",
            "label": "District",
            "required": true,
            "rules": [
              "limit100-"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "188",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 191,
            "title": "Federal Warrant - Date",
            "name": "soc-federal_warrant_date",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "188",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 192,
            "title": "Issuing Agency Contacted",
            "name": "soc-issuing_agency_contacted",
            "type": "text-label",
            "label": "Issuing agency was contacted for concurrence",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "187",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 193,
            "title": "Issuing Agency Name",
            "name": "soc-issuing_agency_name",
            "type": "select",
            "label": "Agency Name",
            "required": true,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "187",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 194,
            "title": "Issuing Agency Other Agency",
            "name": "soc-issuing_agency_other_agency",
            "type": "input",
            "label": "Other",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "193",
                    "selection": "Other"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 195,
            "title": "Issuing Agency Official Contacted",
            "name": "soc-issuing_agency_official_contacted",
            "type": "input",
            "label": "Official Contacted",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "187",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 196,
            "title": "Issuing Agency Date",
            "name": "soc-issuing_agency_date",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "187",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 197,
            "title": "Willing to Extradite",
            "name": "soc-willing_to_extradite",
            "type": "yes/no",
            "required": true,
            "label": "Is the jurisdiction with the outstanding warrant in NCIC willing to extradite the individual?" //must be yes to submit form
          },
          {
            "index": 198,
            "title": "CHS May Not Be Opened Message",
            "name": "soc-chs_may_not_be_opened_message",
            "type": "text-label",
            "label": "***This CHS may not be opened***",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "197",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 199,
            "title": "Report All Communication Message",
            "name": "soc-report_all_communication_message",
            "type": "text-label",
            "label": "Any communication with a fugitive CHS must be promptly reported to the SSA and appropriate law enforcement agency.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "187",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 29,
        "paginated": false
      },
      {
        "title": "Subject of Foreign Legal Proceedings",
        "fields-sections": [
          {
            "index": 200,
            "title": "Subject of Foreign Legal Proceedings",
            "name": "soc-subject_of_foreign_legal_proceedings",
            "type": "yes/no",
            "required": true,
            "label": "Has the CHS been the subject of foreign legal proceedings (i.e. arrested, cited, or detained for any reason)?"
          },
          {
            "index": 201,
            "title": "Explain - Subject of Foreign Legal Proceedings",
            "name": "soc-explain_subject_of_foreign_legal_proceedings",
            "type": "input",
            "label": "Explain",
            "required": true,
            "rules": [
              "limit-1000"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "200",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 30,
        "paginated": false
      },
      {
        "title": "Federal Bureau of Prisons",
        "fields-sections": [
          {
            "index": 202,
            "title": "Employee of the Federal Bureau of Prisons",
            "name": "soc-employee_of_the_federal_bureau_of_prisons",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS an employee of the Federal Bureau of Prisons (BOP)"
          },
          {
            "index": 203,
            "title": "Matters Related to Employment",
            "name": "soc-matters_related_to_employment",
            "type": "yes/no",
            "required": true,
            "label": "Will the CHS report on matters related to a subject within a BOP facility?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "202",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 204,
            "title": "Complete the Permission to Use a BOP Employee Message",
            "name": "soc-complete_the_permission_to_use_a_bop_employee_message",
            "type": "text-label",
            "label": "The Permission to Use a BOP Employee section is now required.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "203",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 31,
        "paginated": false
      },
      {
        "title": "Department of Energy",
        "fields-sections": [
          {
            "index": 205,
            "title": "Employee of the Department of Energy",
            "name": "soc-employee_of_the_department_of_energy",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS an employee of the Department of Energy (DOE)?"
          },
          {
            "index": 206,
            "title": "DOE MOU Message",
            "name": "soc-doe_mou_message",
            "type": "text-label",
            "label": "Refer to section VII of the 5/10/1999 MOU between the FBI and the DOE, Office of Counterintelligence.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "205",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 32,
        "paginated": false
      },
      {
        "title": "Department of Defense",
        "fields-sections": [
          {
            "index": 207,
            "title": "Employee of the Department of Defense",
            "name": "soc-employee_of_the_department_of_defense",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS an employee of the Department of Defense (DOD)?"
          },
          {
            "index": 208,
            "title": "DOD - Related to Employment",
            "name": "soc-dod_related_to_employment",
            "type": "yes/no",
            "required": true,
            "label": "Will the CHS report on matters related to employment?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "207",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 209,
            "title": "DOD Message",
            "name": "soc-dod_message",
            "type": "text-label",
            "label": "You must obtain concurrence from DOD. FIMU will be notified.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "207",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 33,
        "paginated": false
      },
      {
        "title": "Law Enforcement Officer",
        "fields-sections": [
          {
            "index": 210,
            "title": "Law Enforcement Officer",
            "name": "soc-law_enforcement_officer",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a sworn law enforcement officer?"
          },
          {
            "index": 211,
            "title": "Law Enforcement Officer - ITY Required",
            "name": "soc-law_enforcement_officer_ity_required",
            "type": "yes/no",
            "required": true,
            "label": "Does the CHS require ity in order to report on civil rights or public corruption matters within his/her department?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "210",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 212,
            "title": "Civil Rights/Corruption Guidance",
            "name": "soc-civil_rights_corruption_guidance",
            "type": "text-label",
            "label": "Per policy, SAC approval is mandatory to open this CHS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "210",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 213,
            "title": "SAC Approval Name",
            "name": "soc-sac_approval_name",
            "type": "input",
            "label": "Name",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "210",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 214,
            "title": "SAC Approval Date",
            "name": "soc-sac_approval_date",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "210",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 34,
        "paginated": false
      },
      {
        "title": "Minor",
        "fields-sections": [
          {
            "index": 215,
            "title": "Minor",
            "name": "soc-minor",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a minor?" //calculate based on date of birth
          },
          {
            "index": 216,
            "title": "Entry Conflict Message - Yes Selected",
            "name": "soc-entry_conflict_message_yes_selected",
            "type": "text-label",
            "label": "The CHS’s date of birth indicates that the CHS is a minor.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 217,
            "title": "Entry Conflict Message - No Selected",
            "name": "soc-entry_conflict_message_no_selected",
            "type": "text-label",
            "label": "The CHS’s date of birth indicates that the CHS is not a minor.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 218,
            "title": "Minor - Guidance",
            "name": "soc-minor_guidance",
            "type": "text-label",
            "label": "Per policy, SAC approval is mandatory to open this CHS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 219,
            "title": "CDC Consultation",
            "name": "soc-cdc_consultation",
            "type": "yes/no",
            "required": true,
            "label": "Has the CDC been consulted?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 220,
            "title": "CDC Name",
            "name": "soc-cdc_name",
            "type": "input",
            "label": "CDC Name",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "219",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 221,
            "title": "CDC Date of Approval",
            "name": "soc-cdc_date_of_approval",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "219",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 222,
            "title": "Minor Legally Emancipated",
            "name": "soc-minor_legally_emancipated",
            "type": "yes/no",
            "required": true,
            "label": "Is the minor legally emancipated as defined by state law?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 223,
            "title": "Emancipation State",
            "name": "soc-emancipation_state",
            "type": "select",
            "label": "State in which the minor was emancipated",
            "required": true,
            "options": [
              ""
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "222",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 224,
            "title": "Parental Consent",
            "name": "soc-parental_consent",
            "type": "yes/no",
            "required": true,
            "label": "If the minor is not emancipated, has parental consent been obtained?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "222",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 225,
            "title": "Consenting Parents",
            "name": "soc-consenting_parents",
            "type": "input",
            "label": "Name of Consenting Parent(s)",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "224",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 226,
            "title": "Consenting Parents Date of Consent",
            "name": "soc-consenting_parents_date_of_consent",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "224",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 227,
            "title": "Justification for no Parental Consent",
            "name": "soc-justification_for_no_parental_consent",
            "type": "input",
            "label": "Document the justification for the use of this individual absent of parental consent",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "224",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 228,
            "title": "Resides with Parents/Legal Guardian",
            "name": "soc-resides_with_parents_legal_guardian",
            "type": "yes/no",
            "required": true,
            "label": "Does the minor reside with his/her parents/legal guardian?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 229,
            "title": "Person Residing With",
            "name": "soc-person_residing_with",
            "type": "input",
            "label": "Name of person residing with",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 230,
            "title": "Resides with Relationship",
            "name": "soc-resides_with_relationship",
            "type": "input",
            "label": "Relationship",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 231,
            "title": "Parent/Guardian Address",
            "name": "soc-parent_guardian_address",
            "type": "address",
            "label": "Parent's/Legal Guardian's Address",
            "required": true,
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "228",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 232,
            "title": "Risk of Harm",
            "name": "soc-risk_of_harm",
            "type": "yes/no",
            "required": true,
            "label": "Is there any potential risk of harm to the minor?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 233,
            "title": "Description of Risk",
            "name": "soc-description_of_risk",
            "type": "input",
            "label": "Describe Risk of Harm",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "232",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 234,
            "title": "Relationship to Subject of Investigation",
            "name": "soc-relationship_to_subject_of_investigation",
            "type": "input",
            "label": "Describe minor’s relationship, if any, to subject(s) being investigated (If no relationship enter “None”).",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 235,
            "title": "Juvenile Delinquent",
            "name": "soc-juvenile_delinquent",
            "type": "yes/no",
            "required": true,
            "label": "Does minor have a juvenile delinquency record?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "215",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 236,
            "title": "Juvenile Delinquent - Explain",
            "name": "soc-juvenile_delinquent_explain",
            "type": "input",
            "label": "Explain",
            "required": true,
            "rules": [
              "limit-1000"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "235",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 35,
        "paginated": false
      },
      {
        "title": "Internet Communication Media",
        "fields-sections": [
          {
            "index": 237,
            "title": "Internet Communication Media",
            "name": "soc-internet_communication_media",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS going to establish, operate, own, control, or act as administrator of any Internet Communication Media?"
          },
          {
            "index": 238,
            "title": "Communication Content Message",
            "name": "soc-communication_content_message",
            "type": "text-label",
            "label": "Communication content and records violating the Electronic Communications Privacy Act (ECPA) cannot be accepted.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "237",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 36,
        "paginated": false
      },
      {
        "title": "Substance Abuse Program",
        "fields-sections": [
          {
            "index": 239,
            "title": "Substance Abuse Program",
            "name": "soc-substance_abuse_program",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a counselor, employee of, or patient in a substance abuse program?"
          },
          {
            "index": 240,
            "title": "Information Related to Program",
            "name": "soc-information_related_to_program",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS going to provide information on either employees or patients in such a program?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "239",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 241,
            "title": "Court Order Obtained",
            "name": "soc-court_order_obtained",
            "type": "yes/no",
            "required": true,
            "label": "Has a court order been obtained?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "239",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 242,
            "title": "Court Order Number",
            "name": "soc-court_order_number",
            "type": "input",
            "label": "Court Order Number",
            "required": true,
            "rules": [
              "limit-30"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "241",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 243,
            "title": "Court Order Date",
            "name": "soc-court_order_date",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "241",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 244,
            "title": "May Not Operate Message",
            "name": "soc-may_not_operate_message",
            "type": "text-label",
            "label": "***This CHS may not be operated without a court order.***",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "241",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 37,
        "paginated": false
      },
      {
        "title": "Elected or Appointed Official",
        "fields-sections": [
          {
            "index": 245,
            "title": "Elected or Appointed Government Official",
            "name": "soc-elected_or_appointed_government_official",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS an elected or appointed government official?"
          },
          {
            "index": 246,
            "title": "Accepted Information Notice",
            "name": "soc-accepted_information_notice",
            "type": "text-label",
            "label": "The FBI may accept information concerning alleged violations of law or other matters within FBI jurisdiction from government officials.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "245",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 247,
            "title": "Targeting Government Personnel Notice",
            "name": "soc-targeting_government_personnel_notice",
            "type": "text-label",
            "label": "The FBI may not target CHSs for the sole purpose of collecting information concerning the political beliefs or personal lives of individuals within a government body, or the private or  deliberations of that body.  Further, the FBI will not knowingly influence or attempt to influence any action of a U.S. government body, unless in furtherance of a compelling governmental interest.  If the investigation plans any activity which may influence a body of the U.S. government, the CA must consult with the CDC.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "245",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 248,
            "title": "Elected or Appointed Government Official - High Level",
            "name": "soc-elected_or_appointed_government_official_high_level",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a member of Congress, Congressional staff,  or otherwise considered a high-level government employee?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "245",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 249,
            "title": "Lead Set for FIMU",
            "name": "soc-lead_set_for_fimu",
            "type": "text-label",
            "label": "FIMU will be notified to contact the AD of the Office of Congressional Affairs (OCA) and the AD of the substantive division.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "248",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 38,
        "paginated": false
      },
      {
        "title": "Military Member",
        "fields-sections": [
          {
            "index": 250,
            "title": "Active Duty Military",
            "name": "soc-active_duty_military",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a military member to include uniformed active duty or active duty reserve member, or member of a state National Guard Unit, which has been activated into the Federal Service?"
          },
          {
            "index": 251,
            "title": "Uniformed Inactive Duty Military Member",
            "name": "soc-uniformed_inactive_duty_military_member",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a uniformed inactive duty military member?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 252,
            "title": "Civilian Employee of DOD",
            "name": "soc-civilian_employee_of_dod",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a civilian employee of a DOD entity?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "251",
                    "selection": "no"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 253,
            "title": "Civilian Employee of a Military Service",
            "name": "soc-civilian_employee_of_a_military_service",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a civilian employee of a Military Service?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "252",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 254,
            "title": "Matters Related to Their Military Employment",
            "name": "soc-matters_related_to_their_military_employment",
            "type": "yes/no",
            "required": true,
            "label": "Will the CHS be reporting on matters related to their military employment?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "251",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 255,
            "title": "Matters Related to Their Employment",
            "name": "soc-matters_related_to_their_employment",
            "type": "yes/no",
            "required": true,
            "label": "Will the CHS be reporting on matters related to their employment?"
          },
          {
            "index": 256,
            "title": "Requirement for Opening Notice - Military Member",
            "name": "soc-requirement_for_opening_notice_military_member",
            "type": "text-label",
            "label": "Coordination with the member’s military commander is mandatory prior to opening this CHS. Provide the military commander’s information.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 257,
            "title": "Military Commander's Name",
            "name": "soc-military_commander_s_name",
            "type": "input",
            "label": "Name",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 258,
            "title": "Military Commander's Rank",
            "name": "soc-military_commander_s_rank",
            "type": "input",
            "label": "Rank",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 259,
            "title": "Military Commander's Title",
            "name": "soc-military_commander_s_title",
            "type": "input",
            "label": "Title",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 260,
            "title": "Military Date of Coordination",
            "name": "soc-military_date_of_coordination",
            "type": "date",
            "label": "Date",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 261,
            "title": "Concurrence is Required to Operate the CHS",
            "name": "soc-concurrence_is_required_to_operate_the_chs",
            "type": "text-label",
            "label": "DOD concurrence is required to operate this CHS.   FIMU will be notified to request concurrence from DOD.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 262,
            "title": "Concurrence Not Required but Record Check Is",
            "name": "soc-concurrence_not_required_but_record_check_is",
            "type": "text-label",
            "label": "DOD concurrence is not required to operate this CHS, however results of DOD records checks are needed prior to utilizing this CHS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "253",
                    "selection": "no"
                  },
                  {
                    "index": "254",
                    "selection": "no"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 263,
            "title": "Information for DOD Concurrence - First Name",
            "name": "soc-information_for_dod_concurrence_first_name",
            "type": "text-label",
            "label": "First Name", //value from first name
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 264,
            "title": "Information for DOD Concurrence - Middle Name",
            "name": "soc-information_for_dod_concurrence_middle_name",
            "type": "text-label",
            "label": "Middle Name", //value from middle name
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 265,
            "title": "Information for DOD Concurrence - Last Name",
            "name": "soc-information_for_dod_concurrence_last_name",
            "type": "text-label",
            "label": "Last Name", //value from last name
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 266,
            "title": "Information for DOD Concurrence - Date of Birth",
            "name": "soc-information_for_dod_concurrence_date_of_birth",
            "type": "text-label",
            "label": "Date of Birth", //value from date of birth
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 267,
            "title": "Information for DOD Concurrence - Place of Birth",
            "name": "soc-information_for_dod_concurrence_place_of_birth",
            "type": "text-label",
            "label": "Place of Birth", //value from place of birth
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 268,
            "title": "Information for DOD Concurrence - SSN",
            "name": "soc-information_for_dod_concurrence_ssn",
            "type": "text-label",
            "label": "SSN", //value from SSN
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 269,
            "title": "Information for DOD Concurrence - Rank/Grade",
            "name": "soc-information_for_dod_concurrence_rank_grade",
            "type": "input",
            "label": "Rank/Grade",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 270,
            "title": "Information for DOD Concurrence - Duty Position",
            "name": "soc-information_for_dod_concurrence_duty_position",
            "type": "input",
            "label": "Duty Position",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 271,
            "title": "Information for DOD Concurrence - Duty Organization",
            "name": "soc-information_for_dod_concurrence_duty_organization",
            "type": "input",
            "label": "Duty Organization",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 272,
            "title": "Information for DOD Concurrence - Duty Location",
            "name": "soc-information_for_dod_concurrence_duty_location",
            "type": "input",
            "label": "Duty Location",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 273,
            "title": "Information for DOD Concurrence - Duty Telephone Number",
            "name": "soc-information_for_dod_concurrence_duty_telephone_number",
            "type": "input",
            "label": "Duty Telephone Number",
            "required": true,
            "rules": [
              "limit-25"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 274,
            "title": "Information for DOD Concurrence - Investigation Subject Information",
            "name": "soc-information_for_dod_concurrence_investigation_subject_information",
            "type": "input",
            "label": "Information about the subject of the investigation, including the activities of the individual or group, and any establishment or other affiliations (criminal, terrorism, intelligence, etc.)",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 275,
            "title": "Information for DOD Concurrence - CHS Activities",
            "name": "soc-information_for_dod_concurrence_chs_activities",
            "type": "input",
            "label": "Anticipated CHS activities/tasking",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 276,
            "title": "Information for DOD Concurrence - Background Investigation Results",
            "name": "soc-information_for_dod_concurrence_background_investigation_results",
            "type": "input",
            "label": "The results of the completed background investigation",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 277,
            "title": "Information for DOD Concurrence - FBI Point of Contact",
            "name": "soc-information_for_dod_concurrence_fbi_point_of_contact",
            "type": "input",
            "label": "FBI Point-Of-Contact",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          },
          {
            "index": 278,
            "title": "Information for DOD Concurrence - FBI Duty Telephone Number",
            "name": "soc-information_for_dod_concurrence_fbi_duty_telephone_number",
            "type": "input",
            "label": "FBI Duty Telephone Number",
            "required": true,
            "rules": [
              "limit-25"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "250",
                    "selection": "yes"
                  },
                  {
                    "index": "254",
                    "selection": "yes"
                  },
                  {
                    "index": "255",
                    "selection": "yes"
                  }
                ],
                "type": "OR"
              }
            }
          }
        ],
        "section-index": 39,
        "paginated": false
      },
      {
        "title": "Former Employee or Spouse/Significant Other",
        "fields-sections": [
          {
            "index": 279,
            "title": "Former FBI Employee",
            "name": "soc-former_fbi_employee",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a former FBI employee?"
          },
          {
            "index": 280,
            "title": "Former FBI Employee - Guidance",
            "name": "soc-former_fbi_employee_guidance",
            "type": "text-label",
            "label": "Per policy, SAC approval is mandatory to open this CHS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "279",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 281,
            "title": "Spouse/Significant Other an FBI Employee",
            "name": "soc-spouse_significant_other_an_fbi_employee",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS the spouse/significant other of an FBI employee?"
          },
          {
            "index": 282,
            "title": "FBI Employee Name",
            "name": "soc-fbi_employee_name",
            "type": "input",
            "label": "FBI Employee Name",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "281",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 283,
            "title": "Relationship to CHS",
            "name": "soc-relationship_to_chs",
            "type": "input",
            "label": "Relationship to CHS",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "281",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 284,
            "title": "Spouse/Significant Other - Guidance",
            "name": "soc-spouse_significant_other_guidance",
            "type": "text-label",
            "label": "Per policy, SAC approval is mandatory to open this CHS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "281",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 40,
        "paginated": false
      },
      {
        "title": "White House Staff",
        "fields-sections": [
          {
            "index": 285,
            "title": "Employee of the White House",
            "name": "soc-employee_of_the_white_house",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a part of the White House staff?"
          },
          {
            "index": 286,
            "title": "Lead for FIMU Notification to AD",
            "name": "soc-lead_for_fimu_notification_to_ad",
            "type": "text-label",
            "label": "FIMU will be notified to contact the AD of the substantive unit.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "285",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 41,
        "paginated": false
      },
      {
        "title": "No Foreign Policy Objection (NFPO) Authorization",
        "fields-sections": [
          {
            "index": 287,
            "title": "No Foreign Policy Objection Authorization Required",
            "name": "soc-no_foreign_policy_objection_authorization_required",
            "type": "yes/no",
            "required": true,
            "label": "Is a Department of State (DOS) “No Foreign Policy Objection” (NFPO) authorization required for the CHS?"
          },
          {
            "index": 288,
            "title": "Generate a NFPO EC Message",
            "name": "soc-generate_a_nfpo_ec_message",
            "type": "text-label",
            "label": "Generate an NFPO EC and route to FIMU.  FIMU will be notified to coordinate with DOS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "287",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 42,
        "paginated": false
      },
      {
        "title": "Witness Security Program (WSP)",
        "fields-sections": [
          {
            "index": 289,
            "title": "Participant in the Witness Security Program",
            "name": "soc-participant_in_the_witness_security_program",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS a current or former participant in the Witness Security Program (WSP)?"
          },
          {
            "index": 290,
            "title": "Participant in the Witness Security Program - Message",
            "name": "soc-participant_in_the_witness_security_program_message",
            "type": "text-label",
            "label": "Per policy, OEO approval is mandatory to open this CHS.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "289",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 291,
            "title": "OEO Approver's Name",
            "name": "soc-oeo_approvers_name",
            "type": "input",
            "label": "OEO Approver’s Name",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "289",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 292,
            "title": "OEO Approver Date of Approval",
            "name": "soc-oeo_approver_date_of_approval",
            "type": "date",
            "label": "Date of Approval",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "289",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 43,
        "paginated": false
      },
      {
        "title": "Financial or Educational Institution",
        "fields-sections": [
          {
            "index": 293,
            "title": "Employee of a Financial Institution",
            "name": "soc-employee_of_a_financial_institution",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS an employee of a financial institution?"
          },
          {
            "index": 294,
            "title": "Financial - CHS Instructions Message",
            "name": "soc-financial_chs_instructions_message",
            "type": "text-label",
            "label": "Ensure the CHS is instructed that he/she remains subject to the provisions of the Right to Financial Privacy Act and the FBI will not knowingly accept information which violates the provisions of the Act.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "293",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 295,
            "title": "Employee of an Educational Institution",
            "name": "soc-employee_of_an_educational_institution",
            "type": "yes/no",
            "required": true,
            "label": "Is the CHS an employee of an educational institution?"
          },
          {
            "index": 296,
            "title": "Educational - CHS Instructions Message",
            "name": "soc-educational_chs_instructions_message",
            "type": "text-label",
            "label": "Ensure the CHS is instructed that he/she remains subject to the provisions of the Family Educational Rights and Privacy Act of 1974 (Buckley Amendment) [20 USC § 1232(g)].",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "295",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 44,
        "paginated": false
      },
      {
        "title": "NSRP CHS",
        "fields-sections": [
          {
            "index": 297,
            "title": "NSRP CHS",
            "name": "soc-nsrp_chs",
            "type": "yes/no",
            "required": true,
            "label": "Is this a National Source Recruitment-in-Place (NSRP) CHS?"
          },
          {
            "index": 298,
            "title": "Date of NSRP Approval",
            "name": "soc-date_of_nsrp_approval",
            "type": "date",
            "label": "Date of NSRP Approval",
            "required": true,
            "rules": [
              "no-future-date"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "297",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 299,
            "title": "Name of NSRP Approving Official",
            "name": "soc-name_of_nsrp_approving_official",
            "type": "input",
            "label": "Name of NSRP Approving Official",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "297",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 45,
        "paginated": false
      },
      {
        "title": "Special Approval CHSs",
        "fields-sections": [
          {
            "index": 300,
            "title": "Special Approval Sources",
            "name": "soc-special_approval_sources",
            "type": "text-label",
            "label": "Special Approval CHSs"
          },
          {
            "index": 301,
            "title": "Reports on Criminal Matters",
            "name": "soc-reports_on_criminal_matters",
            "type": "yes/no",
            "required": true,
            "label": "Does the CHS report primarily on criminal matters, as opposed to International Terrorism and National Security matters?"
          },
          {
            "index": 302,
            "title": "FPO Oversight",
            "name": "soc-fpo_oversight",
            "type": "yes/no",
            "required": true,
            "label": "Does the CHS have FPO oversight?",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "301",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 303,
            "title": "FPO Oversight - Name",
            "name": "soc-fpo_oversight_name",
            "type": "input",
            "label": "FPO Name",
            "required": true,
            "rules": [
              "limit-100"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "302",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 304,
            "title": "Special Approval Source",
            "name": "soc-special_approval_source",
            "type": "yes/no",
            "required": true,
            "label": "Does the CHS fall into one of the following Special Approval categories: Senior Leadership, High-Level Union Officials, High-Level Government Officials, Attorneys, Physicians, Clergy, or Employees of the Media?"
          },
          {
            "index": 305,
            "title": "HSRC Notification",
            "name": "soc-hsrc_notification",
            "type": "text-label",
            "label": "Human Source Review Committee Questionnaire is required for this CHS. Use the 'HSRC Questionnaire' item within the step guide on the left to access questionnaire.",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "301",
                    "selection": "yes"
                  },
                  {
                    "index": "302",
                    "selection": "no"
                  },
                  {
                    "index": "304",
                    "selection": "yes"
                  }
                ],
                "type": "AND"
              }
            }
          },
          {
            "index": 306,
            "title": "Senior Leadership",
            "name": "soc-senior_leadership",
            "type": "yes/no",
            "required": true,
            "label": "Senior Leadership",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "304",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 307,
            "title": "Senior Leadership - Explanation",
            "name": "soc-senior_leadership_explanation",
            "type": "input",
            "label": "Explain",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "306",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 308,
            "title": "High-Level Union Officials",
            "name": "soc-high_level_union_officials",
            "type": "yes/no",
            "required": true,
            "label": "High-Level Union Officials",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "304",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 309,
            "title": "High-Level Union Officials - Explanation",
            "name": "soc-high_level_union_officials_explanation",
            "type": "input",
            "label": "Explain",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "308",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 310,
            "title": "High-Level Government Officials",
            "name": "soc-high_level_government_officials",
            "type": "yes/no",
            "required": true,
            "label": "High-Level Government Officials",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "304",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 311,
            "title": "High-Level Government Officials - Explanation",
            "name": "soc-high_level_government_officials_explanation",
            "type": "input",
            "label": "Explain",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "310",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 312,
            "title": "Attorneys",
            "name": "soc-attorneys",
            "type": "yes/no",
            "required": true,
            "label": "Attorneys",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "304",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 313,
            "title": "Attorneys - Explanation",
            "name": "soc-attorneys_explanation",
            "type": "input",
            "label": "Explain",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "312",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 314,
            "title": "Physicians",
            "name": "soc-physicians",
            "type": "yes/no",
            "required": true,
            "label": "Physicians",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "304",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 315,
            "title": "Physicians - Explanation",
            "name": "soc-physicians_explanation",
            "type": "input",
            "label": "Explain",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "314",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 316,
            "title": "Clergy",
            "name": "soc-clergy",
            "type": "yes/no",
            "required": true,
            "label": "Clergy",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "304",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 317,
            "title": "Clergy - Explanation",
            "name": "soc-clergy_explanation",
            "type": "input",
            "label": "Explain",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "316",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 318,
            "title": "Members of the Media",
            "name": "soc-members_of_the_media",
            "type": "yes/no",
            "required": true,
            "label": "Members of the Media",
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "304",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          },
          {
            "index": 319,
            "title": "Members of the Media - Explanation",
            "name": "soc-members_of_the_media_explanation",
            "type": "input",
            "label": "Explain",
            "required": true,
            "rules": [
              "limit-500"
            ],
            "conditions": {
              "if": {
                "fields": [
                  {
                    "index": "318",
                    "selection": "yes"
                  }
                ],
                "type": ""
              }
            }
          }
        ],
        "section-index": 46,
        "paginated": false
      },
      {
        "title": "Additional Comments",
        "fields-sections": [
          {
            "index": 320,
            "title": "Comments",
            "name": "soc-comments",
            "type": "input",
            "label": "Comments",
            "required": true,
            "rules": [
              "limit-500"
            ]
          }
        ],
        "section-index": 47,
        "paginated": false
      },
      {
        "title": "Synopsis",
        "fields-sections": [
          {
            "index": 321,
            "title": "Source Opening Communication Synopsis",
            "name": "soc-synopsis",
            "type": "input",
            "label": "Synopsis",
            "required": true,
            "rules": [
              "limit-150"
            ]
          }
        ],
        "section-index": 48,
        "paginated": false
      }
    ]
  }
};
  
  var sections = form["form-body"]["sections"];
  var pageSections = form["form-body"]["pagination-definition"];
  var indexes = _.pluck(pageSections["section-indexes"]);
  var valuePairs = [];

  $.each(indexes, function(i, index) {
    valuePairs.push({index: index, value: null});
  });

  var currentPage = 0;

  setpage(currentPage);

  function setpage(pageNumber) {
    $("#form").empty();
    
    if(pageSections[pageNumber]) {
      var page = _.filter(sections, function(section) { return pageSections[pageNumber].indexOf(section["section-index"]) >= 0 });
      $.each(page, function(index, section) {
        var fields = section["fields-sections"];
        $.each(fields, function(index, field) {
          switch(field.type) {
            case 'select':
              $("#form").append(htmlSelect(field));
              break;
            case 'text-label':
              $("#form").append(htmlTextLabel(field));
              break;
            case 'yes/no':
              $("#form").append(htmlYesNo(field));
              break;
            case 'date':
              $("#form").append(htmlDate(field));
              break;
            case 'input':
                $("#form").append(htmlInput(field));
                break;
          }
        });
      });
    }
  }

  //replace these with directives or whatever it's called in angular 2
  function htmlSelect(field) {
    var htmlOptions = "";
    var label = field.label;
    if (label == undefined) { label = field.title; }
    if (field.options[0] == "") { field.options = ["Choice 1","Choice 2","Choice 3"]; }

    $.each(field.options, function(index, option) {
      htmlOptions += "<option>" + option + "</option>";
    });
    var htmlReturn = "<p>" + label + "</p>"
                   + "<select>" + htmlOptions + "<select>";
    return htmlReturn;
  }

  function htmlTextLabel(field) {
    var htmlReturn = "<p>" + field.label + "</p>";
    return htmlReturn;
  }

  function htmlYesNo(field) {
    var htmlReturn = "<p>" + field.label + "</p>" +
                      "<div class='btn-group' role='group' aria-label='" + field.label + "'>" +
                        "<button type='button' class='btn btn-default' onClick='setValue(field[\"section-index\"], \"yes\")'>Yes</button>" +
                        "<button type='button' class='btn btn-default'>No</button>" +
                      "</div>";
    return htmlReturn;
  }

  function htmlDate(field) {
    var htmlReturn = "<p>" + field.label + "</p>" +
                      "<input type='date'>";
    return htmlReturn;
  }

  function htmlInput(field) {
    var maxlength = "";
    if (field.rules) {
      var rule = field.rules[0].split("-");
      if (rule[0] == "limit") { maxlength = rule[1]; }
    }
    var htmlReturn = "<p>" + field.label + "</p>" +
                      "<input type='text' maxlength='" + maxlength + "'>";
    return htmlReturn;
  }

  $("#p1").click(function() { setpage(0); currentPage = 0; });
  $("#p2").click(function() { setpage(1); currentPage = 1; });
  $("#p3").click(function() { setpage(2); currentPage = 2; });
  $("#p4").click(function() { setpage(3); currentPage = 3; });
  $("#p5").click(function() { setpage(4); currentPage = 4; });
  $("#previous").click(function() { currentPage--; setpage(currentPage); });
  $("#next").click(function() { currentPage++; setpage(currentPage); });
});
