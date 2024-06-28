# OpenDI Reference Architecture - Roles and User Stories

## Purpose

The purpose of this document is to support those contributing to and benefitting from the OpenDI standards. To understand the motivation and background for the OpenDI project as a whole, read [OpenDI Intro Material](https://opendi-org.github.io/landing-site/OpenDI%20Intro%20Material/). This document enumerates typical user roles for Decision Intelligence systems, with links to further descriptions and user stories for each role, in separate documents.

### Why read this document?

As a foundation for the rest of the OpenDI Reference Architecture &mdash; and in keeping with best practices in user-centered design &mdash; it's important to understand how a DI system like this is to be used.

As a foundation for that, in turn, it's important to start with _who_ will be using the DI system, and _why_.  

The purpose of this living document is therefore to capture user stories for the DI reference architecture, which was summarized in Figure 2. User stories, per [Agile best practice](https://www.atlassian.com/agile/project-management/user-stories) are not requirements, but are plain-language descriptions of how software "will provide value to users".  They provide a framework into which more detailed, "functional", requirements are added later.  Over meany years of software development, we've learned that, if our goal is to build systems that are "fit for purpose", explaining things in this chronological sequence of steps is the easiest for humans to understand and therefore review to ensure we're building the right solutions.

### Objective

With the above information as context, then, the objective of this document is twofold:
1. *Contributors:* To align contributors to the OpenDI Reference Architecture so we are all on the same page as to what software users need; and
2. *Consumers:* To serve as the authoritative point of reference for engineering teams that are working on the OpenDI Reference Architecture directly or implementing OpenDI features in an OpenDI-compliant artifact. 

By way of illustration for #2, a software vendor might be interested in creating just one part of this architecture - perhaps the connection to data in the bottom layer of Figure 2.  They can read this document to ensure that the system they build can be integrated with systems from other vendors that help a user to create a decision model, and to use a decision simulation system. This means that the data connection vendor can deliver its products much faster to market, because it doesn't have to deliver the entire "stack" of DI modules.

There are also open source teams that are developing modules that are compliant with the architecture summarized in Figure 2.   This means that if you are developing a proprietary module, then by following this standard you'll be able to leverage those open source systems, thereby de-risking and de-costing your product.  

Note that the roles and associated use cases in this document are limited to those associated with the use of DI software systems. Out of scope for this document are roles and use cases that don't involve the use of DI software. For example, [_The Decision Intelligence Handbook_](https://www.dihandbook.com) describes a process for creating a decision framing document, which is the responsibility of a Decision Team Leader role. This role is not explicitly called out in this document, because they don't interact with DI software in ways that aren't covered by other roles. Nor is the creation of the Framing Document a user story described here, for the same reason.

### Who reads this document?
Generally speaking, we expect this document to be used by software architects and/or technical leads who have decided to build software modules that follow the OpenDI standard.  Larger teams may even designate a formal "standards liason" role whose job it is to keep up with ecosystem activities.  

It is in the interest of these *consumers* of this standard to also *contribute* to it, especially in the early days of OpenDI. Contributing to the standard improves its quality, which &mdash; using a "commons" model that is familiar to many of us in DI &mdash; benefits all participants.
## User Roles

Within a DI ecosystem, there are a number of user roles, which are listed below. Any individual user may have one or more of these roles. User roles from a requirements perspective are distinct, albeit potentially related to organizational roles (_e.g._, a service provider, consultant, engineer, researcher, _etc_.). 

### Decision Maker

I use DI software systems to determine the best set of actions to achieve my desired outcomes. I interact with renderings of Causal Decision Models to gain an intuition regarding the causal relationship between actions and outcomes. I have the authority required to adjust all Levers relevant to my decision.

[Link: Decision Maker (Full Role Description).](./Roles/Decision%20Maker.md)

### DI Analyst

I collaborate with stakeholders to produce customer-facing artifacts. These artifacts enable Decision Model Builders to build Causal Decision Models.

[Link: DI Analyst (Full Role Description).](./Roles/DI%20Analyst.md)

### Decision Model Builder

I author Causal Decision Models within OpenDI-compliant software systems. I may use Causal Decision Diagrams as a starting point.

[Link: Decision Model Builder (Full Role Description).](./Roles/Decision%20Model%20Builder.md)

### Decision Asset Manager

I curate a library of decision assets for use by other roles. My work involves identifying reusable assets from parts of the DI workflow, or from elsewhere.

[Link: Decision Asset Manager (Full Role Description).](./Roles/Decision%20Asset%20Manager.md)

### OpenDI System Administrator

I set up and configure OpenDI-compliant software and/or services. I support other roles by maintaining a private network or a public or hybrid cloud architecture.

[Link: OpenDI System Administrator (Full Role Description).](./Roles/OpenDI%20System%20Administrator.md)

### Decision Simulation Builder

I prepare Causal Decision Models for simulation. To do this, I use draft Causal Decision Models and associated decision assets created by other roles.

[Link: Decision Simulation Builder (Full Role Description).](./Roles/Decision%20Simulation%20Builder.md)

### Decision Simulation Manager

Once simulations have been created by the Decision Simulation Builder, I perform the tasks to execute them using some computational resources. I manage simulation parameters and hyperparameters, schedule simulation execution, and curate results.

[Link: Decision Simulation Manager (Full Role Description).](./Roles/Decision%20Simulation%20Manager.md)

### Decision Monitor Builder

I rig Causal Decision Models so that they can be monitored, using evidence of outcomes, externals, and other decision element values. Rigged models are evaluated for whether the likelihood of achieving desirable outcomes has substantively changed.

[Link: Monitor Builder (Full Role Description).](./Roles/Decision%20Monitor%20Builder.md)

### Decision Monitor

I track a Causal Decision Model that has been used by a Decision Maker as it is updated with new evidence of outcomes, externals, and other decision element values. My primary interest is identifying whether the likelihood of achieving the Decision Maker's desired outcomes has substantively changed.

[Link: Decision Monitor (Full Role Description).](./Roles/Decision%20Monitor.md)

### Decision Quality Assurance Manager

I provide oversight at every stage of the DI process, to ensure that models and simulations are authored, run, and monitored in such a way that they are fit for purpose.

[Link: Quality Assurance Manager (Full Role Description).](./Roles/Decision%20Quality%20Assurance%20Manager.md)

## About this document

### Status of this document
At this point in time, this document is the first in an expected series of OpenDI standards publications.  It has been drafted by the OpenDI founders (DLR and LP so far) and others (IK) in advance of a planned review by a small team before being released for public comment.

Generally speaking, we feel that the list of user roles is quite complete, and we are in the process of refining the user stories associated with each role. This document does not, however, at the current time, list the specific chronological steps in each user story.  We're not sure if it ever will; this is an open question atm.

### OpenDI compliance
At the time of this writing, there is no formal assessment procedure nor criteria for what it means for software to be "OpenDI compliant".  We expect that this will remain the case for the foreseeable future.

### Known Issues
This section exists to handle cases where we want to inform the community that we are aware of high-profile issues with the relased version of the documentation.

For up-to-date issues, to-do items, etc., see this repository's [issues](https://github.com/opendi-org/user-stories-internal/issues) page.

### Document History

* (v0.0.4): 04/10/2024--05/07/2024: Refactored document, splitting content across multiple files: individual role files, separate glossary doc, OpenDI intro doc, overview doc. Done by Isaac Kellogg (isaac.kellogg@quantellia.com)
* (v0.0.3): 03/10/2024--03/31/2024: Updated entire document top to bottom, ready for review (lorien.pratt@quantellia.com)
* v0.0.2: 01/23/2024--02/07/2024: Revision by Dave Roberts (dlrober4@ncsu.edu).
* v0.0.1: 07/31/2023--08/03/2023: Review by Dave Roberts (dlrober4@ncsu.edu), Lorien Pratt (lorien.pratt@quantellia.com), Nadine Malcolm (nadine.Malcolm@quantellia.com), and Mark Zangari (mark.zangari@quantellia.com).
* v0.0.0: 07/2023: Initial drafting by Dave Roberts (dlrober4@ncsu.edu), based on discussion with Lorien Pratt (lorien.pratt@quantellia.com) and Nadine Malcolm (nadine.Malcolm@quantellia.com) as memorialized [here](https://docs.google.com/document/d/1btub6XIUhmhT1yEhVIGpuEwEVdhalEUd7TpbYk_aMbQ/edit). 