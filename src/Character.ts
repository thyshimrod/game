/// <reference path="./ObjInOpenSpace.ts"/>

module Itsis{
	export enum State{
			home = 0,
			working =1,
			lunch = 2,
			breaktime = 3,
			goToDesk = 4 	
		};
		
	class Character extends ObjInOpenSpace{
		
		startingHour : number;
		endingHour : number;
		endurance : number; 
		enduranceMax : number; 
		productivity : number; // base 100
		motivation : number; // base 100
		state : number;
		
		create(){
			this.state = State.home;
			this.startingHour = 8;
			this.endingHour = 18;
			this.enduranceMax = 100;
			this.endurance = this.enduranceMax;
			this.productivity = 100; 	
			this.motivation = 70;
		};
		
		updateAtHome(timeInOpenSpace){
			if (timeInOpenSpace > this.startingHour){
				this.state=State.goToDesk;
			}
		};
		
		updateGoToDesk(timeInOpenSpace){
			// path to desk 
			
			//At end
			// this.state = State.working;
		}
		
		update(timeInOpenSpace){
			switch(timeInOpenSpace){
				case State.home:
					this.updateAtHome(timeInOpenSpace);
				break;
				case State.goToDesk:
					this.updateGoToDesk(timeInOpenSpace);
				break;
				default:
				break;
			}
			
			
		};
		

	}
}