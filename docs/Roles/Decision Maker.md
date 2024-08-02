# Decision Maker

## Who is a Decision Maker?

In the context of decision intelligence software, I am a Decision Maker, which means I have two primary goals:
1. To gain an intuition regarding how actions lead to outcomes in certain circumstances (*forward simulation*).
2. To use a DI software system to determine the best set of actions to achieve my desired outcomes (*decision optimization*).

In the context of this standard, although Decision Makers, in general, may not be users of OpenDI-compliant software, in the context of this document, I, the Decision Maker, do indeed use such software.

To achieve goals (1) and (2) above, my primary use of OpenDI-compliant software is to interact with renderings (_e.g._, visualizations, textual descriptions, _etc_.) of decision models provided by [Decision Model Builders](./Decision%20Model%20Builder.md) (for goal 1, above) and the results of simulations provided by [Decision Simulation Managers](./Decision%20Simulation%20Manager.md) (primarily for goal 2, above).

I may use these simulation results as guidance for actions that are taken by humans.  I may also use these results to review actions that are fully automated.

Generally speaking, I may be a non-technical person, which means that the renderings I prefer to view may leave out "under the hood" details, perhaps only showing Actions and Outcomes, and not additional decision elements like Externals and Intermediates.

I work in the time frame *before* a decision is made, to help choose Actions or combination of Actions.

## User Stories

1. As a Decision Maker, I want to __interact with action-to-outcome renderings__, so that I can improve my decision making.  
   Interacting with renderings will include selecting decision model components to gain more information, focusing on different parts of the decision model, and selecting and modifying Actions and/or Externals using user interface controls.
2. As a Decision Maker, I want to  __view simulation results__ of decision models so that I can improve my understanding of how actions lead to different outcomes in different circumstances, so that I can learn which combinations of actions lead to the best set of outcomes.   
These results may be presented in *forward-only mode*, where I can experiment with externals and/or actions and observe their impact on outcomes.  These results may also be presented in *optimization mode*, where I can observe the outcomes resulting from many different combinations of actions and outcomes.
3. As a Decision Maker, I want to __receive recommendations__ of Actions or combinations of Actions that the DI system thinks are most likely to lead to my desired outcomes.
4. As a Decision Maker, I want to __receive explanations__ justifying recommended Actions or combinations of Actions.