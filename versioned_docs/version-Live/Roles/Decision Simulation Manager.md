# Decision Simulation Manager

## Who is a Decision Simulation Manager?

I am the user who takes a simulation provided by the [Decision Simulation Builder](./Decision%20Simulation%20Builder.md) and performs the tasks to execute the simulation on some computational resource. A built simulation is a fully-specified causal decision model (CDM) complete with computationally specified actions, outcomes, intermediates, dependencies, and their associated decision assets. My job is to manage the simulation (hyper)parameters, schedule the execution of simulations, and curate results. I may share these results in raw or processed form with [Decision Makers](./Decision%20Maker.md) or other user roles. 

## User Stories

1. As a Decision Simulation Manager, I want to be able to run simulations in **forward-only mode**, so that users can experiment with actions and/or externals, and view resulting intermediates and outcomes.
2. As a Decision Simulation Manager, I want to be able to run simulations in **optimization mode**, so that users can search for sets of actions that are expected to provide the best outcomes, given expected external circumstances.  
   Here, the simulation experiments in an automatic and systematic way with different combinations of actions and externals to search for optimal configurations.
3. As a Decision Simulation Manager, I want to be able to configure the simulation system to make **Action recommendations**.
4. As a Decision Simulation Manager, I want to be able to configure the simulation system to explain the rationale for its action recommendations.
5. As a Decision Simulation Manager, I want to **create, read, update, and delete simulation parameters**, so that I can run a range of simulations for any given model.  
   Simulation parameters include, but are not limited to:
	- batch size
	- start time
	- frequency
	- run parameters
	- computation resources (e.g. server affinity, GPU use, etc.)
6. As a Decision Simulation Manager, I want to **view CDMs** shared with me, so that I can make choices about how best to run simulations.  
   My view of a CDM needs to include enough information for me to determine the computational resources necessary to run the simulations required, and may be a distinct view from those offered to other user roles. 
7. As a Decision Simulation Manager, I want to be able to __see the status of simulations__ across a wide variety of computational resources, so that I can track progress, see resource utilization, understand cost, identify errors, and verify deadlines are being met. 
8. As a Decision Simulation Manager, I want to be able to __bind or reserve existing computational resources__ from the pool of available OpenDI-compliant systems, so that I can ensure capacity of my simulation infrastructure is commensurate with simulation needs.  
   If my infrastructure's capacity is not sufficient for my needs, I may use tooling to request more from an [OpenDI System Administrator](./OpenDI%20System%20Administrator.md) or leverage separate IT processes in my organization. 
9. As a Decision Simulation Manager, I want to be able to __view and share results of simulations__ with [Decision Makers](./Decision%20Maker.md), [Decision Simulation Builders](./Decision%20Simulation%20Builder.md), and [Decision Model Builders](./Decision%20Model%20Builder.md), so that all team members are able to keep track of simulation progress and effectiveness, and to identify and solve errors if/when they may occur. 