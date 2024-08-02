# Decision Simulation Builder

## Who is a Decision Simulation Builder?

As the Decision Simulation Builder, it is my job to receive a CDM from the [Decision Model Builder](./Decision%20Model%20Builder.md) and prepare it for simulation.  This means that I receive the CDM along with associated decision assets that will ultimately be used when a [Decision Simulation Manager](./Decision%20Simulation%20Manager.md) runs simulations. As such, my role is that of an author who is taking the "outline" provided by the [Decision Model Builder](./Decision%20Model%20Builder.md) and filling in the prose that makes it readable.

I work in the time frame *before* a decision is made, to help choose actions or combination of actions.

## User Stories

1. As a Decision Simulation Builder, I want to __review existing decision assets__ associated with the elements (actions, outcomes, intermediates, and dependencies) comprising the CDM for which I'm building a simulation, so that I can understand what data, AI models, prior simulations, _etc._ exist and are already available to be incorporated into the decision model for which I'm building the simulation.
2. As a Decision Simulation Builder, I want to be able to __associate decision assets computationally__ with the components of a model, so that simulations can pull from repositories of sources of data and models while being executed. 
3. As a Decision Simulation Builder, I want to be able to __annotate decision assets or model components__ with metadata describing their status, so that I can keep track of the state, provenance, history, and suitability of an asset for association with a model component.  
   This will enable me to support the work of refining model components from abstract declarations provided by the [Decision Model Builder](./Decision%20Model%20Builder.md) to runnable simulations of various detail and complexity that will be used by the [Decision Simulation Manager](./Decision%20Simulation%20Manager.md). 
4. As a Decision Simulation Builder, I want to be able to __manage decision assets connect to a simulation__, so that I can create, search for, update, and delete decision assets.  
   This will enable me to refine existing decision models, identify new assets, _etc._ as I work to build simulations. 
5. As a Decision Simulation Builder, I want to be able to __search for existing decision models__, so that I can view how assets have been associated with decision model components in the past.  
   This will help be identify where prior work can be leveraged to build a simulation or where new work must be created. 
6. As a Decision Simulation Builder, I want to be able to __run test simulations__, potentially in a sandbox environment with sample data or models, so that I can debug the models, assets, and simulation design and can characterize the computational requirements of the simulation. 
7. As a Decision Simulation Builder, I want to be ale to __define the types of computational resources__ that are necessary to run the components of those simulations. 