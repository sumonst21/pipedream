import { customProps } from "../../common/constants.mjs";
import { parseObject } from "../../common/utils.mjs";
import outreach from "../../outreach.app.mjs";

export default {
  key: "outreach-create-prospect",
  name: "Create Prospect",
  description: "Creates a new prospect in Outreach. [See the documentation](https://developers.outreach.io/api/reference/tag/Prospect/#tag/Prospect/paths/~1prospects/post)",
  version: "0.0.1",
  type: "action",
  props: {
    outreach,
    addedAt: {
      type: "string",
      label: "Added At",
      description: "The date and time the prospect was added to any system. Format: 'YYYY-MM-DDTHH:MM:SS.UUUZ'",
      optional: true,
    },
    addressCity: {
      type: "string",
      label: "Address City",
      description: "The prospect's city (e.g. \"Seattle\").",
      optional: true,
    },
    addressCountry: {
      type: "string",
      label: "Address Country",
      description: "The prospect's country (e.g. \"USA\").",
      optional: true,
    },
    addressState: {
      type: "string",
      label: "Address State",
      description: "The prospect's state (e.g. \"Washington\").",
      optional: true,
    },
    addressStreet: {
      type: "string",
      label: "Address Street",
      description: "The prospect's street address (e.g. \"1441 N 34th St\").",
      optional: true,
    },
    addressStreet2: {
      type: "string",
      label: "Address Street 2",
      description: "The prospect's second street address, if applicable.",
      optional: true,
    },
    addressZip: {
      type: "string",
      label: "Address Zip",
      description: "The prospect's postal code (e.g. \"98103\").",
      optional: true,
    },
    angelListUrl: {
      type: "string",
      label: "Angel List URL",
      description: "The prospect's AngelList URL.",
      optional: true,
    },
    availableAt: {
      type: "string",
      label: "Available At",
      description: "The date and time the prospect is available to contact again. Format: 'YYYY-MM-DDTHH:MM:SS.UUUZ'",
      optional: true,
    },
    campaignName: {
      type: "string",
      label: "Campaign Name",
      description: "The name of the campaign the prospect is associated with.",
      optional: true,
    },
    company: {
      type: "string",
      label: "Company",
      description: "The name of the company the prospect works at. If associated with an account, this is the name of the account. (e.g. Acme International).",
      optional: true,
    },
    dateOfBirth: {
      type: "string",
      label: "Date Of Birth",
      description: "The date the prospect was born. Format YYYY-MM-DD",
      optional: true,
    },
    degree: {
      type: "string",
      label: "Degree",
      description: "The degree(s) the prospect has received.",
      optional: true,
    },
    emails: {
      type: "string[]",
      label: "Emails",
      description: "A list of email addresses associated with the prospect.",
      optional: true,
    },
    eventName: {
      type: "string",
      label: "Event Name",
      description: "The name of the event the prospect was met at.",
      optional: true,
    },
    externalId: {
      type: "string",
      label: "External Id",
      description: "A custom ID for the prospect, often referencing an ID in an external system.",
      optional: true,
    },
    externalOwner: {
      type: "string",
      label: "External Owner",
      description: "A custom owner for the prospect, often referencing an ownering in an external system.",
      optional: true,
    },
    externalSource: {
      type: "string",
      label: "External Source",
      description: "The source of the resource's creation (e.g. \"outreach-api\").",
      optional: true,
    },
    facebookUrl: {
      type: "string",
      label: "Facebook URL",
      description: "The prospect's Facebook URL.",
      optional: true,
    },
    firstName: {
      type: "string",
      label: "First Name",
      description: "The first name of the prospect.",
      optional: true,
    },
    gender: {
      type: "string",
      label: "Gender",
      description: "The gender of the prospect.",
      optional: true,
    },
    githubUrl: {
      type: "string",
      label: "GitHub URL",
      description: "The prospect's GitHub URL.",
      optional: true,
    },
    githubUsername: {
      type: "string",
      label: "GitHub Username",
      description: "The prospect's GitHub username.",
      optional: true,
    },
    googlePlusUrl: {
      type: "string",
      label: "Google Plus URL",
      description: "The prospect's Google+ URL.",
      optional: true,
    },
    graduationDate: {
      type: "string",
      label: "Graduation Date",
      description: "The graduation date of the prospect.",
      optional: true,
    },
    homePhones: {
      type: "string[]",
      label: "Home Phones",
      description: "A list of home phone numbers associated with the prospect.",
      optional: true,
    },
    jobStartDate: {
      type: "string",
      label: "Job Start Date",
      description: "The starting date of the prospect's current job.",
      optional: true,
    },
    lastName: {
      type: "string",
      label: "Last Name",
      description: "The last name of the prospect.",
      optional: true,
    },
    linkedInConnections: {
      type: "integer",
      label: "LinkedIn Connections",
      description: "The number of connections on the prospect's LinkedIn profile.",
      optional: true,
    },
    linkedInId: {
      type: "string",
      label: "LinkedIn Id",
      description: "The prospect's LinkedIn ID.",
      optional: true,
    },
    linkedInUrl: {
      type: "string",
      label: "LinkedIn URL",
      description: "The prospect's LinkedIn URL.",
      optional: true,
    },
    middleName: {
      type: "string",
      label: "Middle Name",
      description: "The middle name of the prospect.",
      optional: true,
    },
    mobilePhones: {
      type: "string[]",
      label: "Mobile Phones",
      description: "A list of mobile phone numbers associated with the prospect.",
      optional: true,
    },
    nickname: {
      type: "string",
      label: "Nickname",
      description: "The nickname of the prospect.",
      optional: true,
    },
    occupation: {
      type: "string",
      label: "Occupation",
      description: "The occupation of the prospect (e.g. \"Purchasing Manager\").",
      optional: true,
    },
    optedOut: {
      type: "boolean",
      label: "Opted Out",
      description: "A boolean value representing whether this prospect is currently opted out of all mailings. Set this value to true to opt out the prospect; the 'opted_out' timestamp will be updated to the time of the request. Set this value to false to revert the opt at and clear the opted out timestamp.",
      optional: true,
    },
    otherPhones: {
      type: "string[]",
      label: "Other Phones",
      description: "A list of other phone numbers associated with the prospect.",
      optional: true,
    },
    personalNote1: {
      type: "string",
      label: "Personal Note 1",
      description: "A custom note field related to the prospect.",
      optional: true,
    },
    personalNote2: {
      type: "string",
      label: "Personal Note 2",
      description: "A second note field related to the prospect.",
      optional: true,
    },
    preferredContact: {
      type: "string",
      label: "Preferred Contact",
      description: "The preferred contact method for the prospect.",
      optional: true,
    },
    quoraUrl: {
      type: "string",
      label: "Quora URL",
      description: "The prospect's Quora URL.",
      optional: true,
    },
    region: {
      type: "string",
      label: "Region",
      description: "The primary geographic region of the prospect.",
      optional: true,
    },
    school: {
      type: "string",
      label: "School",
      description: "The school(s) the prospect has attended.",
      optional: true,
    },
    score: {
      type: "string",
      label: "Score",
      description: "A custom score given to measure the quality of the lead.",
      optional: true,
    },
    sharingTeamId: {
      propDefinition: [
        outreach,
        "sharingTeamId",
      ],
      optional: true,
    },
    source: {
      type: "string",
      label: "Source",
      description: "A custom source representing where the lead was first acquired.",
      optional: true,
    },
    specialties: {
      type: "string",
      label: "Specialties",
      description: "A description of the prospect's specialties.",
      optional: true,
    },
    stackOverflowId: {
      type: "string",
      label: "Stack Overflow Id",
      description: "The prospect's StackOverflow ID.",
      optional: true,
    },
    stackOverflowUrl: {
      type: "string",
      label: "StackOverflow URL",
      description: "The prospect's StackOverflow URL.",
      optional: true,
    },
    tags: {
      type: "string[]",
      label: "Tags",
      description: "A list of tag values associated with the account (e.g. [\"Interested\", \"2017 Expo\"]).",
      optional: true,
    },
    timeZone: {
      type: "string",
      label: "TimeZone",
      description: "The prospect's current timezone, preferably in the IANA format (e.g. \"America/LosAngeles\").",
      optional: true,
    },
    title: {
      type: "string",
      label: "Title",
      description: "The title of the prospect.",
      optional: true,
    },
    twitterUrl: {
      type: "string",
      label: "Twitter URL",
      description: "The prospect's Twitter URL.",
      optional: true,
    },
    twitterUsername: {
      type: "string",
      label: "Twitter Username",
      description: "The prospect's Twitter username.",
      optional: true,
    },
    voipPhones: {
      type: "string[]",
      label: "Voip Phones",
      description: "A list of voip phone numbers associated with the prospect.",
      optional: true,
    },
    websiteUrl1: {
      type: "string",
      label: "Website URL 1",
      description: "The URL of the prospect's website.",
      optional: true,
    },
    websiteUrl2: {
      type: "string",
      label: "Website URL 2",
      description: "The value of the prospect's second website URL field.",
      optional: true,
    },
    websiteUrl3: {
      type: "string",
      label: "Website URL 3",
      description: "The value of the prospect's third website URL field.",
      optional: true,
    },
    workPhones: {
      type: "string[]",
      label: "Work Phones",
      description: "A list of work phone numbers associated with the prospect.",
      optional: true,
    },
    ...customProps,
  },
  async run({ $ }) {
    const {
      outreach,
      emails,
      homePhones,
      mobilePhones,
      otherPhones,
      score,
      tags,
      voipPhones,
      workPhones,
      ...data
    } = this;

    const response = await outreach.createProspect({
      $,
      data: {
        data: {
          attributes: {
            emails: emails && parseObject(emails),
            homePhones: homePhones && parseObject(homePhones),
            mobilePhones: mobilePhones && parseObject(mobilePhones),
            otherPhones: otherPhones && parseObject(otherPhones),
            score: score && parseFloat(score),
            tags: tags && parseObject(tags),
            voipPhones: voipPhones && parseObject(voipPhones),
            workPhones: workPhones && parseObject(workPhones),
            ...data,
          },
          type: "prospect",
        },
      },
    });

    $.export("$summary", `Successfully created prospect with Id: ${response.data.id}`);
    return response;
  },
};
