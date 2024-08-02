# Decision Monitor Builder

## Who is a Decision Monitor builder?

I am a user who will rig a Causal Decision Model to be updated with evidence of values of decision elements (e.g. intermediates, outcomes, externals, _etc._), so that a [Decision Monitor](./Decision%20Monitor.md) may evaluate whether the likelihood of achieving desirable outcomes has substantively changed, based on external circumstances that may be different from those that were assumed during decision simulation.

I work in the time frame *after* a decision associated with a particular CDM has been made. My job is to help to track the expected consequences of the decision against its actual impacts in *reality*, not *simulation*.

My primary role is to create computational mechanisms that **detect** evidence of potential future problems with outcomes and **alert** users to that evidence. By way of example, a particular decision model may reflect that if a competitor's pricing goes below $5, then the model assumptions that led to a particular decision have been violated, so that a decision needs to be revisited.  It is my job to create a computational system that does this detection and alerting.

I work primarily with data that is reflective of real-world situations to update models that may have been used by a [Decision Maker](./Decision%20Maker.md) in the past or are currently being simulated by a [Decision Simulation Manager](./Decision%20Simulation%20Manager.md). 

I hand off my work to the [Decision Monitor](./Decision%20Monitor.md), whose job it is to deploy and manage my built decision monitor.

## User Stories

1. As a Decision Monitor Builder, I want to __analyze the decision model__, including its dependencies and assumptions, so that I can determine what values of intermediates and/or externals reflect the need to alert users.
2. As a Decision Monitor Builder, I want to **maintain an understanding of the relationship between key process indicators (KPIs) and decision elements**, so that I can support my organization's use of KPIs.
3. As a Decision Monitor Builder, I want to **create dashboards** or similar display mechanism that display values of intermediates and/or externals, so that I can highlight the elements to which the outcomes are particularly sensitive.
4. As a Decision Monitor Builder, I want to **work with decision makers**, so that I can understand what constitutes the need for an alert.
5. As a Decision Monitor Builder, I want to **configure alerting mechanisms** for various users, so that those users can receive notice of their preferred alerts.
6. As a Decision Monitor Builder, I want to **choose an appropriate polling frequency** to check for alertable conditions, so that I can balance caution and notification overwhelm.
7. As a Decision Monitor Builder, I want to **consolidate multiple redundant alerts ("alarm storms")** as appropriate, so that I can avoid overwhelming users with redundant alert notifications.
8. As a Decision Monitor Builder, I want to **monitor and maintain integrations with real-time data sources**, so that my alerts and dashboards remain accurate, timely, and relevant.