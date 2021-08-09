const schema = {
  Calendar: {
    appPath: "/calendar/v2",
    resources: [
      {
          attachment: {
              path: "/attachments"
          }
      },
      {
          conflict: {
              path: "/conflicts"
          }
      },
      {
          event: {
              path: "/events"
          }
      },
      {
          eventinstance: {
              path: "/event_instances"
          }
      },
      {
          eventresourcerequest: {
              path: "/event_resource_requests"
          }
      },
      {
          eventtime: {
              path: "/event_times"
          }
      },
      {
          organization: {
              path: "/organizations"
          }
      },
      {
          person: {
              path: "/people"
          }
      },
      {
          reporttemplate: {
              path: "/report_templates"
          }
      },
      {
          resource: {
              path: "/resources"
          }
      },
      {
          resourceapprovalgroup: {
              path: "/resource_approval_groups"
          }
      },
      {
          resourcebooking: {
              path: "/resource_bookings"
          }
      },
      {
          resourcefolder: {
              path: "/resource_folders"
          }
      },
      {
          resourcequestion: {
              path: "/resource_questions"
          }
      },
      {
          resourcesuggestion: {
              path: "/resource_suggestions"
          }
      },
      {
          roomsetup: {
              path: "/room_setups"
          }
      },
      {
          tag: {
              path: "/tags"
          }
      },
      {
          taggroup: {
              path: "/tag_groups"
          }
      }
    ]
  },
  Checkins: {
    appPath: "/check-ins/v2",
    resources: [
      {
          attendancetype: {
              path: "/attendance_types"
          }
      },
      {
          checkin: {
              path: "/check_ins"
          }
      },
      {
          checkingroup: {
              path: "/check_in_groups"
          }
      },
      {
          checkintime: {
              path: "/check_in_times"
          }
      },
      {
          event: {
              path: "/events"
          }
      },
      {
          eventlabel: {
              path: "/event_labels"
          }
      },
      {
          eventperiod: {
              path: "/event_periods"
          }
      },
      {
          eventtime: {
              path: "/event_times"
          }
      },
      {
          headcount: {
              path: "/headcounts"
          }
      },
      {
          label: {
              path: "/labels"
          }
      },
      {
          location: {
              path: "/locations"
          }
      },
      {
          locationeventperiod: {
              path: "/location_event_periods"
          }
      },
      {
          locationeventtime: {
              path: "/location_event_times"
          }
      },
      {
          locationlabel: {
              path: "/location_labels"
          }
      },
      {
          option: {
              path: "/options"
          }
      },
      {
          organization: {
              path: "/organizations"
          }
      },
      {
          pass: {
              path: "/passes"
          }
      },
      {
          person: {
              path: "/people"
          }
      },
      {
          personevent: {
              path: "/person_events"
          }
      },
      {
          station: {
              path: "/stations"
          }
      },
      {
          theme: {
              path: "/themes"
          }
      }
    ]
  },
  Giving: {
    appPath: "/giving/v2",
    resources: [
      {
          batch: {
              path: "/batches"
          }
      },
      {
          batchgroup: {
              path: "/batch_groups"
          }
      },
      {
          campus: {
              path: "/campuses"
          }
      },
      {
          designation: {
              path: "/designations"
          }
      },
      {
          designationrefund: {
              path: "/designation_refunds"
          }
      },
      {
          donation: {
              path: "/donations"
          }
      },
      {
          fund: {
              path: "/funds"
          }
      },
      {
          label: {
              path: "/labels"
          }
      },
      {
          organization: {
              path: "/organizations"
          }
      },
      {
          paymentmethod: {
              path: "/payment_methods"
          }
      },
      {
          paymentsource: {
              path: "/payment_sources"
          }
      },
      {
          person: {
              path: "/people"
          }
      },
      {
          pledge: {
              path: "/pledges"
          }
      },
      {
          pledgecampaign: {
              path: "/pledge_campaigns"
          }
      },
      {
          recurringdonation: {
              path: "/recurring_donations"
          }
      },
      {
          recurringdonationdesignation: {
              path: "/recurring_donation_designations"
          }
      },
      {
          refund: {
              path: "/refunds"
          }
      }
    ]
  },
  Groups: {
    appPath: "/groups/v2",
    resources: [
      {
          attendance: {
              path: "/attendances"
          }
      },
      {
          event: {
              path: "/events"
          }
      },
      {
          group: {
              path: "/groups"
          }
      },
      {
          grouptype: {
              path: "/group_types"
          }
      },
      {
          location: {
              path: "/locations"
          }
      },
      {
          membership: {
              path: "/memberships"
          }
      },
      {
          organization: {
              path: "/organizations"
          }
      },
      {
          person: {
              path: "/people"
          }
      },
      {
          resource: {
              path: "/resources"
          }
      },
      {
          tag: {
              path: "/tags"
          }
      },
      {
          taggroup: {
              path: "/tag_groups"
          }
      }
    ]
  },
  People: {
    appPath: "/people/v2",
    resources: [
      {
          address: {
              path: "/addresses"
          }
      },
      {
          app: {
              path: "/apps"
          }
      },
      {
          campus: {
              path: "/campuses"
          }
      },
      {
          carrier: {
              path: "/carriers"
          }
      },
      {
          condition: {
              path: "/conditions"
          }
      },
      {
          connectedperson: {
              path: "/connected_people"
          }
      },
      {
          email: {
              path: "/emails"
          }
      },
      {
          fielddatum: {
              path: "/field_data"
          }
      },
      {
          fielddefinition: {
              path: "/field_definitions"
          }
      },
      {
          fieldoption: {
              path: "/field_options"
          }
      },
      {
          form: {
              path: "/forms"
          }
      },
      {
          formfield: {
              path: "/form_fields"
          }
      },
      {
          formfieldoption: {
              path: "/form_field_options"
          }
      },
      {
          formsubmission: {
              path: "/form_submissions"
          }
      },
      {
          formsubmissionvalue: {
              path: "/form_submission_values"
          }
      },
      {
          household: {
              path: "/households"
          }
      },
      {
          householdmembership: {
              path: "/household_memberships"
          }
      },
      {
          inactivereason: {
              path: "/inactive_reasons"
          }
      },
      {
          list: {
              path: "/lists"
          }
      },
      {
          listcategory: {
              path: "/list_categories"
          }
      },
      {
          listresult: {
              path: "/list_results"
          }
      },
      {
          listshare: {
              path: "/list_shares"
          }
      },
      {
          liststar: {
              path: "/list_stars"
          }
      },
      {
          mailchimpsyncstatus: {
              path: "/mailchimp_sync_statuses"
          }
      },
      {
          maritalstatus: {
              path: "/marital_statuses"
          }
      },
      {
          message: {
              path: "/messages"
          }
      },
      {
          messagegroup: {
              path: "/message_groups"
          }
      },
      {
          nameprefix: {
              path: "/name_prefixes"
          }
      },
      {
          namesuffix: {
              path: "/name_suffixes"
          }
      },
      {
          note: {
              path: "/notes"
          }
      },
      {
          notecategory: {
              path: "/note_categories"
          }
      },
      {
          notecategoryshare: {
              path: "/note_category_shares"
          }
      },
      {
          notecategorysubscription: {
              path: "/note_category_subscriptions"
          }
      },
      {
          organization: {
              path: "/organizations"
          }
      },
      {
          organizationstatistics: {
              path: "/organization_statistics"
          }
      },
      {
          peopleimport: {
              path: "/people_imports"
          }
      },
      {
          peopleimportconflict: {
              path: "/people_import_conflicts"
          }
      },
      {
          peopleimporthistory: {
              path: "/people_import_histories"
          }
      },
      {
          person: {
              path: "/people"
          }
      },
      {
          personapp: {
              path: "/person_apps"
          }
      },
      {
          personmerger: {
              path: "/person_mergers"
          }
      },
      {
          phonenumber: {
              path: "/phone_numbers"
          }
      },
      {
          platformnotification: {
              path: "/platform_notifications"
          }
      },
      {
          report: {
              path: "/reports"
          }
      },
      {
          rule: {
              path: "/rules"
          }
      },
      {
          schooloption: {
              path: "/school_options"
          }
      },
      {
          servicetime: {
              path: "/service_times"
          }
      },
      {
          socialprofile: {
              path: "/social_profiles"
          }
      },
      {
          tab: {
              path: "/tabs"
          }
      },
      {
          workflow: {
              path: "/workflows"
          }
      },
      {
          workflowcard: {
              path: "/workflow_cards"
          }
      },
      {
          workflowcardactivity: {
              path: "/workflow_card_activities"
          }
      },
      {
          workflowcardnote: {
              path: "/workflow_card_notes"
          }
      },
      {
          workflowcategory: {
              path: "/workflow_categories"
          }
      },
      {
          workflowshare: {
              path: "/workflow_shares"
          }
      },
      {
          workflowstep: {
              path: "/workflow_steps"
          }
      },
      {
          workflowstepassigneesummary: {
              path: "/workflow_step_assignee_summaries"
          }
      }
    ]
  },
  Registrations: {
    appPath: "/registrations/v2",
    resources: [
      { event: { path: "/events" } },
      { person: { path: "/people" } }
    ]
  },
  Services: {
    appPath: "/services/v2",
    resources: [
      {
          arrangement: {
              path: "/arrangements"
          }
      },
      {
          arrangementsections: {
              path: "/arrangement_sections"
          }
      },
      {
          attachment: {
              path: "/attachments"
          }
      },
      {
          attachmentactivity: {
              path: "/attachment_activities"
          }
      },
      {
          attachmenttype: {
              path: "/attachment_types"
          }
      },
      {
          availablesignup: {
              path: "/available_signups"
          }
      },
      {
          blockout: {
              path: "/blockouts"
          }
      },
      {
          blockoutdate: {
              path: "/blockout_dates"
          }
      },
      {
          blockoutexception: {
              path: "/blockout_exceptions"
          }
      },
      {
          blockoutscheduleconflict: {
              path: "/blockout_schedule_conflicts"
          }
      },
      {
          cclireporting: {
              path: "/ccli_reportings"
          }
      },
      {
          contributor: {
              path: "/contributors"
          }
      },
      {
          customslide: {
              path: "/custom_slides"
          }
      },
      {
          emailtemplate: {
              path: "/email_templates"
          }
      },
      {
          emailtemplaterenderedresponse: {
              path: "/email_template_rendered_responses"
          }
      },
      {
          folder: {
              path: "/folders"
          }
      },
      {
          folderpath: {
              path: "/folder_paths"
          }
      },
      {
          item: {
              path: "/items"
          }
      },
      {
          itemnote: {
              path: "/item_notes"
          }
      },
      {
          itemnotecategory: {
              path: "/item_note_categories"
          }
      },
      {
          itemtime: {
              path: "/item_times"
          }
      },
      {
          key: {
              path: "/keys"
          }
      },
      {
          layout: {
              path: "/layouts"
          }
      },
      {
          live: {
              path: "/lives"
          }
      },
      {
          livecontroller: {
              path: "/live_controllers"
          }
      },
      {
          media: {
              path: "/media"
          }
      },
      {
          mediaschedule: {
              path: "/media_schedules"
          }
      },
      {
          neededposition: {
              path: "/needed_positions"
          }
      },
      {
          organization: {
              path: "/organizations"
          }
      },
      {
          person: {
              path: "/people"
          }
      },
      {
          personteampositionassignment: {
              path: "/person_team_position_assignments"
          }
      },
      {
          plan: {
              path: "/plans"
          }
      },
      {
          plannote: {
              path: "/plan_notes"
          }
      },
      {
          plannotecategory: {
              path: "/plan_note_categories"
          }
      },
      {
          planperson: {
              path: "/plan_people"
          }
      },
      {
          planpersontime: {
              path: "/plan_person_times"
          }
      },
      {
          plantemplate: {
              path: "/plan_templates"
          }
      },
      {
          plantime: {
              path: "/plan_times"
          }
      },
      {
          publicview: {
              path: "/public_views"
          }
      },
      {
          reporttemplate: {
              path: "/report_templates"
          }
      },
      {
          schedule: {
              path: "/schedules"
          }
      },
      {
          scheduledperson: {
              path: "/scheduled_people"
          }
      },
      {
          series: {
              path: "/series"
          }
      },
      {
          servicetype: {
              path: "/service_types"
          }
      },
      {
          servicetypepath: {
              path: "/service_type_paths"
          }
      },
      {
          signupsheet: {
              path: "/signup_sheets"
          }
      },
      {
          signupsheetmetadata: {
              path: "/signup_sheet_metadata"
          }
      },
      {
          skippedattachment: {
              path: "/skipped_attachments"
          }
      },
      {
          song: {
              path: "/songs"
          }
      },
      {
          songschedule: {
              path: "/song_schedules"
          }
      },
      {
          songbookstatus: {
              path: "/songbook_statuses"
          }
      },
      {
          splitteamrehearsalassignment: {
              path: "/split_team_rehearsal_assignments"
          }
      },
      {
          tag: {
              path: "/tags"
          }
      },
      {
          taggroup: {
              path: "/tag_groups"
          }
      },
      {
          team: {
              path: "/teams"
          }
      },
      {
          teamleader: {
              path: "/team_leaders"
          }
      },
      {
          teamposition: {
              path: "/team_positions"
          }
      },
      {
          textsetting: {
              path: "/text_settings"
          }
      },
      {
          timepreferenceoption: {
              path: "/time_preference_options"
          }
      },
      {
          zoom: {
              path: "/zooms"
          }
      }
    ]
  }
}

module.exports = schema