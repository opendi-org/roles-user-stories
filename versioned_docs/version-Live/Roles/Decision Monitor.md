# Decision Monitor

## Who is a Decision Monitor?

I am a user who, as a primary goal, is interested in tracking a decision model that has been used by a [Decision Maker](./Decision%20Maker.md) as it is updated with new evidence of outcomes, externals, intermediates, _etc._ that become available after a decision has been made. My primary interest is to identify if the likelihood of achieving the desired outcomes of that Decision Maker have changed to such an extent that the decision should be revisited. 

I receive my monitoring system from the [Decison Monitor Builder](./Decision%20Monitor%20Builder.md), and I may pass my results to any of the other roles, because my monitoring may require updates throughout the decision creation process.

## User Stories

1. As a Decision Monitor, I want to be **notified when my outcomes are at risk** so that I may chose an appropriate action.  
   Appropriate actions may be to revisit the decision made, rebuild the CDM, accept the risk, or create some new action to mitigate the risk.
2. As a Decision Monitor, I want to perform **root cause analysis** upon being alerted to an outcome risk, so that I can determine what action or external factor led to the problem.  
   Here, root cause analysis means tracking upstream in the causal chain, starting from a concerning intermediate or outcome.
3. As a Decision Monitor, I want to be **notified of which causal chains have the greatest impact** on risky situations, so that I can perform sensitivity analysis.  
   This is especially relevant when I am performing root cause analysis.
4. As a Decision Monitor, I want to **understand how my candidates for risk mitigation actions may change downstream impacts** (likelihood and expected impacts) on intermediates and/or outcomes, so that I can make better recommendations for risk mitigation actions.  
   This is especially relevant when I am performing root cause analysis. Risk mitigation actions may consist of different choices within existing actions (e.g. change a price), and/or new actions that were not previously modeled (e.g. hire an influencer not previously considered).
5. As a Decision Monitor, I want to perform **impact analysis**, so that I can track downstream in the causal chain from a concerning external or intermediate to determine the potential impact on outcomes from the concerning situation.  
   This is especially relevant when I am being alerted to an outcome risk.
6. As a Decision Monitor, I want to estimate both the **likelihood** and the **expected impact** of my outcomes, so that I can provide better recommendations while performing impact analysis.