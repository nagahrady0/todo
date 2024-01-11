import './todoForm.css';
import {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';

const ToDoForm = ()=>{

const dispatch = useDispatch();
const state = useSelector((state) => state) ;

useEffect(()=>{

	if(localStorage.getItem("todos") !== null){
	
	const arr = JSON.parse(localStorage.getItem("todos"));
	
	arr.map((el)=>{
	
		dispatch({type:"addToDo" , payload : el});
	})
	
	}

} );


const items = state.map((el , index)=> (
			<div className="custom data" key={index}>
				<div className="info">
					<h3 style={{"marginBottom":"10px"}}> {el.title} </h3>
					<p>
						{el.description}
					</p>
				</div>

				  <i class="del-button fa fa-trash-o fa-lg" onClick={
				()=>{
				
				dispatch({type:"removeItem" , payload : el});
				}}/>
			</div>

));
console.log(items);
	return(
		
		<div class="container">
		<h1> to do app </h1>
		<div className="form">
			
			<div className="custom input">
				<input type="text" placeholder="title" id = "title"/>
				<input type="text" placeholder="description" id = "description"/>
				<button className="add" onClick={()=>{
				
				const objData = {
				title : document.getElementById('title').value , 
				description : document.getElementById('description').value ,
				}
				if(document.getElementById('title').value !== "" && document.getElementById('description').value !== ""){
				dispatch({type:"addToDo" , payload : objData});
				}
				document.getElementById('title').value  = "";
				document.getElementById('description').value  = "";
				
				}}> add task </button>
			
			</div>
			{items}
			
			{
			state.length > 0 && <button className="clear" onClick={
			
			()=>{dispatch({type:"clear"})}
			
			}> clear all tasks </button>
			}
		</div>
		</div>
	
	);
}

export default ToDoForm;
