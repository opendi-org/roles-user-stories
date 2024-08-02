# Decision Model Builder

## Who is a Decision Model Builder?

As a Decision Model Builder, I author Causal Decision Models (CDMs) within OpenDI-compliant software systems. I may use Causal Decision Diagrams (CDDs) &mdash; possibly created by a DI Analyst &mdash; as a starting point to create the dependencies and specify the entities associated with the CDM.

I work in the time frame *before* a decision is made, to help choose actions or combinations of actions.

My model could be a diagram (as in the case of a CDD) or specified in code, a text file, or some other format. My role is not to connect model components to specific assets within the ecosystem, but rather to create a "scaffold" in which this can be done, by specifying the model entities and structure in advance of this specification.

In this sense, the CDM is high-level—in many cases, not necessarily a computer-executable—specification of the decision simulation.

When I am done, I hand off my CDM to the [Decision Simulation Builder](./Decision%20Simulation%20Builder.md), whose job is to finalize the CDM so that it can be used for simulation.  In other words, I act as the bridge between the [DI Analyst](./DI%20Analyst.md) and the Decision Simulation Builder.

## User Stories

1. As a Decision Model Builder, I want to **form a team of collaborators**, so that others may contribute to building and/or modifying a model.
2. As a Decision Model Builder, I want to **edit a model**, to adjust its existing structure or decision elements, so that I can fix errors, incorporate new knowledge, or explore the potential of different model entities or structures.  
   As part of the editing process, I may want to create, update, or delete actions, outcomes, intermediates, or other Decision Elements.
3. As a Decision Model Builder, I want to **search for model components in the asset library** (maintained by the [Decision Asset Manager](./Decision%20Asset%20Manager.md)), so that I can reuse or repurpose existing actions, outcomes, and other Decision Elements that have been used in the past by me or by others, and incorporate them into the model I am currently building.  
   I may want to utilize assets in this way both while authoring new models from scratch or while editing existing models.
4. As a Decision Model Builder, I want to **search for model components that are not in the asset library**, so that I can discover new assets that might be useful for a CDM.
5. As a Decision Model Builder, I want to **share decision models** with others, so that others may review the model or use it for planning purposes.
6. As a Decision Model Builder, I want to **share decision models** with others, so that others may build upon my work, including tailoring it for alternative circumstances.
7. As a Decision Model Builder, I want to **search for, browse, and select from entire foundation decision models** that I or others have created, so that I can leverage existing knowledge and expertise in the pursuit of building new models.
8. As a Decision Model Builder, I want to **search for, browse, and select from individual actions, outcomes, or other Decision Elements** that I or others have created, so that I can leverage existing knowledge and expertise in the pursuit of building new models.
9. As a Decision Model Builder, I want to **copy a foundation decision model**, so that I am able to make changes to existing models that I or others have authored while preserving the previous version of a model.  
   This will enable me to adapt and customize a model for use by others.
10. As a Decision Model Builder, I want to **copy individual actions, outcomes, intermediates, and dependencies from a foundation decision model or other repository**, so that I am able to make changes to existing model components that I or others have authored while preserving the previous version of a model component.  
	This will enable me to adapt and customize model components for use by others.
11. As a Decision Model Builder, I want to have **federated repository access**, so that I can store references to models and components, allowing me to synchronize changes when these referenced assets are updated.
12. As a Decision Model Builder, I want to **alert the [Decision Simulation Builder](./Decision%20Simulation%20Builder.md)** when a CDM is ready, so that the Decision Simulation Builder can prepare simulations.