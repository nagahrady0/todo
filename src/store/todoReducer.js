


const initState = [];



export const todoReducer = (state = initState, action )=>{

	switch(action.type){
		
		case "addToDo":
		const found = state.filter((el) => el.title == action.payload.title && el.description == action.payload.description );
		console.log(found)
			if(found.length> 0){
				
				localStorage.setItem("todos", JSON.stringify(state));
				return [...state] 
			}
			else{
				localStorage.setItem("todos", JSON.stringify([...state , action.payload]));
				return [ action.payload , ...state ];
			}
	
		case "removeItem":
			const newItems = state.filter((el)=> el !== action.payload );
			localStorage.setItem("todos", JSON.stringify(newItems));
			return [...newItems];
		case "clear":
			localStorage.removeItem("todos");
			return [];	
			
		default :
			return state ;
	
	}
}





