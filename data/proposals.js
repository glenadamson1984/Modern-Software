/**
 * Proposal content keyed by slug. Add new proposals here; no nav link is shown.
 * Remove a key to "take down" a proposal from the site.
 */
export const proposals = {
  smorganfunerals: {
    title: "PSNI Call-Out & Case Management System",
    subtitle: "Software Business Proposal",
    preparedFor: "Stephen Morgan – Morgan Funerals",
    preparedBy: "Modern Software",
    sections: [
      {
        heading: "PROJECT SUMMARY",
        content: `Morgan Funerals currently manage PSNI corner call-outs and associated case details using a largely manual process. Information is captured at the time of the call, updated while attending the scene, and later used for coordination, compliance, and invoicing.

The purpose of this proposal is to outline a digital solution that improves how these call-outs are recorded, coordinated, and managed — helping Morgan Funerals respond faster, operate more efficiently, and present a highly professional and organised service to PSNI.

The solution is presented in three progressive options, allowing Morgan Funerals to choose an approach that fits both current needs and future ambitions.`,
      },
      {
        heading: "THE PROBLEM",
        content: `PSNI corner call-outs are time-critical and information-sensitive. At present, the process relies heavily on handwritten notes and informal communication between colleagues.

This creates several challenges:

• Information can be missed or recorded inconsistently
• Availability of staff is not immediately visible
• Accepting or declining jobs is not centrally tracked
• Case details must be reconstructed later for invoicing
• Competing funeral directors using digital systems appear more organised and responsive

In an environment where professionalism, accuracy, and speed influence who receives future call-outs, these limitations represent an increasing operational and competitive risk.`,
      },
      {
        heading: "PROPOSED SOLUTION",
        content: `Modern Software propose a centralised digital system for managing PSNI call-outs and the full lifecycle of each case.

At its core, the system allows a call-out to be logged once, with all relevant details captured, updated, and shared from a single source of truth. From there, staff can accept jobs, attend scenes, record case details, and track timelines without relying on paper notes or follow-up administration.

To support different budgets and levels of digital adoption, the solution is offered in three options.`,
      },
      {
        heading: "OPTION 1 — DIGITAL CALL-OUT FORM",
        subheading: "Estimated Cost: £500",
        content: `A simple digital replacement for paper-based notes.

Includes
• Online form to capture call-out details
• Recording of accept / reject decisions
• Ability to update case notes after attending the scene
• Secure sharing of records with PSNI where required

Benefits
• Low initial cost
• Immediate improvement over pen and paper
• Quick to deploy

Limitations
• Manual coordination between colleagues
• No visibility of staff availability
• No ETA or live updates
• Limited competitive differentiation`,
      },
      {
        heading: "OPTION 2 — BRANDED WEB SYSTEM",
        subheading: "Estimated Cost: £2,000",
        content: `A secure, browser-based system accessible by all staff.

Includes
• Secure staff logins
• Central dashboard showing all active jobs
• Ability for colleagues to accept jobs
• SMS notifications when a new job is created
• Structured capture of all case details
• Optional read-only access for PSNI
• Fully branded to Morgan Funerals

Benefits
• Improved coordination and visibility
• More professional and organised workflow
• Stronger impression with PSNI
• Solid foundation for future enhancements

Limitations
• Requires browser access
• Not optimised for real-time, on-scene use
• No GPS-based ETA tracking`,
      },
      {
        heading: "OPTION 3 — MOBILE APP (RECOMMENDED)",
        subheading: "Estimated Cost: £8,000 – £12,000",
        content: `A fully branded mobile application designed specifically for real-time operations.

Includes
• iOS and Android mobile application
• One-tap job creation during the PSNI call
• Push notifications and SMS alerts
• Live job acceptance by staff
• GPS-based ETA calculation to the scene
• On-scene data capture (officer name, case number, notes)
• Flags for suspicious deaths and post-mortem requirements
• Automatic tracking of time on site and body storage
• Optional monthly invoice generation
• Designed with future resale to other funeral directors in mind

Key Benefits
• Faster response times
• Clear, real-time visibility for staff
• Highly professional impression with PSNI
• Accurate, auditable records
• Reduced administrative effort
• Long-term commercial opportunity

Funding Support Potential
This option may qualify for TechStart grant funding (typically £15k–£30k), which could substantially reduce Morgan Funerals' portion of the development cost.
Modern Software can assist with the funding application process, including preparation of the technical and product description.`,
      },
      {
        heading: "OPTIONAL ENHANCEMENTS",
        content: `• Automated monthly invoice generation
• PDF / CSV invoice exports
• PSNI-specific reporting views
• Multi-branch or multi-region support

These enhancements can be introduced once the core system is in place.`,
      },
      {
        heading: "FUNDING CONSIDERATION — INVEST NI TECHSTART",
        content: `TechStart is an Invest NI programme designed to support the development of innovative technology ideas with commercial potential.

Key points:
• Typical funding range: £15,000 – £30,000
• No requirement to form a new business
• Supports proof-of-concept and early product development
• Particularly suited to technology that could be reused or resold

This project — particularly the mobile app — aligns well with the aims of the programme and may be eligible for funding support.`,
      },
      {
        heading: "PROPOSED MILESTONES",
        content: `• UI mock-ups and workflow design
• Design review and refinement
• Core system development
• User testing and feedback
• Deployment and handover`,
      },
      {
        heading: "NEXT STEPS",
        content: `• Review the proposed options
• Select a preferred approach
• Finalise scope and timeline
• Begin design phase`,
      },
    ],
    screenshots: [
      {
        src: "/images/proposals/funeral-mobile1.png",
        label: "Mobile app — New Call-Out, Active Jobs, Case Details",
      },
      {
        src: "/images/proposals/funeral-mobile2.png",
        label: "Mobile app — On the way (ETA and map)",
      },
      {
        src: "/images/proposals/funeral-website.png",
        label: "Web system — Dashboard and job details",
      },
    ],
  },
};

export const getProposalBySlug = (slug) => proposals[slug] ?? null;
export const getAllProposalSlugs = () => Object.keys(proposals);
